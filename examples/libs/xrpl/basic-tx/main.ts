import { DfnsWallet } from '@dfns/lib-xrpl'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'

import * as dotenv from 'dotenv';
import { Client, Transaction, encode } from 'xrpl';

dotenv.config()

const initDfnsWallet = async (walletId: string) => {
  const signer = new AsymmetricKeySigner({
    privateKey: process.env.DFNS_PRIVATE_KEY!,
    credId: process.env.DFNS_CRED_ID!,
    appOrigin: process.env.DFNS_APP_ORIGIN!,
  })

  const dfnsClient = new DfnsApiClient({
    appId: process.env.DFNS_APP_ID!,
    authToken: process.env.DFNS_AUTH_TOKEN!,
    baseUrl: process.env.DFNS_API_URL!,
    signer,
  })

  return DfnsWallet.init({
    walletId: walletId,
    dfnsClient,
  })
}

async function main() {
  const senderWallet = await initDfnsWallet(process.env.RIPPLE_WALLET_ID!)
  console.log("ripple sender address: %s", senderWallet.address)
  
  let tx: Transaction = {
    TransactionType: 'Payment',
    Account: senderWallet.address,
    // Replace with your desired receiver
    Destination: "rBYtCQKxGTfFuob3hxSc8pEYddetT9CdDZ",
    Amount: '100000',
  }

  // Choose the client you want.
  const client = new Client('wss://testnet.xrpl-labs.com')
  
  // Connect the websocket client
  await client.connect()

  tx = await client.autofill(tx)

  console.log("prepared transaction: %s", tx);

  const signedTx = await senderWallet.signTransaction(tx)

  console.log(`transaction signed`)

  const res = await client.submitAndWait(signedTx.tx_blob)

  console.log(`transaction submitted: ${ res.result.hash }`)

  await client.disconnect()
}

main();

