import { Address, createTransaction, PaymentOutput, ScriptPublicKey, Transaction, UtxoEntries } from '@dfns/kaspa-wasm'
import { DfnsWallet, transactionToSubmitRequest } from '@dfns/lib-kaspa'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const initDfnsWallet = async (walletId: string) => {
  const signer = new AsymmetricKeySigner({
    credId: process.env.DFNS_CRED_ID!,
    privateKey: process.env.DFNS_PRIVATE_KEY!,
  })

  const dfnsClient = new DfnsApiClient({
    appId: process.env.DFNS_APP_ID!,
    authToken: process.env.DFNS_AUTH_TOKEN!,
    baseUrl: process.env.DFNS_API_URL!,
    signer,
  })

  return DfnsWallet.init({ walletId, dfnsClient })
}

const getUtxos = async (address: string): Promise<any[]> => {
  return (
    await axios.get(process.env.KASPA_API_URL!+`/addresses/${encodeURIComponent(address)}/utxos`)
  ).data
}

const submitTransaction = async (req: any): Promise<string> => {
  return (
    await axios.post(process.env.KASPA_API_URL!+`/transactions`, req)
  ).data.transactionId
}


const main = async () => {
  const wallet = await initDfnsWallet(process.env.KASPA_WALLET_ID!)

  if (!wallet.address) throw Error(`cannot retrieve address from wallet`)
  console.log(`Wallet address: ${wallet.address}`)

  const to = "kaspa:qztxkam9atxjukjwwjvnr0nr2nwgr4gweyjre84hnqsh22xr4cgtsathvrf6q"

  const amount = BigInt(199990000)

  // Average fee per UTXO input
  const KASPA_AVERAGE_SOMPI_FEE_PER_INPUT = BigInt(10000)

  console.log(`Sending ${amount.toString()} sompi to ${to} with ${KASPA_AVERAGE_SOMPI_FEE_PER_INPUT} fee per UTXO`)

  const utxos = await getUtxos(wallet.address)

  const sumAmounts = utxos.reduce((sum: number, utxo: any) => sum + Number(utxo.utxoEntry.amount), 0)

  console.log(`Unspent balance: ${sumAmounts} sompi`)

  const tx = buildTransaction(utxos, wallet.address, to, amount, KASPA_AVERAGE_SOMPI_FEE_PER_INPUT)
  console.log(`Transaction built ${
    JSON.stringify(
      tx, 
      (key, value) => typeof value === 'bigint' ? value.toString(): value,
      2)
    }`
  )

  const signed = (await wallet.sign(tx))

  const txId = await submitTransaction(transactionToSubmitRequest(signed))
  console.log(`Transaction Id: ${txId}`)
}

const buildTransaction = (utxos: any[], from: string, to: string, amount: bigint, feePerUtxo: bigint): Transaction => {
  const selectedUtxosRes = selectUtxos(utxos, amount, feePerUtxo)
  if(!selectedUtxosRes.enoughFund){
    throw new Error("not enough funds to cover amount + fees")
  }

  const outputs = [new PaymentOutput(new Address(to), BigInt(amount))]

  const changeValue = selectedUtxosRes.totalAmountIncludingFees - BigInt(amount)
  if (changeValue !== 0n) {
    outputs.push(new PaymentOutput(new Address(from), changeValue))
  }

  const utxoEntries = new UtxoEntries(selectedUtxosRes.utxos)

  return createTransaction(utxoEntries.items, outputs, from, 0n, 0, 1, 1)

}

const selectUtxos = (utxos: any, amount: bigint, feePerUtxo: bigint): { enoughFund: boolean, utxos: any[], totalAmountIncludingFees: bigint } => {
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

main()
