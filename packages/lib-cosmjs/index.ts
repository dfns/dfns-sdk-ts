import { ripemd160, sha256 } from '@cosmjs/crypto'
import { toBech32 } from '@cosmjs/encoding'
import { AccountData, DirectSignResponse, makeSignBytes, OfflineDirectSigner } from '@cosmjs/proto-signing'
import { DfnsApiClient, DfnsError } from '@dfns/sdk'
import { GetWalletResponse, GenerateSignatureResponse } from '@dfns/sdk/types/wallets'
import { SignDoc } from 'cosmjs-types/cosmos/tx/v1beta1/tx'

export type DfnsWalletOptions = {
  walletId: string
  dfnsClient: DfnsApiClient
  prefix: string
}

type WalletMetadata = GetWalletResponse

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

export class DfnsWallet implements OfflineDirectSigner {
  private readonly prefix: string
  private readonly pubkey: Buffer
  private readonly dfnsClient: DfnsApiClient

  private constructor(private metadata: WalletMetadata, options: DfnsWalletOptions) {
    this.prefix = options.prefix
    this.pubkey = Buffer.from(metadata.signingKey.publicKey, 'hex')
    this.dfnsClient = options.dfnsClient
  }

  public static async init(options: DfnsWalletOptions) {
    const { walletId, dfnsClient } = options
    const res = await dfnsClient.wallets.getWallet({ walletId })

    if (res.status !== 'Active') {
      throw new DfnsError(-1, 'wallet not active', { walletId, status: res.status })
    }

    if (res.network !== 'SeiPacific1' && res.network !== 'SeiAtlantic2') {
      throw new DfnsError(-1, 'wallet is not bound to Sei', {
        walletId,
        network: res.network,
      })
    }

    return new DfnsWallet(res, options)
  }

  async getAccounts(): Promise<AccountData[]> {
    return [
      {
        address: toBech32(this.prefix, ripemd160(sha256(this.pubkey))),
        algo: 'secp256k1',
        pubkey: this.pubkey,
      },
    ]
  }

  async signDirect(_signerAddress: string, signDoc: SignDoc): Promise<DirectSignResponse> {
    const res = await this.dfnsClient.wallets.generateSignature({
      walletId: this.metadata.id,
      body: {
        kind: 'SignDocDirect',
        signDoc: `0x${Buffer.from(makeSignBytes(signDoc)).toString('hex')}`,
      },
    })

    assertSigned(res)
    if (!res.signature?.encoded) {
      throw new DfnsError(-1, 'signature missing', res)
    }

    return {
      signed: signDoc,
      signature: {
        pub_key: {
          type: 'tendermint/PubKeySecp256k1',
          value: this.pubkey.toString('base64'),
        },
        signature: Buffer.from(stripHexPrefix(res.signature.encoded), 'hex').toString('base64'),
      },
    }
  }
}
