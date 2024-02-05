import { DfnsWallet } from '@dfns/lib-algorand'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import { Algodv2, encodeObj, makeAssetTransferTxnWithSuggestedParams, modelsv2, waitForConfirmation } from 'algosdk'

import * as dotenv from 'dotenv'

dotenv.config()

const algod = new Algodv2(process.env.ALGORAND_NODE_API_KEY!, process.env.ALGORAND_NODE_URL!)

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

const TESTNET_USDC_ASSET_ID = 10458941

async function main() {
  const receiverWallet = await initDfnsWallet(process.env.ALGORAND_RECEIVER_WALLET_ID!)
  console.log('algorand receiver address: %s', receiverWallet.address)

  const senderWallet = await initDfnsWallet(process.env.ALGORAND_SENDER_WALLET_ID!)
  console.log('algorand sender address: %s', senderWallet.address)

  // check that our receiver wallet has opted in for the asset
  // otherwise, we need to opt in. (The receiver wallet needs at least 0.1 ALGO) 
  if (!await optInForAsset(receiverWallet)) {
    console.log("receiver didn't optin for the asset... creating optin transction")
    const txHash = await sendUsdcTransferTxn(receiverWallet, receiverWallet.address, 0)
    console.log(`optin transaction broadcasted: ${txHash}`)
    await waitForConfirmation(algod, txHash, 4)
    console.log("optin transaction confirmed")
  }

  // Send USDC
  console.log("sending 1 USDC")
  let txHash = await sendUsdcTransferTxn(senderWallet, receiverWallet.address, 1000000)
  console.log(`USDC transfer broadcasted: ${txHash}`)

  console.log("opt-out for the asset")
  txHash = await sendUsdcTransferTxn(receiverWallet, senderWallet.address, 0, senderWallet.address)
  console.log(`USDC optout broadcasted: ${txHash}`)
  await waitForConfirmation(algod, txHash, 4)
  console.log("optout transaction confirmed")
}

async function optInForAsset(receiver: DfnsWallet) {
  const accountInfo = await algod.accountInformation(receiver.address).do();
  for (const asset of accountInfo.assets) {
    if (asset['asset-id'] === TESTNET_USDC_ASSET_ID) {
      return true;
    }
  }

  return false
}

async function sendUsdcTransferTxn(sender: DfnsWallet, receiver: string, amount: number, closeReminderTo?: string): Promise<string> {
  const suggestedParams = await algod.getTransactionParams().do()
  const txn = makeAssetTransferTxnWithSuggestedParams(
    sender.address,
    receiver,
    // Provide this parameter to opt-out
    closeReminderTo,
    undefined,
    amount,
    undefined,
    TESTNET_USDC_ASSET_ID,
    suggestedParams,
  )

  const signedTx = await sender.signTransaction(txn)
  console.log(`transaction signed`)

  const res = await algod.sendRawTransaction(encodeObj(signedTx)).do()

  return res.txId
}

main()
