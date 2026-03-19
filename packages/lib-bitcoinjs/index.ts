import { DfnsApiClient, DfnsError } from '@dfns/sdk'
import { GetWalletResponse, GenerateSignatureResponse } from '@dfns/sdk/types/wallets'
import { Network, Psbt, SignerAsync } from 'bitcoinjs-lib'
import { tweakKey } from 'bitcoinjs-lib/src/payments/bip341'

export type DfnsWalletOptions = {
  walletId: string
  dfnsClient: DfnsApiClient
}

const compatibleNetworks = ['Bitcoin', 'BitcoinSignet', 'BitcoinTestnet3', 'Litecoin', 'LitecoinTestnet']

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

const xOnlyPubkey = (publicKey: Buffer) => {
  return publicKey.subarray(1, 33)
}

const getTweakedPublicKey = (publicKey: Buffer, taprootMerkleRoot?: Buffer) => {
  const xOnlyPublicKey = xOnlyPubkey(publicKey)
  const tweakedKey = tweakKey(xOnlyPublicKey, taprootMerkleRoot)
  return Buffer.concat([Uint8Array.from([tweakedKey!.parity + 2]), tweakedKey!.x])
}

export class DfnsWallet implements SignerAsync {
  private readonly dfnsClient: DfnsApiClient
  public readonly scheme: GetWalletResponse['signingKey']['scheme']
  public readonly publicKey: Buffer
  public readonly internalPubkey?: Buffer

  private constructor(private readonly metadata: WalletMetadata, options: DfnsWalletOptions) {
    this.dfnsClient = options.dfnsClient
    this.scheme = metadata.signingKey.scheme
    this.publicKey = Buffer.from(metadata.signingKey.publicKey, 'hex')

    if (this.scheme === 'Schnorr') {
      this.internalPubkey = this.publicKey
      this.publicKey = getTweakedPublicKey(this.internalPubkey, undefined)
    }
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

  public get network(): string {
    return this.metadata.network
  }

  public async sign(hash: Buffer): Promise<Buffer> {
    return this._sign(hash)
  }

  public async signSchnorr(hash: Buffer): Promise<Buffer> {
    return this._sign(hash, Buffer.alloc(0))
  }

  private async _sign(hash: Buffer, taprootMerkleRoot?: Buffer): Promise<Buffer> {
    const res = await this.dfnsClient.wallets.generateSignature({
      walletId: this.metadata.id,
      body: { kind: 'Hash', hash: `0x${hash.toString('hex')}`, taprootMerkleRoot: taprootMerkleRoot && `0x${taprootMerkleRoot.toString('hex')}` },
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

  public tweakSigner(taprootMerkleRoot: Buffer): SignerAsync {
    if (this.scheme !== 'Schnorr') {
      throw new DfnsError(400, 'Only available for Schnorr keys')
    }
    const publicKey = getTweakedPublicKey(this.internalPubkey!, taprootMerkleRoot)
    const wallet = this

    return new (class implements SignerAsync {
      get publicKey() {
        return publicKey
      }

      async sign(_hash: Buffer): Promise<Buffer> {
        throw new DfnsError(400, 'Expecting to only do schnorr signatures')
      }

      async signSchnorr(hash: Buffer): Promise<Buffer> {
        return wallet._sign(hash, taprootMerkleRoot)
      }
    })()
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
