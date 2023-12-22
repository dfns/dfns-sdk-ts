import { DfnsWallet } from '@dfns/lib-taquito'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import { RpcClient} from '@taquito/rpc'
import { TezosToolkit } from '@taquito/taquito'

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
  })
}

async function main() {
  // Replace with the RPC url/ chainId you want
  const client = new RpcClient(process.env.TEZOS_NODE_URL!) 

  const senderWallet = await initDfnsWallet(process.env.TEZOS_WALLET_ID!)
  console.log("Tezos sender address: %s", senderWallet.address)

  const Tezos = new TezosToolkit(client)

  Tezos.setProvider({ signer: senderWallet })

  const receiverAddress = 'tz1ifJaJ46sqXxfFsQ5MWuVB96q3K1sFmoJA'

  const txOp = await Tezos.contract.transfer({ to: receiverAddress, amount: 1 })

  console.log(`Operations pushed: ${JSON.stringify(txOp.results, null, 2)}`)

  console.log(`Waiting for confirmations....`)

  await txOp.confirmation(1)

  console.log(`Operation ${txOp.hash} confirmed`)
}

main();

