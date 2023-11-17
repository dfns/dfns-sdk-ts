import { DfnsApiClient } from '@dfns/sdk'
import { KeyCurve, KeyScheme, SignatureKind, SignatureStatus } from '@dfns/sdk/codegen/datamodel/Wallets'

import {
  publicKeyToAddress,
} from 'viem/accounts'

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

  async waitForSignature(signatureId: string): Promise<Signature> {
    const { walletId, dfnsClient, retryInterval } = this.options

    let maxRetries = this.options.maxRetries
    while (maxRetries > 0) {
      await sleep(retryInterval)

      const res = await dfnsClient.wallets.getSignature({ walletId, signatureId })
      if (res.status === SignatureStatus.Signed) {
        if (!res.signature) break
        return ({
          r: toHex(res.signature.r),
          s: toHex(res.signature.s),
          v: res.signature.recid ? BigInt(28) : BigInt(27),
        })
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

  async signHash(hash: Hash): Promise<Signature> {
    const { walletId, dfnsClient } = this.options
    const res = await dfnsClient.wallets.generateSignature({
      walletId,
      body: { kind: SignatureKind.Hash, hash },
    })

    return this.waitForSignature(res.id)
  }

  async signMessage({ message }: { message: SignableMessage }): Promise<Hash> {
    const signature = await this.signHash(hashMessage(message))
    return signatureToHex(signature)
  }

  async signTransaction<TTransactionSerializable extends TransactionSerializable>(
    transaction: TTransactionSerializable,
    args?: {
      serializer?: SerializeTransactionFn<TTransactionSerializable>
    },
  ): Promise<Hash> {
    let serializer = args?.serializer
    if (!serializer) {
      serializer = serializeTransaction
    }
    const hash = keccak256(serializer(transaction))
    const signature = await this.signHash(hash)
    return serializer(
      transaction,
      signature,
    )
  }

  async signTypedData<
    const TTypedData extends TypedData | { [key: string]: unknown },
    TPrimaryType extends string = string,
  >(
    typedData: TypedDataDefinition<TTypedData, TPrimaryType>,
  ): Promise<Hash> {
    const hash = hashTypedData(typedData)
    const signature = await this.signHash(hash)
    return signatureToHex(signature)
  }

}

