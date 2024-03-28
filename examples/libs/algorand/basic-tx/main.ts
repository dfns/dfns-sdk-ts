import { DfnsWallet } from '@dfns/lib-algorand'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import { Algodv2, encodeObj, makePaymentTxnWithSuggestedParamsFromObject } from 'algosdk'

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

  return DfnsWallet.init({
    walletId: walletId,
    dfnsClient,
  })
}

async function main() {
  const senderWallet = await initDfnsWallet(process.env.ALGORAND_WALLET_ID!)
  console.log('algorand sender address: %s', senderWallet.address)

  const algod = new Algodv2(process.env.ALGORAND_NODE_API_KEY!, process.env.ALGORAND_NODE_URL!)

  // Send native ALGO
  console.log('sending 0.1 ALGO to ourself')
  const suggestedParams = await algod.getTransactionParams().do()
  const txn = makePaymentTxnWithSuggestedParamsFromObject({
    from: senderWallet.address,
    suggestedParams,
    to: senderWallet.address,
    amount: 10000,
  })

  const signedTx = await senderWallet.signTransaction(txn)
  console.log(`native transaction signed`)

  const res = await algod.sendRawTransaction(encodeObj(signedTx)).do()
  console.log(`transaction submitted: ${res.txId}`)
}

main()
