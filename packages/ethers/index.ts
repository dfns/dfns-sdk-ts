import { DfnsApiClient } from '@dfns/sdk'
import { SignatureKind, SignatureStatus } from '@dfns/sdk/codegen/datamodel/Wallets'
import {
  AbstractSigner,
  Provider,
  Signature,
  Signer,
  Transaction,
  TransactionLike,
  TransactionRequest,
  TypedDataDomain,
  TypedDataField,
  assertArgument,
  getAddress,
  resolveAddress,
  resolveProperties,
} from 'ethers'

const sleep = (interval = 0) => new Promise((resolve) => setTimeout(resolve, interval))

export type DfnsWalletOptions = {
  walletId: string
  dfnsClient: DfnsApiClient
  maxRetries?: number
  retryInterval?: number
}

export class DfnsWallet extends AbstractSigner {
  private address?: string
  private options: Required<DfnsWalletOptions>

  constructor(options: DfnsWalletOptions, provider?: Provider | null) {
    super(provider)

    this.options = {
      ...options,
      maxRetries: options.maxRetries ?? 3,
      retryInterval: options.retryInterval ?? 1000,
    }
  }

  connect(provider: Provider | null): Signer {
    return new DfnsWallet(this.options, provider)
  }

  async getAddress(): Promise<string> {
    if (!this.address) {
      const { walletId, dfnsClient } = this.options
      const res = await dfnsClient.wallets.getWallet({ walletId })
      assertArgument(res.address, 'wallet does not have an address', 'walletId', walletId)
      this.address = res.address
    }

    return this.address
  }

  async refetch(signatureId: string): Promise<Signature> {
    const { walletId, dfnsClient, retryInterval } = this.options

    let maxRetries = this.options.maxRetries
    while (maxRetries > 0) {
      await sleep(retryInterval)

      const res = await dfnsClient.wallets.getSignature({ walletId, signatureId })
      if (res.status === SignatureStatus.Signed) {
        return Signature.from({
          r: res.signature!.r,
          s: res.signature!.s,
          v: res.signature!.recid ? 0x1c : 0x1b,
        })
      } else if (res.status === SignatureStatus.Failed) {
        break
      }

      maxRetries -= 1
    }

    throw new Error(`signature ${signatureId} not available`)
  }

  async signTransaction(tx: TransactionRequest): Promise<string> {
    // replace any Addressable or ENS name with an address
    const { to, from } = await resolveProperties({
      to: tx.to ? resolveAddress(tx.to, this.provider) : undefined,
      from: tx.from ? resolveAddress(tx.from, this.provider) : undefined,
    })

    if (to != null) {
      tx.to = to
    }
    if (from != null) {
      tx.from = from
    }

    if (tx.from != null) {
      assertArgument(
        getAddress(<string>tx.from) === (await this.getAddress()),
        'transaction from address mismatch',
        'tx.from',
        tx.from
      )
      delete tx.from
    }

    // sign the digest and build the transaction
    const btx = Transaction.from(<TransactionLike<string>>tx)

    const { walletId, dfnsClient } = this.options
    const res = await dfnsClient.wallets.generateSignature({
      walletId,
      body: { kind: SignatureKind.Hash, hash: btx.unsignedHash },
    })

    btx.signature = await this.refetch(res.id)
    return btx.serialized
  }

  async signMessage(message: string | Uint8Array): Promise<string> {
    return ''
  }

  async signTypedData(
    domain: TypedDataDomain,
    types: Record<string, TypedDataField[]>,
    value: Record<string, any>
  ): Promise<string> {
    return ''
  }
}
