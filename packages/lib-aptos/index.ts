import { DfnsApiClient, DfnsError } from '@dfns/sdk'
import { GetWalletResponse, GenerateSignatureResponse } from '@dfns/sdk/types/wallets'
import { AccountAuthenticatorNoAccountAuthenticator, AnyRawTransaction, Deserializer, MultiAgentTransaction, RawTransaction, SignedTransaction, SimpleTransaction, TransactionAuthenticatorFeePayer, TransactionAuthenticatorMultiAgent } from '@aptos-labs/ts-sdk'

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

    if (res.network !== 'Aptos' && res.network !== 'AptosTestnet') {
      throw new DfnsError(-1, 'wallet is not bound to Aptos or AptosTestnet', { walletId, network: res.network })
    }

    return new DfnsWallet(res, options)
  }

  public get address(): string {
    return this.metadata.address!
  }

  public get publicKey(): string {
    return this.metadata.signingKey.publicKey
  }

  // DFNS can sign:
  //   - RawTransaction directly for simple transaction
  //   - AnyRawTransaction
  //   - SignedTransaction for transactions containing additional signers or fee payer (need to provide the
  //     right transaction authenticator)
  public async signTransaction(transaction: RawTransaction | SignedTransaction | AnyRawTransaction): Promise<SignedTransaction> {
    transaction = this.prepareTransaction(transaction)

    const res = await this.dfnsClient.wallets.generateSignature({
        walletId: this.metadata.id,
        body: {
            kind: 'Transaction',
            transaction: transaction.bcsToHex().toString(),
        },
    })

    assertSigned(res)

    if (!res.signedData) {
        throw new DfnsError(-1, 'encoded signature missing', res)
    }

    const deserializer = new Deserializer(hexToBuffer(res.signedData))
    return SignedTransaction.deserialize(deserializer)
  }

  private prepareTransaction(transaction: RawTransaction | SignedTransaction | AnyRawTransaction): SignedTransaction | RawTransaction {
    if (isSimpleTransaction(transaction)) {
        return this.prepareSimpleTransaction(transaction)
    }

    if (isMultiAgentTransaction(transaction)) {
        return this.prepareMultiAgentTransaction(transaction)
    }

    // If already a SignedTransaction or RawTransaction, return as is
    return transaction
  }

  private prepareSimpleTransaction(transaction: SimpleTransaction): SignedTransaction | RawTransaction {
    if (transaction.feePayerAddress) {
        return new SignedTransaction(
            transaction.rawTransaction,
            new TransactionAuthenticatorFeePayer(
                new AccountAuthenticatorNoAccountAuthenticator(),
                [],
                [],
                {
                    address: transaction.feePayerAddress,
                    authenticator: new AccountAuthenticatorNoAccountAuthenticator(),
                }
            )
        )
    }

    return transaction.rawTransaction // If no fee payer, use the raw transaction directly
  }

  private prepareMultiAgentTransaction(transaction: MultiAgentTransaction): SignedTransaction {
    if (transaction.feePayerAddress) {
        return new SignedTransaction(
            transaction.rawTransaction,
            new TransactionAuthenticatorFeePayer(
                new AccountAuthenticatorNoAccountAuthenticator(),
                transaction.secondarySignerAddresses,
                [],
                {
                    address: transaction.feePayerAddress,
                    authenticator: new AccountAuthenticatorNoAccountAuthenticator(),
                }
            )
        )
    }

    return new SignedTransaction(
        transaction.rawTransaction,
        new TransactionAuthenticatorMultiAgent(
            new AccountAuthenticatorNoAccountAuthenticator(),
            transaction.secondarySignerAddresses,
            []
        )
    )
  }
}

const isSimpleTransaction = (transaction: any): transaction is SimpleTransaction => {
  return transaction?.rawTransaction !== undefined && transaction?.secondarySignerAddresses === undefined
}

const isMultiAgentTransaction = (transaction: any): transaction is MultiAgentTransaction =>{
  return transaction?.rawTransaction !== undefined && Array.isArray(transaction?.secondarySignerAddresses)
}
