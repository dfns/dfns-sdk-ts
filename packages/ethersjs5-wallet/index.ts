import { DfnsApiClient } from '@dfns/sdk'
import { SignatureKind, SignatureStatus } from '@dfns/sdk/codegen/datamodel/Wallets'
import { getAddress } from '@ethersproject/address'
import { Provider, TransactionRequest } from '@ethersproject/abstract-provider'
import { Signer, TypedDataDomain, TypedDataField, TypedDataSigner } from '@ethersproject/abstract-signer'
import { hexlify } from '@ethersproject/bytes'
import { hashMessage, _TypedDataEncoder } from '@ethersproject/hash'
import { keccak256 } from '@ethersproject/keccak256'
import { defineReadOnly, resolveProperties } from '@ethersproject/properties'
import { serialize, UnsignedTransaction } from '@ethersproject/transactions'

const sleep = (interval = 0) => new Promise((resolve) => setTimeout(resolve, interval))

export type DfnsWalletOptions = {
  walletId: string
  dfnsClient: DfnsApiClient
  maxRetries?: number
  retryInterval?: number
}

export class DfnsWallet extends Signer implements TypedDataSigner {
  private address?: string
  private options: Required<DfnsWalletOptions>

  constructor(options: DfnsWalletOptions, provider?: Provider | null) {
    super()

    this.options = {
      ...options,
      maxRetries: options.maxRetries ?? 3,
      retryInterval: options.retryInterval ?? 1000,
    }

    defineReadOnly(this, 'provider', provider || undefined)
  }

  connect(provider: Provider | null): Signer {
    return new DfnsWallet(this.options, provider)
  }

  async getAddress(): Promise<string> {
    if (!this.address) {
      const { walletId, dfnsClient } = this.options
      const res = await dfnsClient.wallets.getWallet({ walletId })
      if (!res.address) {
        throw new Error(`wallet ${walletId} does not have an address`)
      }
      this.address = getAddress(res.address)
    }

    return this.address
  }

  async waitForSignature(signatureId: string): Promise<string> {
    const { walletId, dfnsClient, retryInterval } = this.options

    let maxRetries = this.options.maxRetries
    while (maxRetries > 0) {
      await sleep(retryInterval)

      const res = await dfnsClient.wallets.getSignature({ walletId, signatureId })
      if (res.status === SignatureStatus.Signed) {
        if (!res.signature?.encoded) break
        return res.signature.encoded
      } else if (res.status === SignatureStatus.Failed) {
        break
      }

      maxRetries -= 1
    }

    throw new Error(`signature ${signatureId} not available`)
  }

  async signTransaction(transaction: TransactionRequest): Promise<string> {
    return resolveProperties(transaction).then(async (tx) => {
      if (tx.from != null) {
        if (getAddress(tx.from) !== (await this.getAddress())) {
          throw new Error('transaction from address mismatch')
        }
        delete tx.from
      }

      const { walletId, dfnsClient } = this.options
      const res = await dfnsClient.wallets.generateSignature({
        walletId,
        body: { kind: SignatureKind.Hash, hash: keccak256(serialize(<UnsignedTransaction>tx)) },
      })
      const signature = await this.waitForSignature(res.id)

      return serialize(<UnsignedTransaction>tx, signature)
    })
  }

  async signMessage(message: string | Uint8Array): Promise<string> {
    const { walletId, dfnsClient } = this.options

    const res = await dfnsClient.wallets.generateSignature({
      walletId,
      body: { kind: SignatureKind.Hash, hash: hashMessage(message) },
    })

    return this.waitForSignature(res.id)
  }

  async _signTypedData(
    domain: TypedDataDomain,
    types: Record<string, TypedDataField[]>,
    value: Record<string, any>
  ): Promise<string> {
    const { walletId, dfnsClient } = this.options
    const res = await dfnsClient.wallets.generateSignature({
      walletId,
      body: {
        kind: SignatureKind.Eip712,
        types,
        domain: {
          name: domain.name ?? undefined,
          version: domain.version ?? undefined,
          chainId: domain.chainId ? Number(domain.chainId) : undefined,
          verifyingContract: domain.verifyingContract ?? undefined,
          salt: domain.salt ? hexlify(domain.salt) : undefined,
        },
        message: value,
      },
    })

    return this.waitForSignature(res.id)
  }
}
