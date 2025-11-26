import { DfnsApiClient, DfnsError } from '@dfns/sdk'
import { GetWalletResponse } from '@dfns/sdk/types/wallets'
import { PublicKey, Transaction, VersionedTransaction } from '@solana/web3.js'

export type DfnsWalletOptions = {
  walletId: string
  dfnsClient: DfnsApiClient
}

type WalletMetadata = GetWalletResponse & { boundToSolanaNetwork: boolean }

const hexToBuffer = (hex: string): Buffer => {
  return Buffer.from(hex.replace(/^0x/, ''), 'hex')
}

export class DfnsWallet {
  public readonly publicKey: PublicKey
  private readonly dfnsClient: DfnsApiClient

  private constructor(private metadata: WalletMetadata, options: DfnsWalletOptions) {
    this.dfnsClient = options.dfnsClient
    this.publicKey = new PublicKey(Buffer.from(metadata.signingKey.publicKey, 'hex'))
  }

  public static async init(options: DfnsWalletOptions) {
    const { walletId, dfnsClient } = options
    const res = await dfnsClient.wallets.getWallet({ walletId })

    if (res.status !== 'Active') {
      throw new DfnsError(-1, 'wallet not active', { walletId, status: res.status })
    }

    const { scheme, curve } = res.signingKey
    if (scheme !== 'EdDSA') {
      throw new DfnsError(-1, 'key scheme is not EdDSA', { walletId, scheme })
    }
    if (curve !== 'ed25519') {
      throw new DfnsError(-1, 'key curve is not ed25519', { walletId, curve })
    }

    const metadata = {
      boundToSolanaNetwork: res.network === 'Solana' || res.network === 'SolanaDevnet',
      ...res,
    }
    return new DfnsWallet(metadata, options)
  }

  public get address(): string {
    return this.publicKey.toBase58()
  }

  public async signTransaction(transaction: Transaction): Promise<Transaction> {
    if (this.metadata.boundToSolanaNetwork) {
      const res = await this.dfnsClient.wallets.generateSignature({
        walletId: this.metadata.id,
        body: {
          kind: 'Transaction',
          transaction: `0x${transaction.serialize({ verifySignatures: false }).toString('hex')}`,
        },
      })

      let responseStatus = res.status
      let signedData = res.signedData
      while (!signedData && responseStatus != 'Failed') {

        // Wait 10s before polling again
        await new Promise((resolve) => setTimeout(resolve, 10000))

        // Poll for signature if not immediately available
        const getSig = await this.dfnsClient.wallets.getSignature({
          walletId: this.metadata.id,
          signatureId: res.id
        })
        responseStatus = getSig.status
        signedData = getSig.signedData
      }

      if (!signedData) {
        throw new DfnsError(-1, 'signedData missing', res)
      }
      return Transaction.from(hexToBuffer(signedData))
    } else {
      const res = await this.dfnsClient.wallets.generateSignature({
        walletId: this.metadata.id,
        body: {
          kind: 'Message',
          message: `0x${transaction.serializeMessage().toString('hex')}`,
        },
      })


      let responseStatus = res.status
      let signature = res.signature
      while (!signature && responseStatus != 'Failed') {

        // Wait 10s before polling again
        await new Promise((resolve) => setTimeout(resolve, 10000))

        // Poll for signature if not immediately available
        const getSig = await this.dfnsClient.wallets.getSignature({
          walletId: this.metadata.id,
          signatureId: res.id
        })
        responseStatus = getSig.status
        signature = getSig.signature
      }

      if (!signature) {
        throw new DfnsError(-1, 'signature missing', res)
      }
      const { r, s } = signature
      transaction.addSignature(this.publicKey, Buffer.concat([hexToBuffer(r), hexToBuffer(s)]))
      return transaction
    }
  }

  public async signVersionedTransaction(transaction: VersionedTransaction): Promise<VersionedTransaction> {
    if (this.metadata.boundToSolanaNetwork) {
      const res = await this.dfnsClient.wallets.generateSignature({
        walletId: this.metadata.id,
        body: {
          kind: 'Transaction',
          transaction: `0x${Buffer.from(transaction.serialize()).toString('hex')}`,
        },
      })

      let responseStatus = res.status
      let signedData = res.signedData
      while (!signedData && responseStatus != 'Failed') {

        // Wait 10s before polling again
        await new Promise((resolve) => setTimeout(resolve, 10000))

        // Poll for signature if not immediately available
        const getSig = await this.dfnsClient.wallets.getSignature({
          walletId: this.metadata.id,
          signatureId: res.id
        })
        responseStatus = getSig.status
        signedData = getSig.signedData
      }

      if (!signedData) {
        throw new DfnsError(-1, 'signedData missing', res)
      }
      return VersionedTransaction.deserialize(hexToBuffer(signedData))
    } else {
      const res = await this.dfnsClient.wallets.generateSignature({
        walletId: this.metadata.id,
        body: {
          kind: 'Message',
          message: `0x${Buffer.from(transaction.message.serialize()).toString('hex')}`,
        },
      })

      let responseStatus = res.status
      let signature = res.signature
      while (!signature && responseStatus != 'Failed') {

        // Wait 10s before polling again
        await new Promise((resolve) => setTimeout(resolve, 10000))

        // Poll for signature if not immediately available
        const getSig = await this.dfnsClient.wallets.getSignature({
          walletId: this.metadata.id,
          signatureId: res.id
        })
        responseStatus = getSig.status
        signature = getSig.signature
      }

      if (!signature) {
        throw new DfnsError(-1, 'signature missing', res)
      }
      const { r, s } = signature
      transaction.addSignature(this.publicKey, Buffer.concat([hexToBuffer(r), hexToBuffer(s)]))
      return transaction
    }
  }
}
