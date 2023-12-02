import { DfnsApiClient, DfnsError } from '@dfns/sdk'
import { GetWalletResponse, GenerateSignatureResponse } from '@dfns/sdk/types/wallets'
import { PublicKey, Transaction, VersionedTransaction } from '@solana/web3.js'

export type DfnsWalletOptions = {
  walletId: string
  dfnsClient: DfnsApiClient
}

type WalletMetadata = GetWalletResponse & { boundToSolanaNetwork: boolean }

const hexToBuffer = (hex: string): Buffer => {
  return Buffer.from(hex.replace(/^0x/, ''), 'hex')
}

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

const combineSignature = (res: GenerateSignatureResponse): Buffer => {
  if (!res.signature) {
    throw new DfnsError(-1, 'signature missing', res)
  }

  const { r, s } = res.signature
  return Buffer.concat([hexToBuffer(r), hexToBuffer(s)])
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

      assertSigned(res)
      if (!res.signedData) {
        throw new DfnsError(-1, 'signedData missing', res)
      }
      return Transaction.from(hexToBuffer(res.signedData))
    } else {
      const res = await this.dfnsClient.wallets.generateSignature({
        walletId: this.metadata.id,
        body: {
          kind: 'Message',
          message: `0x${transaction.serializeMessage().toString('hex')}`,
        },
      })

      assertSigned(res)
      transaction.addSignature(this.publicKey, combineSignature(res))
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

      assertSigned(res)
      if (!res.signedData) {
        throw new DfnsError(-1, 'signedData missing', res)
      }
      return VersionedTransaction.deserialize(hexToBuffer(res.signedData))
    } else {
      const res = await this.dfnsClient.wallets.generateSignature({
        walletId: this.metadata.id,
        body: {
          kind: 'Message',
          message: `0x${Buffer.from(transaction.message.serialize()).toString('hex')}`,
        },
      })

      assertSigned(res)
      transaction.addSignature(this.publicKey, combineSignature(res))
      return transaction
    }
  }
}
