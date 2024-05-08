import { DfnsApiClient, DfnsError } from '@dfns/sdk'
import { GetWalletResponse, GenerateSignatureResponse } from '@dfns/sdk/types/wallets'
import { ISigner } from '@meshsdk/core'

export type DfnsWalletOptions = {
  walletId: string
  dfnsClient: DfnsApiClient
}

type WalletMetadata = GetWalletResponse

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

export class DfnsWallet implements ISigner {
  private readonly dfnsClient: DfnsApiClient

  private constructor(private metadata: WalletMetadata, options: DfnsWalletOptions) {
    this.dfnsClient = options.dfnsClient
  }

  public static async init(options: DfnsWalletOptions) {
    const { walletId, dfnsClient } = options
    const res = await dfnsClient.wallets.getWallet({ walletId })

    if (res.status !== 'Active') {
      throw new DfnsError(-1, 'wallet not active', { walletId, status: res.status })
    }

    if (res.network !== 'Cardano' && res.network !== 'CardanoPreprod') {
      throw new DfnsError(-1, 'wallet is not bound to Cardano or CardanoPreprod', {
        walletId,
        network: res.network,
      })
    }

    return new DfnsWallet(res, options)
  }

  public get address(): string {
    return this.metadata.address!
  }

  async signData() {
    throw new DfnsError(-1, 'Method not implemented.')
  }

  async signTx(unsignedTx: string): Promise<string> {
    const res = await this.dfnsClient.wallets.generateSignature({
      walletId: this.metadata.id,
      body: {
        kind: 'Transaction',
        transaction: `0x${unsignedTx}`,
      },
    })

    assertSigned(res)
    if (!res.signedData) {
      throw new DfnsError(-1, 'signature missing', res)
    }

    return res.signedData
  }

  async signTxs(): Promise<string[]> {
    throw new DfnsError(-1, 'Method not implemented.')
  }
}
