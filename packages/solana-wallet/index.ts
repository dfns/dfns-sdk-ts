import { DfnsApiClient } from '@dfns/sdk'
import { KeyCurve, KeyScheme, SignatureKind, SignatureStatus } from '@dfns/sdk/codegen/datamodel/Wallets'
import { PublicKey, Transaction } from '@solana/web3.js'

const sleep = (interval = 0) => new Promise((resolve) => setTimeout(resolve, interval))

export type DfnsWalletOptions = {
  walletId: string
  dfnsClient: DfnsApiClient
  maxRetries?: number
  retryInterval?: number
}

export class DfnsWallet {
  private options: Required<DfnsWalletOptions>

  private constructor(public readonly publicKey: PublicKey, options: DfnsWalletOptions) {
    this.options = {
      ...options,
      maxRetries: options.maxRetries ?? 3,
      retryInterval: options.retryInterval ?? 1000,
    }
  }

  public static async init(options: DfnsWalletOptions) {
    const { walletId, dfnsClient } = options
    const res = await dfnsClient.wallets.getWallet({ walletId })

    if (!res.signingKey || res.signingKey.scheme !== KeyScheme.EdDSA || res.signingKey.curve !== KeyCurve.ed25519) {
      throw new Error(
        `wallet ${walletId} has incompatible scheme (${res.signingKey?.scheme}) or curve (${res.signingKey?.curve})`
      )
    }

    const publicKey = new PublicKey(Buffer.from(res.signingKey.publicKey, 'hex'))
    return new DfnsWallet(publicKey, options)
  }

  public get address(): string {
    return this.publicKey.toBase58()
  }

  async waitForSignature(signatureId: string): Promise<Buffer> {
    const { walletId, dfnsClient, retryInterval } = this.options

    let maxRetries = this.options.maxRetries
    while (maxRetries > 0) {
      await sleep(retryInterval)

      const res = await dfnsClient.wallets.getSignature({ walletId, signatureId })
      if (res.status === SignatureStatus.Signed) {
        if (!res.signature) break
        return Buffer.from(res.signature.r.substring(2).concat(res.signature.s.substring(2)), 'hex')
      } else if (res.status === SignatureStatus.Failed) {
        break
      }

      maxRetries -= 1
    }

    throw new Error(`signature ${signatureId} not available`)
  }

  async signTransaction(transaction: Transaction): Promise<Transaction> {
    const message = transaction.serializeMessage()
    console.log(message.length)

    const { walletId, dfnsClient } = this.options
    const res = await dfnsClient.wallets.generateSignature({
      walletId,
      body: { kind: SignatureKind.Message, message: `0x${message.toString('hex')}` },
    })

    const signature = await this.waitForSignature(res.id)
    transaction.addSignature(this.publicKey, signature)
    return transaction
  }
}
