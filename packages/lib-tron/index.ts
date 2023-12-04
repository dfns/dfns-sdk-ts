import { DfnsApiClient, DfnsError } from '@dfns/sdk'
import { GetWalletResponse, GenerateSignatureResponse } from '@dfns/sdk/types/wallets'
import { SignedTransaction, Transaction } from '@tronweb3/tronwallet-abstract-adapter'

const TronWeb = require('tronweb')
const bytes = TronWeb.utils.bytes
const ethersUtils = TronWeb.utils.ethersUtils
const txUtils = TronWeb.utils.transaction

export type DfnsWalletOptions = {
  walletId: string
  dfnsClient: DfnsApiClient
}

type WalletMetadata = GetWalletResponse

const bufferToHex = (buffer: unknown): string => {
  return `0x${bytes.byteArray2hexStr(buffer).toLowerCase()}`
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
  private readonly dfnsClient

  private constructor(private metadata: WalletMetadata, options: DfnsWalletOptions) {
    this.dfnsClient = options.dfnsClient
  }

  public static async init(options: DfnsWalletOptions) {
    const { walletId, dfnsClient } = options
    const res = await dfnsClient.wallets.getWallet({ walletId })

    if (res.status !== 'Active') {
      throw new DfnsError(-1, 'wallet not active', { walletId, status: res.status })
    }

    if (res.network !== 'Tron' && res.network !== 'TronNile') {
      throw new DfnsError(-1, 'wallet is not bound to Tron or TronNile', { walletId, network: res.network })
    }

    return new DfnsWallet(res, options)
  }

  public get address(): string {
    // Tron-bound wallets will have a tron address
    return this.metadata.address!
  }

  public async signTransaction(transaction: Transaction): Promise<SignedTransaction> {
    const res = await this.dfnsClient.wallets.generateSignature({
      walletId: this.metadata.id,
      body: {
        kind: 'Transaction',
        transaction: bufferToHex(txUtils.txJsonToPb(transaction).serializeBinary()),
      },
    })

    assertSigned(res)
    if (!res.signature?.encoded) {
      throw new DfnsError(-1, 'encoded signature missing', res)
    }

    return {
      ...transaction,
      signature: [res.signature.encoded.replace(/^0x/, '')],
    }
  }

  public async signMessage(message: string): Promise<string> {
    const res = await this.dfnsClient.wallets.generateSignature({
      walletId: this.metadata.id,
      body: {
        kind: 'Message',
        message: bufferToHex(ethersUtils.toUtf8Bytes(message)),
      },
    })

    assertSigned(res)
    if (!res.signature?.encoded) {
      throw new DfnsError(-1, 'encoded signature missing', res)
    }

    return res.signature.encoded.replace(/^0x/, '')
  }
}
