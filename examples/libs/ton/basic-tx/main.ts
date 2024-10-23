import { DfnsWallet } from '@dfns/lib-ton'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import { getHttpEndpoint } from '@orbs-network/ton-access'
import { internal, SendMode, TonClient, WalletContractV5R1 } from '@ton/ton'

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
    walletId,
    dfnsClient,
  })
}

async function main() {
  const wallet = await initDfnsWallet(process.env.TON_WALLET_ID!)

  // use orbs to connect TON nodes
  const endpoint = await getHttpEndpoint({
    network: 'testnet',
  })

  const client = new TonClient({ endpoint })
  const contract = client.open(
    WalletContractV5R1.create({
      workchain: 0,
      publicKey: wallet.publicKey,
    })
  )

  console.log('wallet address: ', contract.address.toString({ bounceable: false, testOnly: true }))
  console.log('current balance: ', await contract.getBalance())

  const seqno = await contract.getSeqno()
  const message = await contract.createTransfer({
    seqno,
    messages: [
      internal({
        to: contract.address,
        value: 1n,
        bounce: false,
      }),
    ],
    sendMode: SendMode.PAY_GAS_SEPARATELY + SendMode.IGNORE_ERRORS,
    signer: wallet.sign,
  })

  await contract.send(message)

  console.log('balance after transfer: ', await contract.getBalance())
}

main()
