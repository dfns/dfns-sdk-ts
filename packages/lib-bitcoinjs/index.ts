import { DfnsApiClient, DfnsError } from '@dfns/sdk'
import { GetWalletResponse, GenerateSignatureResponse } from '@dfns/sdk/types/wallets'
import { Network, Psbt, SignerAsync } from 'bitcoinjs-lib'

export type DfnsWalletOptions = {
  walletId: string
  dfnsClient: DfnsApiClient
}

const compatibleNetworks = ['Bitcoin', 'BitcoinTestnet3', 'Litecoin', 'LitecoinTestnet']

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

    if (!compatibleNetworks.includes(res.network)) {
      throw new DfnsError(-1, 'wallet is not bound to a Bitcoin compatible network', { walletId, network: res.network })
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

/// Litecoin networks
export const litecoin: { mainnet: Network; testnet: Network } = {
  mainnet: {
    messagePrefix: '\x19Litecoin Signed Message:\n',
    bech32: 'ltc',
    bip32: {
      public: 0x019da462,
      private: 0x019d9cfe,
    },
    pubKeyHash: 0x30,
    scriptHash: 0x32,
    wif: 0xb0,
  },
  testnet: {
    messagePrefix: '\x19Litecoin Signed Message:\n',
    bech32: 'tltc',
    bip32: {
      public: 0x043587cf,
      private: 0x04358394,
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0xef,
  },
}
