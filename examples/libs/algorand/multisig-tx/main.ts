import { DfnsWallet } from '@dfns/lib-algorand'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import {
  Algodv2,
  EncodedSignedTransaction,
  createMultisigTransaction,
  decodeObj,
  encodeObj,
  makePaymentTxnWithSuggestedParamsFromObject,
  multisigAddress,
} from 'algosdk'

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
  const wallet1 = await initDfnsWallet(process.env.ALGORAND_WALLET_ID_1!)
  console.log('first algorand address: %s', wallet1.address)

  const wallet2 = await initDfnsWallet(process.env.ALGORAND_WALLET_ID_2!)
  console.log('first algorand address: %s', wallet2.address)

  const algod = new Algodv2(process.env.ALGORAND_NODE_API_KEY!, process.env.ALGORAND_NODE_URL!)

  // multiSigParams is used when creating the address and when signing transactions
  const multiSigParams = {
    version: 1,
    threshold: 2,
    addrs: [wallet1.address, wallet2.address],
  }
  const multisigAddr = multisigAddress(multiSigParams)
  console.log('Created MultiSig Address: ', multisigAddr)

  // Send 0.1 Algo
  const suggestedParams = await algod.getTransactionParams().do()
  const txn = makePaymentTxnWithSuggestedParamsFromObject({
    from: multisigAddr,
    suggestedParams,
    to: multisigAddr,
    amount: 10000,
    note: new Uint8Array(Buffer.from('hello world')),
  })

  const msigTx = createMultisigTransaction(txn, multiSigParams)
  const msigEncodedTx = decodeObj(msigTx) as EncodedSignedTransaction

  const sign1 = await wallet1.signTransaction(msigEncodedTx)
  console.log(`native transaction signed by wallet 1`)

  const sign2 = await wallet2.signTransaction(sign1)
  console.log(`native transaction signed by wallet 2`)

  const res = await algod.sendRawTransaction(encodeObj(sign2)).do()
  console.log(`transaction submitted: ${res.txId}`)
}

main()
