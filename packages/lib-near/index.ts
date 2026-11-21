/* eslint-disable @typescript-eslint/no-unused-vars */
import { DfnsApiClient, DfnsError } from '@dfns/sdk'
import { GenerateSignatureResponse, GetWalletResponse } from '@dfns/sdk/generated/wallets'
import { KeyType, PublicKey } from '@near-js/crypto'
import { SignedMessage, Signer } from '@near-js/signers'
import { Transaction, SignedTransaction, DelegateAction, SignedDelegate, encodeTransaction } from '@near-js/transactions'
import { baseEncode } from '@near-js/utils'
import { sha256 } from '@noble/hashes/sha2'

export const hexToBuffer = (hex: string): Buffer => {
  return Buffer.from(stripHexPrefix(hex), 'hex')
}

const stripHexPrefix = (hex: string): string => {
  return hex.replace(/^0x/, '')
}

export type DfnsWalletOptions = {
  walletId: string
  dfnsClient: DfnsApiClient
}

type WalletMetadata = GetWalletResponse

const assertSigned = (response: GenerateSignatureResponse) => {
  if (response.status === 'Failed') {
    throw new DfnsError(-1, 'signing failed', response)
  } else if (response.status !== 'Signed') {
    throw new DfnsError(
      -1,
      'cannot complete signing synchronously because this wallet action requires policy approval',
      response
    )
  } else if (!response.signature || !response.signature.encoded) {
    throw new DfnsError(-1, 'signature missing', response)
  }
}

export class DfnsWallet implements Signer {
  private readonly dfnsClient: DfnsApiClient
  public static supportedNetworks: string[] = ['Near', 'NearTestnet']

  private constructor(private metadata: WalletMetadata, options: DfnsWalletOptions) {
    this.dfnsClient = options.dfnsClient
  }

  async getPublicKey(): Promise<PublicKey> {
    const publicKeyBytes = Buffer.from(this.metadata.signingKey.publicKey, 'hex')
    return new PublicKey({
      keyType: KeyType.ED25519,
      data: publicKeyBytes,
    })
  }

  public get address(): string {
    if (!this.metadata.address) {
      throw new DfnsError(-1, 'wallet address missing from metadata')
    }
    return this.metadata.address
  }

  public get publicKeyHex(): string {
    return this.metadata.signingKey.publicKey
  }

  signNep413Message(
    _message: string,
    _accountId: string,
    _recipient: string,
    _nonce: Uint8Array,
    _callbackUrl?: string
  ): Promise<SignedMessage> {
    throw new Error('Method not implemented.')
  }
  async signTransaction(transaction: Transaction): Promise<[Uint8Array, SignedTransaction]> {
    const res = await this.dfnsClient.wallets.generateSignature({
      walletId: this.metadata.id,
      body: {
        kind: 'Transaction',
        transaction: '0x' + Buffer.from(transaction.encode()).toString('hex'),
      },
    })

    assertSigned(res)
    if (!res.signedData) {
      throw new DfnsError(-1, 'signedData missing', res)
    }

    const signedTransaction = SignedTransaction.decode(hexToBuffer(res.signedData))
    const txHash = baseEncode(sha256(encodeTransaction(signedTransaction.transaction)))

    return [
      hexToBuffer(txHash),
      signedTransaction,
    ]
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  signDelegateAction(_delegateAction: DelegateAction): Promise<[Uint8Array, SignedDelegate]> {
    throw new Error('Method not implemented.')
  }

  public static async init(options: DfnsWalletOptions) {
    const { walletId, dfnsClient } = options
    const res = await dfnsClient.wallets.getWallet({ walletId })

    if (res.status !== 'Active') {
      throw new DfnsError(-1, 'wallet not active', { walletId, status: res.status })
    }

    if (!DfnsWallet.supportedNetworks.includes(res.network)) {
      throw new DfnsError(-1, 'wallet is not bound to a Near compatible network', {
        walletId,
        network: res.network,
      })
    }

    if (!res.address) {
      throw new DfnsError(-1, 'wallet address missing', { walletId })
    }

    return new DfnsWallet(res, options)
  }
}
