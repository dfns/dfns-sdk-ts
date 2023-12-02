import { DfnsApiClient, DfnsError } from '@dfns/sdk'
import { GetWalletResponse, GenerateSignatureResponse } from '@dfns/sdk/types/wallets'
import { Wallet } from '@vechain/connex-driver'
import { ec } from 'elliptic'
import { address } from 'thor-devkit'

export type DfnsWalletOptions = {
  walletId: string
  dfnsClient: DfnsApiClient
  /** @deprecated transaction signing is now synchronous. polling is deprecated. */
  maxRetries?: number
  /** @deprecated transaction signing is now synchronous. polling is deprecated. */
  retryInterval?: number
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

export class DfnsWallet implements Wallet {
  public readonly address
  private readonly dfnsClient

  constructor(private metadata: WalletMetadata, options: DfnsWalletOptions) {
    this.dfnsClient = options.dfnsClient

    const publicKey = new ec('secp256k1').keyFromPublic(metadata.signingKey.publicKey, 'hex')
    this.address = address.fromPublicKey(Buffer.from(publicKey.getPublic(false, 'array')))
  }

  public static async init(options: DfnsWalletOptions): Promise<DfnsWallet> {
    const { walletId, dfnsClient } = options
    const res = await dfnsClient.wallets.getWallet({ walletId })

    if (res.status !== 'Active') {
      throw new DfnsError(-1, 'wallet not active', { walletId, status: res.status })
    }

    const { scheme, curve } = res.signingKey
    if (scheme !== 'ECDSA') {
      throw new DfnsError(-1, 'key scheme is not ECDSA', { walletId, scheme })
    }
    if (curve !== 'secp256k1') {
      throw new DfnsError(-1, 'key curve is not secp256k1', { walletId, curve })
    }

    return new DfnsWallet(res, options)
  }

  private async sign(msgHash: Buffer): Promise<Buffer> {
    const res = await this.dfnsClient.wallets.generateSignature({
      walletId: this.metadata.id,
      body: { kind: 'Hash', hash: msgHash.toString('hex') },
    })

    assertSigned(res)

    if (!res.signature) {
      throw new DfnsError(-1, 'signature missing', res)
    }

    return Buffer.concat([
      Buffer.from(res.signature.r.replace(/^0x/, ''), 'hex'),
      Buffer.from(res.signature.s.replace(/^0x/, ''), 'hex'),
      Buffer.from([res.signature.recid!]),
    ])
  }

  public get list(): Wallet.Key[] {
    return [
      {
        address: this.address,
        sign: (msgHash: Buffer) => this.sign(msgHash),
      },
    ]
  }
}
