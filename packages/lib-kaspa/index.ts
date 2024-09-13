import { DfnsApiClient, DfnsError } from '@dfns/sdk'
import { GetWalletResponse, GenerateSignatureResponse } from '@dfns/sdk/types/wallets'
import { Address, createTransaction, PaymentOutput, ScriptPublicKey, Transaction, TransactionInput, TransactionOutpoint, TransactionOutput, UtxoEntries } from '@dfns/kaspa-wasm'

export type DfnsWalletOptions = {
  walletId: string
  dfnsClient: DfnsApiClient
}

type WalletMetadata = GetWalletResponse

export const transactionToSubmitRequest = (transaction: Transaction): any  => {  
  return {
    transaction: {
      version: transaction.version,
      inputs: transaction.inputs.map((input: TransactionInput) => {
        const previousOutpoint = input.previousOutpoint as TransactionOutpoint
        return {
          previousOutpoint: {
            transactionId: previousOutpoint.transactionId,
            index: previousOutpoint.index,
          },
          signatureScript: input.signatureScript,
          sequence: Number(input.sequence),
          sigOpCount: input.sigOpCount,
        }
      }),
      outputs: transaction.outputs.map((output: TransactionOutput) => ({
        amount: Number(output.value),
        scriptPublicKey: {
          version: 0,
          scriptPublicKey: output.scriptPublicKey.script,
        },
      })),
      lockTime: Number(transaction.lock_time),
      subnetworkId: transaction.subnetworkId,
    },
    allowOrphan: true,
  }
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

  private constructor(private metadata: WalletMetadata, options: DfnsWalletOptions) {
    this.dfnsClient = options.dfnsClient
  }

  public static async init(options: DfnsWalletOptions) {
    const { walletId, dfnsClient } = options
    const res = await dfnsClient.wallets.getWallet({ walletId })

    if (res.status !== 'Active') {
      throw new DfnsError(-1, 'wallet not active', { walletId, status: res.status })
    }

    if (res.network !== 'Kaspa') {
      throw new DfnsError(-1, 'wallet is not bound to Kaspa', {
        walletId,
        network: res.network,
      })
    }

    return new DfnsWallet(res, options)
  }

  public get address(): string {
    return this.metadata.address!
  }

  public get publicKey(): string {
    return this.metadata.signingKey.publicKey!
  }

  public decodeHexTransaction(tx: string): Transaction {
    return Transaction.deserializeFromJSON(Buffer.from(stripHexPrefix(tx), 'hex').toString())
  }
  
  public encodeTransaction(tx: Transaction): string {
    return Buffer.from(tx.serializeToJSON()).toString('hex')
  }

  public async sign(transaction: Transaction): Promise<Transaction> {
    const res = await this.dfnsClient.wallets.generateSignature({
      walletId: this.metadata.id,
      body: {
        kind: 'Transaction',
        transaction: `0x${this.encodeTransaction(transaction)}`,
      },
    })

    assertSigned(res)
    if (!res.signedData) {
      throw new DfnsError(-1, 'signature missing', res)
    }

    return this.decodeHexTransaction(res.signedData)
  }

  public buildTransaction(utxos: any[], to: string, amount: bigint, feePerUtxo: bigint): Transaction {
    const selectedUtxosRes = this.selectUtxos(utxos, amount, feePerUtxo)
    if(!selectedUtxosRes.enoughFund){
      throw new Error("not enough funds to cover amount + fees")
    }

    const outputs = [new PaymentOutput(new Address(to), BigInt(amount))]

    const changeValue = selectedUtxosRes.totalAmountIncludingFees - BigInt(amount)
    if (changeValue !== 0n) {
      outputs.push(new PaymentOutput(new Address(this.address), changeValue))
    }

    const utxoEntries = new UtxoEntries(selectedUtxosRes.utxos)

    return createTransaction(utxoEntries.items, outputs, this.address, 0n, 0, 1, 1)

  }

  selectUtxos(utxos: any, amount: bigint, feePerUtxo: bigint): { enoughFund: boolean, utxos: any[], totalAmountIncludingFees: bigint } {
    // sort utxo by amount
    const sortedUtxos = utxos.sort((a: any, b: any) => Number(b.utxoEntry.amount) - Number(a.utxoEntry.amount))

    let totalAmountIncludingFees = BigInt(0)
  
    let enoughFund = false
    const selectedUtxos: any[] = []
    for (const utxo of sortedUtxos) {
      selectedUtxos.push({
        address: utxo.address,
        outpoint: utxo.outpoint,
        utxoEntry: {
          amount: Number(utxo.utxoEntry.amount),
          scriptPublicKey: new ScriptPublicKey(0, utxo.utxoEntry.scriptPublicKey.scriptPublicKey),
          blockDaaScore: Number(utxo.utxoEntry.blockDaaScore),
          isCoinbase: utxo.utxoEntry.isCoinbase ?? false,
        },
      })
  
      totalAmountIncludingFees += BigInt(utxo.utxoEntry.amount) - feePerUtxo
  
      if (totalAmountIncludingFees >= amount) {
        enoughFund = true
        break
      }
    }
  
    return {
      enoughFund,
      utxos: selectedUtxos,
      totalAmountIncludingFees,
    }
  }
}
