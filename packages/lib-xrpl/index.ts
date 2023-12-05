import { DfnsApiClient, DfnsError } from '@dfns/sdk'
import { Transaction, encode, hashes } from 'xrpl'
import { GetWalletResponse, GenerateSignatureResponse } from '@dfns/sdk/types/wallets'

export type DfnsWalletOptions = {
  walletId: string
  dfnsClient: DfnsApiClient
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

type WalletMetadata = GetWalletResponse

export class DfnsWallet {
  private readonly dfnsClient: DfnsApiClient
  private readonly signingPubKey: string

  private constructor(private metadata: WalletMetadata, options: DfnsWalletOptions) {
     // ripple adds the prefix "ed" to eddsa pubKey/private key to have
    // the same bytes number as ecdsa pubKey.
    const prefix = metadata.signingKey.scheme === 'EdDSA' ? 'ed' : ''
    this.signingPubKey = prefix + metadata.signingKey.publicKey

    this.dfnsClient = options.dfnsClient
  }

  public static async init(options: DfnsWalletOptions) {
    const { walletId, dfnsClient } = options
    const res = await dfnsClient.wallets.getWallet({ walletId })

    if (res.status !== 'Active') {
      throw new DfnsError(-1, 'wallet not active', { walletId, status: res.status })
    }

    if (res.network !== 'Ripple' && res.network !== 'RippleTestnet') {
      throw new DfnsError(-1, 'wallet is not bound to Ripple or RippleTestnet', { walletId, network: res.network })
    }

    return new DfnsWallet(res, options)
  }

  public get address(): string {
    return this.metadata.address!
  }

  public async signTransaction(transaction: Transaction): Promise<{ tx_blob: string; hash: string }> {
    const signatureResponse = await this.dfnsClient.wallets.generateSignature({
      walletId: this.metadata.id,
      body: { kind: 'Transaction', transaction: `0x${encode(transaction).toLowerCase()}`},
    })

    assertSigned(signatureResponse)

    if (!signatureResponse.signedData) {
      throw new DfnsError(-1, 'signedData missing', signatureResponse)
    }

    const signedTxSerialized = signatureResponse.signedData.replace(/^0x/, '')

    return {
      tx_blob: signedTxSerialized,
      hash: hashes.hashSignedTx(signedTxSerialized),
    }
  }
}

