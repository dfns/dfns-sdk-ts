import { DfnsWallet } from '@dfns/lib-tron'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
const TronWeb = require('tronweb')

import * as dotenv from 'dotenv';

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
    maxRetries: 10,
  })
}

async function main() {
  const senderWallet = await initDfnsWallet(process.env.DFNS_SENDER_WALLET_ID!)
  console.log("Tron sender address: %s", senderWallet.address)

  const receiverWallet = await initDfnsWallet(process.env.DFNS_RECEIVER_WALLET_ID!)
  console.log("Tron receiver address: %s", receiverWallet.address)


  const tronWeb = new TronWeb({
    fullHost: 'https://api.shasta.trongrid.io', // Replace with the TRON full node URL
  });

  const tx = await tronWeb.transactionBuilder.sendTrx(receiverWallet.address, 10, senderWallet.address);

  console.log(tx);

  const signedtxn = await senderWallet.signTransaction(tx);
  console.log("signature: %s", signedtxn);
  
  try {
    const receipt = await tronWeb.trx.sendRawTransaction(signedtxn);
    console.log(receipt);
  } catch (error) {
    console.log(error);
  }
}

main();
