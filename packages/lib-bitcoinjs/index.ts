import { DfnsApiClient, DfnsError } from '@dfns/sdk'
import { GetWalletResponse, GenerateSignatureResponse } from '@dfns/sdk/types/wallets'
import { Psbt, SignerAsync } from 'bitcoinjs-lib'

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

export class DfnsWallet implements SignerAsync {
  private readonly dfnsClient: DfnsApiClient
  public readonly publicKey: Buffer

  private constructor(private readonly metadata: WalletMetadata, options: DfnsWalletOptions) {
    this.dfnsClient = options.dfnsClient
    this.publicKey = Buffer.from(metadata.signingKey.publicKey, 'hex')
  }

  public static async init(options: DfnsWalletOptions) {
    const { walletId, dfnsClient } = options
    const res = await dfnsClient.wallets.getWallet({ walletId })

    if (res.status !== 'Active') {
      throw new DfnsError(-1, 'wallet not active', { walletId, status: res.status })
    }

    if (res.network !== 'Bitcoin' && res.network !== 'BitcoinTestnet3') {
      throw new DfnsError(-1, 'wallet is not bound to Bitcoin or BitcoinTestnet3', { walletId, network: res.network })
    }

    return new DfnsWallet(res, options)
  }

  public get address(): string | undefined {
    return this.metadata.address
  }

  public async sign(hash: Buffer): Promise<Buffer> {
    const res = await this.dfnsClient.wallets.generateSignature({
      walletId: this.metadata.id,
      body: { kind: 'Hash', hash: `0x${hash.toString('hex')}` },
    })

    assertSigned(res)
    if (!res.signature) {
      throw new DfnsError(-1, 'signature missing', res)
    }

    return Buffer.concat([
      Buffer.from(res.signature.r.replace(/^0x/, ''), 'hex'),
      Buffer.from(res.signature.s.replace(/^0x/, ''), 'hex'),
    ])
  }

  public async SignPsbt(psbt: Psbt): Promise<Psbt> {
    const res = await this.dfnsClient.wallets.generateSignature({
      walletId: this.metadata.id,
      body: { kind: 'Psbt', psbt: `0x${psbt.toHex()}` },
    })

    assertSigned(res)
    if (!res.signedData) {
      throw new DfnsError(-1, 'signedData missing', res)
    }

    return Psbt.fromHex(res.signedData.replace(/^0x/, ''))
  }
}
