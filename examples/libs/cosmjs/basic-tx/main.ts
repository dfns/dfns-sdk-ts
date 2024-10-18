import { SigningStargateClient } from '@cosmjs/stargate'
import { DfnsWallet } from '@dfns/lib-cosmjs'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'

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
    prefix: 'osmo',
    dfnsClient,
  })
}

async function main() {
  const wallet = await initDfnsWallet(process.env.OSMOSIS_WALLET_ID!)
  const account = (await wallet.getAccounts())[0]
  console.log('Osmosis wallet address: %s', account.address)

  const client = await SigningStargateClient.connectWithSigner(process.env.OSMOSIS_RPC_URL!, wallet)
  console.log(`connected to chain id: ${await client.getChainId()}`)
  console.log('current balances: ', await client.getAllBalances(account.address))

  const res = await client.sendTokens(
    account.address,
    'osmo13x9kp45s6ne9hjg85k38g4mzhpg3t5vjfl05kl',
    [{ amount: '1', denom: 'uosmo' }],
    { amount: [{ amount: '750', denom: 'uosmo' }], gas: '300000' }
  )

  console.log(`transaction hash: ${res.transactionHash}`)
  console.log('balance after transfer: ', await client.getAllBalances(account.address))
}

main()
