import { DfnsApiClient, DfnsError } from '@dfns/sdk'
import { GetWalletResponse, GenerateSignatureResponse } from '@dfns/sdk/types/wallets'
import {
  Address,
  GetTransactionType,
  Hash,
  SerializeTransactionFn,
  SignableMessage,
  Signature,
  TransactionSerializable,
  TransactionSerialized,
  TypedData,
  TypedDataDefinition,
  bytesToHex,
  getAddress,
  hashMessage,
  hashTypedData,
  keccak256,
  serializeTransaction,
  signatureToHex,
  stringToHex,
  toHex,
} from 'viem'
import { IsNarrowable } from 'viem/_types/types/utils'
import { publicKeyToAddress } from 'viem/accounts'

export type DfnsWalletOptions = {
  walletId: string
  dfnsClient: DfnsApiClient
  /** @deprecated transaction signing is now synchronous. polling is deprecated. */
  maxRetries?: number
  /** @deprecated transaction signing is now synchronous. polling is deprecated. */
  retryInterval?: number
}

type WalletMetadata = GetWalletResponse & { boundToEvmNetwork: boolean }

const assertSigned = (res: GenerateSignatureResponse) => {
  if (res.status === 'Failed') {
    throw new DfnsError(-1, 'signing failed', res)
  } else if (res.status !== 'Signed') {
    throw new DfnsError(
      -1,
      'cannot complete signing synchronously because this wallet action requires policy approval',
      res
    )
  }
}

const extractSignature = (res: GenerateSignatureResponse): Signature => {
  if (!res.signature) {
    throw new DfnsError(-1, 'signature missing', res)
  }

  return {
    r: <`0x${string}`>res.signature.r,
    s: <`0x${string}`>res.signature.s,
    v: res.signature.recid ? 28n : 27n,
  }
}

const boundToEvmNetwork = (wallet: GetWalletResponse): boolean => {
  // if the address is evm format, it's a wallet bound to evm network. prefer to
  // sign the full transaction instead of the hash of the transaction
  return wallet.address ? !!wallet.address.match(/^0x[0-9a-fA-F]{40}$/) : false
}

export class DfnsWallet {
  public readonly address: Address
  private readonly dfnsClient: DfnsApiClient

  private constructor(private metadata: WalletMetadata, options: DfnsWalletOptions) {
    this.address = this.metadata.boundToEvmNetwork
      ? getAddress(this.metadata.address!)
      : publicKeyToAddress(toHex(this.metadata.signingKey.publicKey))

    this.dfnsClient = options.dfnsClient

    // must scope these three functions. otherwise the `LocalAccount` returned with
    // `toAccount` will not be able to resolve `this` when calling sign functions
    this.signMessage = this.signMessage.bind(this)
    this.signTransaction = this.signTransaction.bind(this)
    this.signTypedData = this.signTypedData.bind(this)
  }

  public static async init(options: DfnsWalletOptions) {
    const { walletId, dfnsClient } = options
    const res = await dfnsClient.wallets.getWallet({ walletId })

    if (res.status !== 'Active') {
      throw new DfnsError(-1, 'wallet not active', { walletId, status: res.status })
    }

    const { scheme, curve } = res.signingKey
    if (scheme !== 'ECDSA') {
      throw new DfnsError(-1, 'key scheme is not ECDSA', { walletId, scheme })
    }
    if (curve !== 'secp256k1') {
      throw new DfnsError(-1, 'key curve is not secp256k1', { walletId, curve })
    }

    const metadata = {
      boundToEvmNetwork: boundToEvmNetwork(res),
      ...res,
    }

    return new DfnsWallet(metadata, options)
  }

  private async signHash(hash: Hash): Promise<Signature> {
    const res = await this.dfnsClient.wallets.generateSignature({
      walletId: this.metadata.id,
      body: { kind: 'Hash', hash },
    })

    assertSigned(res)
    return extractSignature(res)
  }

  public async signMessage({ message }: { message: SignableMessage }): Promise<Hash> {
    if (this.metadata.boundToEvmNetwork) {
      const hex =
        typeof message === 'string'
          ? stringToHex(message)
          : message.raw instanceof Uint8Array
          ? bytesToHex(message.raw)
          : message.raw

      const res = await this.dfnsClient.wallets.generateSignature({
        walletId: this.metadata.id,
        body: { kind: 'Message', message: hex },
      })

      assertSigned(res)
      return signatureToHex(extractSignature(res))
    } else {
      return signatureToHex(await this.signHash(hashMessage(message)))
    }
  }

  public async signTransaction<
    serializer extends SerializeTransactionFn<TransactionSerializable> = SerializeTransactionFn<TransactionSerializable>,
    transaction extends Parameters<serializer>[0] = Parameters<serializer>[0]
  >(
    transaction: transaction,
    args?:
      | {
          serializer?: serializer | undefined
        }
      | undefined
  ): Promise<
    IsNarrowable<TransactionSerialized<GetTransactionType<transaction>>, Hash> extends true
      ? TransactionSerialized<GetTransactionType<transaction>>
      : Hash
  > {
    const serializer = args?.serializer ?? serializeTransaction

    if (this.metadata.boundToEvmNetwork) {
      const res = await this.dfnsClient.wallets.generateSignature({
        walletId: this.metadata.id,
        body: { kind: 'Transaction', transaction: serializer(transaction) },
      })

      assertSigned(res)
      return serializer(transaction, extractSignature(res))
    } else {
      const hash = keccak256(serializer(transaction))
      const signature = await this.signHash(hash)
      return serializer(transaction, signature)
    }
  }

  public async signTypedData<
    const typedData extends TypedData | Record<string, unknown>,
    primaryType extends keyof typedData | 'EIP712Domain' = keyof typedData
  >(typedDataDefinition: TypedDataDefinition<typedData, primaryType>): Promise<Hash> {
    const hash = hashTypedData(typedDataDefinition)
    const signature = await this.signHash(hash)
    return signatureToHex(signature)
  }
}
