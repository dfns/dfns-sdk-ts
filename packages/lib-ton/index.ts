import { DfnsApiClient, DfnsError } from '@dfns/sdk'
import { GetWalletResponse, GenerateSignatureResponse } from '@dfns/sdk/types/wallets'
import { Cell } from '@ton/ton'

export type DfnsWalletOptions = {
  walletId: string
  dfnsClient: DfnsApiClient
}

type WalletMetadata = GetWalletResponse

const hexToBuffer = (hex: string): Buffer => {
  return Buffer.from(stripHexPrefix(hex), 'hex')
}

const stripHexPrefix = (hex: string): string => {
  return hex.replace(/^0x/, '')
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

export class DfnsWallet {
  private readonly dfnsClient: DfnsApiClient

  private constructor(private metadata: WalletMetadata, options: DfnsWalletOptions) {
    this.dfnsClient = options.dfnsClient

    this.sign = this.sign.bind(this)
  }

  public static async init(options: DfnsWalletOptions) {
    const { walletId, dfnsClient } = options
    const res = await dfnsClient.wallets.getWallet({ walletId })

    if (res.status !== 'Active') {
      throw new DfnsError(-1, 'wallet not active', { walletId, status: res.status })
    }

    if (res.network !== 'Ton' && res.network !== 'TonTestnet') {
      throw new DfnsError(-1, 'wallet is not bound to Ton or TonTestnet', {
        walletId,
        network: res.network,
      })
    }

    return new DfnsWallet(res, options)
  }

  public get publicKey(): Buffer {
    return Buffer.from(this.metadata.signingKey.publicKey, 'hex')
  }

  public async sign(message: Cell): Promise<Buffer> {
    const res = await this.dfnsClient.wallets.generateSignature({
      walletId: this.metadata.id,
      body: {
        kind: 'Message',
        message: `0x${message.toBoc().toString('hex')}`,
      },
    })

    assertSigned(res)
    if (!res.signature?.encoded) {
      throw new DfnsError(-1, 'signature missing', res)
    }

    return hexToBuffer(res.signature?.encoded)
  }
}
