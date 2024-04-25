import { DfnsApiClient, DfnsError } from '@dfns/sdk'
import { GetWalletResponse, GenerateSignatureResponse } from '@dfns/sdk/types/wallets'
import { Transaction, FeeBumpTransaction, Networks, BASE_FEE, Asset, Horizon, Memo, Operation, TransactionBuilder } from '@stellar/stellar-sdk'

export type DfnsWalletOptions = {
  walletId: string
  dfnsClient: DfnsApiClient
}

type WalletMetadata = GetWalletResponse

const hexToBase64 = (hex: string): string => {
  return Buffer.from(stripHexPrefix(hex), 'hex').toString('base64')
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
  private readonly network: Networks

  private constructor(private metadata: WalletMetadata, options: DfnsWalletOptions) {
    this.dfnsClient = options.dfnsClient
    this.network = metadata.network === "Stellar" ? Networks.PUBLIC : Networks.TESTNET
  }

  public static async init(options: DfnsWalletOptions) {
    const { walletId, dfnsClient } = options
    const res = await dfnsClient.wallets.getWallet({ walletId })

    if (res.status !== 'Active') {
      throw new DfnsError(-1, 'wallet not active', { walletId, status: res.status })
    }

    if (res.network !== 'Stellar' && res.network !== 'StellarTestnet') {
      throw new DfnsError(-1, 'wallet is not bound to Stellar or StellarTestnet', {
        walletId,
        network: res.network,
      })
    }

    return new DfnsWallet(res, options)
  }

  public get address(): string {
    return this.metadata.address!

  }

  public async sign(transaction: Transaction): Promise<Transaction>
  public async sign(transaction: FeeBumpTransaction): Promise<FeeBumpTransaction>
  public async sign(transaction: Transaction | FeeBumpTransaction): Promise<Transaction | FeeBumpTransaction> {
    const isFeeBump = "innerTransaction" in transaction

    const res = await this.dfnsClient.wallets.generateSignature({
      walletId: this.metadata.id,
      body: {
        kind: 'Transaction',
        transaction: `0x${transaction.toEnvelope().toXDR('hex')}`,
      },
    })

    assertSigned(res)
    if (!res.signedData) {
      throw new DfnsError(-1, 'signature missing', res)
    }

    return isFeeBump ?
      new FeeBumpTransaction(hexToBase64(res.signedData!), Networks.TESTNET):
      new Transaction(hexToBase64(res.signedData!), Networks.TESTNET)
  }

  public async internalWorkflow(address: string) {
    const provider = new Horizon.Server(process.env.HORIZON_API_URL!)

    const account = await provider.loadAccount(address)
    const transaction = new TransactionBuilder(account, {
      fee: BASE_FEE,
      networkPassphrase: Networks.TESTNET,
    })
      .addOperation(
        Operation.payment({
          destination: address,
          asset: Asset.native(),
          amount: "0.00001",
        })
      )
      .addMemo(Memo.text('Test Transaction'))
      .setTimeout(180)
      .build()

    const signedTx = await this.sign(transaction)
    console.log(`native transaction signed`)


    const t = TransactionBuilder.buildFeeBumpTransaction(address, "200", signedTx, Networks.TESTNET)
    const b = await this.sign(t)
    console.log(`bump transaction signed`)

    const txHash = (await provider.submitTransaction(b)).hash
    console.log(`transaction broadcasted: ${txHash}`)
  }
}
