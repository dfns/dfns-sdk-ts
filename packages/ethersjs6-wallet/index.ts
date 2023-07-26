import { DfnsApiClient } from '@dfns/sdk'
import { KeyCurve, KeyScheme, SignatureKind, SignatureStatus } from '@dfns/sdk/codegen/datamodel/Wallets'
import {
  AbstractSigner,
  Provider,
  Signature,
  Signer,
  Transaction,
  TransactionLike,
  TransactionRequest,
  TypedDataDomain,
  TypedDataEncoder,
  TypedDataField,
  computeAddress,
  getAddress,
  hashMessage,
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

      if (!res.signingKey || res.signingKey.scheme !== KeyScheme.ECDSA || res.signingKey.curve !== KeyCurve.secp256k1) {
        throw new Error(
          `wallet ${walletId} has incompatible scheme (${res.signingKey?.scheme}) or curve (${res.signingKey?.curve})`
        )
      }

      if (res.address) {
        this.address = getAddress(res.address)
      } else {
        this.address = computeAddress('0x' + res.signingKey.publicKey)
      }
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
        if (!res.signature) break
        return Signature.from({
          r: res.signature.r,
          s: res.signature.s,
          v: res.signature.recid ? 0x1c : 0x1b,
        }).serialized
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
      if (getAddress(<string>tx.from) !== (await this.getAddress())) {
        throw new Error('transaction from address mismatch')
      }
      delete tx.from
    }

    const btx = Transaction.from(<TransactionLike<string>>tx)

    const { walletId, dfnsClient } = this.options
    const res = await dfnsClient.wallets.generateSignature({
      walletId,
      body: { kind: SignatureKind.Hash, hash: btx.unsignedHash },
    })

    btx.signature = await this.waitForSignature(res.id)
    return btx.serialized
  }

  async signMessage(message: string | Uint8Array): Promise<string> {
    const { walletId, dfnsClient } = this.options
    const res = await dfnsClient.wallets.generateSignature({
      walletId,
      body: { kind: SignatureKind.Hash, hash: hashMessage(message) },
    })

    return this.waitForSignature(res.id)
  }

  async signTypedData(
    domain: TypedDataDomain,
    types: Record<string, TypedDataField[]>,
    value: Record<string, any>
  ): Promise<string> {
    // Populate any ENS names
    const populated = await TypedDataEncoder.resolveNames(domain, types, value, async (name: string) => {
      if (!this.provider) {
        throw new Error('cannot resolve ENS names without a provider')
      }
      const address = await this.provider.resolveName(name)
      if (!address) throw new Error(`unconfigured ENS name ${name}`)

      return address
    })

    const { walletId, dfnsClient } = this.options
    const res = await dfnsClient.wallets.generateSignature({
      walletId,
      body: {
        kind: SignatureKind.Hash,
        hash: TypedDataEncoder.hash(populated.domain, types, populated.value),
      },
    })

    return this.waitForSignature(res.id)
  }
}
