import { DfnsWallet } from '@dfns/lib-tron'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
const TronWeb = require('tronweb')

import * as dotenv from 'dotenv'
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

async function main() {
  const wallet = await initDfnsWallet(process.env.TRON_WALLET_ID!)
  console.log(`Tron wallet address: ${wallet.address}`)

  const tronWeb = new TronWeb({
    fullHost: process.env.TRON_NODE_URL,
  })

  const tx = await tronWeb.transactionBuilder.sendTrx('TADDx31pdCFfp3XrYxp6fQGbRxriYFLTrx', 1000, wallet.address)

  const signedTx = await wallet.signTransaction(tx)
  console.log(`Transaction txID: ${signedTx.txID}`)

  const receipt = await tronWeb.trx.sendRawTransaction(signedTx)
  console.log(`Transaction broadcasted: ${receipt.result}`)
}

main()
