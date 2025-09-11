/* eslint @typescript-eslint/no-unused-vars: 0 */

import { DfnsApiClient, DfnsError } from '@dfns/sdk'
import { GetWalletResponse, GenerateSignatureResponse } from '@dfns/sdk/types/wallets'
import { hash } from '@stablelib/blake2b'
import { PublicKey, SignatureScheme, SignatureWithBytes, Signer } from '@iota/iota-sdk/cryptography'
import { Ed25519PublicKey } from '@iota/iota-sdk/keypairs/ed25519'
import { toB64 } from '@iota/bcs';

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

export type SignedTransaction = {
  // transaction block as base64 encoded bcs
  transactionBlock: string
  // base64 encoded signatures. Usually, there will be only one signature
  signature: string[]
} 

export class DfnsWallet extends Signer {
  // no-lint
  sign(bytes: Uint8Array): Promise<Uint8Array> {
    throw new Error('Method not implemented.')
  }

  private readonly dfnsClient: DfnsApiClient

  private constructor(private metadata: WalletMetadata, options: DfnsWalletOptions) {
    super()
    this.dfnsClient = options.dfnsClient

    this.sign = this.sign.bind(this)
  }

  override async signTransaction(bytes: Uint8Array): Promise<SignatureWithBytes> {
    const res = await this.dfnsClient.wallets.generateSignature({
      walletId: this.metadata.id,
      body: {
        kind: 'Transaction',
        transaction: `0x${Buffer.from(bytes).toString('hex')}`,
      },
    })

    assertSigned(res)
    if (!res.signature?.encoded) {
      throw new DfnsError(-1, 'signature missing', res)
    }

    return {
      signature: hexToBuffer(res.signature.encoded).toString('base64'),
      bytes: toB64(bytes),
    }
  }
  

  getKeyScheme(): SignatureScheme {
    return 'ED25519'
  }

  getPublicKey(): PublicKey {
    return new Ed25519PublicKey(hexToBuffer(this.metadata.signingKey.publicKey))
  }

  public static async init(options: DfnsWalletOptions) {
    const { walletId, dfnsClient } = options
    const res = await dfnsClient.wallets.getWallet({ walletId })

    if (res.status !== 'Active') {
      throw new DfnsError(-1, 'wallet not active', { walletId, status: res.status })
    }

    if (res.network !== 'Iota' && res.network !== 'IotaTestnet') {
      throw new DfnsError(-1, 'wallet is not bound to Iota or IotaTestnet', {
        walletId,
        network: res.network,
      })
    }

    return new DfnsWallet(res, options)
  }

  public get address(): string {
    return `0x${Buffer.from(hash(this.publicKey, 32))
      .toString('hex')
      .toLowerCase()}`
  }

  public get publicKey(): Buffer {
    return Buffer.from(this.metadata.signingKey.publicKey, 'hex')
  }

}

