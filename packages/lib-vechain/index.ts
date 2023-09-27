import { DfnsApiClient } from '@dfns/sdk'
import { BlockchainNetwork, SignatureKind, SignatureStatus } from '@dfns/sdk/codegen/datamodel/Wallets'
import { Wallet } from '@vechain/connex-driver'
import { ec } from 'elliptic'
import { address } from 'thor-devkit'

const sleep = (interval = 0) => new Promise((resolve) => setTimeout(resolve, interval))

export type DfnsWalletOptions = {
  walletId: string
  dfnsClient: DfnsApiClient
  maxRetries?: number
  retryInterval?: number
}

export class DfnsWallet implements Wallet {
  private options: Required<DfnsWalletOptions>

  private constructor(public readonly address: string, options: DfnsWalletOptions) {
    this.options = {
      ...options,
      maxRetries: options.maxRetries ?? 3,
      retryInterval: options.retryInterval ?? 1000,
    }
  }

  public static async init(options: DfnsWalletOptions): Promise<DfnsWallet> {
    const { walletId, dfnsClient } = options
    const res = await dfnsClient.wallets.getWallet({ walletId })

    if (res.network !== BlockchainNetwork.KeyECDSA || !res.signingKey) {
      throw new Error(`wallet ${walletId} is incompatible`)
    }

    const publicKey = new ec('secp256k1').keyFromPublic(res.signingKey.publicKey, 'hex')
    const addr = address.fromPublicKey(Buffer.from(publicKey.getPublic(false, 'array')))
    return new DfnsWallet(addr, options)
  }

  async waitForSignature(signatureId: string): Promise<Buffer> {
    const { walletId, dfnsClient, retryInterval } = this.options

    let maxRetries = this.options.maxRetries
    while (maxRetries > 0) {
      await sleep(retryInterval)

      const res = await dfnsClient.wallets.getSignature({ walletId, signatureId })
      if (res.status === SignatureStatus.Signed) {
        if (!res.signature) break
        return Buffer.concat([
          Buffer.from(res.signature.r.substring(2), 'hex'),
          Buffer.from(res.signature.s.substring(2), 'hex'),
          Buffer.from([res.signature.recid!]),
        ])
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

  private async sign(msgHash: Buffer): Promise<Buffer> {
    const { walletId, dfnsClient } = this.options
    const res = await dfnsClient.wallets.generateSignature({
      walletId,
      body: { kind: SignatureKind.Hash, hash: msgHash.toString('hex') },
    })

    return this.waitForSignature(res.id)
  }

  get list(): Wallet.Key[] {
    return [
      {
        address: this.address,
        sign: (msgHash: Buffer) => this.sign(msgHash),
      },
    ]
  }
}
