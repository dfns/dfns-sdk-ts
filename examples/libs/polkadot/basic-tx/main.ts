import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import { ApiPromise, HttpProvider } from '@polkadot/api'
import { DfnsWallet } from '@dfns/lib-polkadot'

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
  const polkadotWalletId = process.env.POLKADOT_WALLET_ID!
  const senderWallet = await initDfnsWallet(polkadotWalletId)

  const httpProvider = new HttpProvider(process.env.POLKADOT_NODE_URL!)

  // Polkadot api can be used in conjunction of a signer that will be called everytime
  // we need to provide a signature
  const api = await ApiPromise.create({ provider: httpProvider, signer: senderWallet, noInitWarn: true })

  // In polkadot, an account must have at least 1 DOT, we need to make sure that
  // this address has funds or that we transfer at least 1 DOT.
  // https://wiki.polkadot.network/docs/learn-accounts#existential-deposit-and-reaping
  const receiverAddress = '5DLJur1FsXezqiRvsq7nTJGDGszDW4xtNeENAYBMXPwPY9bZ'

  // 1 WND or DOT, precision of the asset is 12
  const amount = 10 ** 12

  console.log(`Sending ${amount / 10 ** 12} DOT/WND to the address ${receiverAddress}`)

  // `signAndSend` can accept a keyring or a string. If it is a key ring it will use it to sign,
  // if it is a string, the custom signer will be triggered. Here we are passing the `polkadotWalletId`
  // a string.
  const txHash = await api.tx.balances.transferKeepAlive(receiverAddress, amount).signAndSend(senderWallet.address)

  console.log(`Transaction submitted with hash ${txHash}`)
}

main()
