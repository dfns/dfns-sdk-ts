import { DfnsApiClient, DfnsError } from '@dfns/sdk'
import { GetWalletResponse, GenerateSignatureResponse } from '@dfns/sdk/types/wallets'

import { encodeObj, Transaction, EncodedSignedTransaction, decodeObj } from 'algosdk'
export type DfnsWalletOptions = {
  walletId: string
  dfnsClient: DfnsApiClient
}

const hexToBuffer = (hex: string): Buffer => {
  return Buffer.from(hex.replace(/^0x/, ''), 'hex')
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

export class DfnsWallet {
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

    if (res.network !== 'Algorand' && res.network !== 'AlgorandTestnet') {
      throw new DfnsError(-1, 'wallet is not bound to Algorand or AlgorandTestnet', {
        walletId,
        network: res.network,
      })
    }

    return new DfnsWallet(res, options)
  }

  public get address(): string {
    return this.metadata.address!

  }

  public async signTransaction(transaction: EncodedSignedTransaction): Promise<EncodedSignedTransaction>;
  public async signTransaction(transaction: Transaction): Promise<EncodedSignedTransaction>;

  async signTransaction(transaction: EncodedSignedTransaction | Transaction): Promise<EncodedSignedTransaction> {
    if (!('txn' in transaction)) {
      const encodedTransaction = {
        txn: transaction.get_obj_for_encoding(),
      }

      return this.signTransaction(encodedTransaction)
    } 

    const res = await this.dfnsClient.wallets.generateSignature({
      walletId: this.metadata.id,
      body: {
        kind: 'Transaction',
        transaction: `0x${Buffer.from(encodeObj(transaction)).toString('hex')}`,
      },
    })

    assertSigned(res)
    if (!res.signedData) {
      throw new DfnsError(-1, 'signature missing', res)
    }

    return decodeObj(hexToBuffer(res.signedData)) as EncodedSignedTransaction
  }
}
