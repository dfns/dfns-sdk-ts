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

  const to = "kaspa:qq70k7tn3cyq23fa2al678dr09smqfsqp88cw4j4rm5x0s6fllr2yqm9nk7sc"

  const amount = BigInt(199990000)

  // Average fee per UTXO input
  const KASPA_AVERAGE_SOMPI_FEE_PER_INPUT = BigInt(10000)

  console.log(`Sending ${amount.toString()} sompi to ${to} with ${KASPA_AVERAGE_SOMPI_FEE_PER_INPUT} fee per UTXO`)

  const utxos = await getUtxos(wallet.address)

  const sumAmounts = utxos.reduce((sum: number, utxo: any) => sum + Number(utxo.utxoEntry.amount), 0)

  console.log(`Unspent balance: ${sumAmounts} sompi`)

  const tx = wallet.buildTransaction(utxos, to, amount, KASPA_AVERAGE_SOMPI_FEE_PER_INPUT)
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

main()
