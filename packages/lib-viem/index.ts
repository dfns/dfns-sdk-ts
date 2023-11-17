import { DfnsApiClient } from '@dfns/sdk'
import { KeyCurve, KeyScheme, SignatureKind, SignatureStatus } from '@dfns/sdk/codegen/datamodel/Wallets'
import {
  getAddress,
  Address,
  SignableMessage,
  hashMessage,
  Hash,
  Signature,
  signatureToHex,
  toHex,
  keccak256,
  serializeTransaction,
  hashTypedData,
  TypedDataDefinition,
  TransactionSerializable,
  SerializeTransactionFn,
  TypedData,
} from 'viem'
import { publicKeyToAddress } from 'viem/accounts'

const sleep = (interval = 0) => new Promise((resolve) => setTimeout(resolve, interval))

export type DfnsWalletOptions = {
  walletId: string
  dfnsClient: DfnsApiClient
  maxRetries?: number
  retryInterval?: number
}

export class DfnsWallet {
  public address: Address
  private options: Required<DfnsWalletOptions>

  constructor(address: Address, options: DfnsWalletOptions) {
    this.address = address
    this.options = {
      ...options,
      maxRetries: options.maxRetries ?? 3,
      retryInterval: options.retryInterval ?? 1000,
    }
  }

  public static async init(options: DfnsWalletOptions) {
    const { walletId, dfnsClient } = options
    const res = await dfnsClient.wallets.getWallet({ walletId })

    if (!res.signingKey || res.signingKey.scheme !== KeyScheme.ECDSA || res.signingKey.curve !== KeyCurve.secp256k1) {
      throw new Error(
        `wallet ${walletId} has incompatible scheme (${res.signingKey?.scheme}) or curve (${res.signingKey?.curve})`
      )
    }

    let address
    if (res.address) {
      address = getAddress(res.address)
    } else {
      address = publicKeyToAddress(toHex(res.signingKey.publicKey))
    }
    return new DfnsWallet(address, options)
  }

  private async waitForSignature(signatureId: string): Promise<Signature> {
    const { walletId, dfnsClient, retryInterval } = this.options

    let maxRetries = this.options.maxRetries
    while (maxRetries > 0) {
      await sleep(retryInterval)

      const res = await dfnsClient.wallets.getSignature({ walletId, signatureId })
      if (res.status === SignatureStatus.Signed) {
        if (!res.signature) break
        return {
          r: <`0x${string}`>res.signature.r,
          s: <`0x${string}`>res.signature.s,
          v: res.signature.recid ? 28n : 27n,
        }
      } else if (res.status === SignatureStatus.Failed) {
        break
      }

      maxRetries -= 1
    }

    const waitedSeconds = Math.floor((this.options.maxRetries * retryInterval) / 1000)
    throw new Error(
      `Signature request ${signatureId} took more than ${waitedSeconds}s to complete, stopping polling. Please update options "maxRetries" or "retryIntervals" to wait longer.`
    )
  }

  private async signHash(hash: Hash): Promise<Signature> {
    const { walletId, dfnsClient } = this.options
    const res = await dfnsClient.wallets.generateSignature({
      walletId,
      body: { kind: SignatureKind.Hash, hash },
    })

    return this.waitForSignature(res.id)
  }

  // must use the arrow syntax to bind `this` to all public methods, otherwise, after
  // viem's `toAccount`, the returned LocalAccount will not be able to resolve `this`
  // on method calls to `signMessage` and `signTypedData`

  signMessage = async ({ message }: { message: SignableMessage }): Promise<Hash> => {
    const signature = await this.signHash(hashMessage(message))
    return signatureToHex(signature)
  }

  signTransaction = async <TTransactionSerializable extends TransactionSerializable>(
    transaction: TTransactionSerializable,
    args?: {
      serializer?: SerializeTransactionFn<TTransactionSerializable>
    }
  ): Promise<Hash> => {
    let serializer = args?.serializer
    if (!serializer) {
      serializer = serializeTransaction
    }
    const hash = keccak256(serializer(transaction))
    const signature = await this.signHash(hash)
    return serializer(transaction, signature)
  }

  signTypedData = async <
    const TTypedData extends TypedData | { [key: string]: unknown },
    TPrimaryType extends string = string
  >(
    typedData: TypedDataDefinition<TTypedData, TPrimaryType>
  ): Promise<Hash> => {
    const hash = hashTypedData(typedData)
    const signature = await this.signHash(hash)
    return signatureToHex(signature)
  }
}
