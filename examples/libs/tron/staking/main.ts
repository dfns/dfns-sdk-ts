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
    fullHost: process.env.TRON_NODE_URL!,
  })

  let account = await tronWeb.trx.getAccount(wallet.address)
  console.log(`Amount staked for bandwith: ${account.frozenV2[0].amount ?? 0}`)
  console.log(`Amount staked for energy: ${account.frozenV2[1].amount ?? 0}`)

  const bandwidthUnsigned = await tronWeb.transactionBuilder.freezeBalanceV2(1_000_000, 'BANDWIDTH', wallet.address)
  const bandwidthSigned = await wallet.signTransaction(bandwidthUnsigned)
  console.log(`Freeze bandwidth txID: ${bandwidthSigned.txID}`)
  const bandwidthReceipt = await tronWeb.trx.sendRawTransaction(bandwidthSigned)
  console.log(`Freeze bandwidth broadcasted: ${bandwidthReceipt.result}`)

  const energyUnsigned = await tronWeb.transactionBuilder.freezeBalanceV2(1_000_000, 'ENERGY', wallet.address)
  const energySigned = await wallet.signTransaction(energyUnsigned)
  console.log(`Freeze energy txID: ${energySigned.txID}`)
  const energyReceipt = await tronWeb.trx.sendRawTransaction(energySigned)
  console.log(`Freeze energy broadcasted: ${energyReceipt.result}`)

  console.log('waiting for transactions to finalize ...')
  await new Promise((f) => setTimeout(f, 60000))

  account = await tronWeb.trx.getAccount(wallet.address)
  console.log(`Amount staked for bandwith: ${account.frozenV2[0].amount ?? 0}`)
  console.log(`Amount staked for energy: ${account.frozenV2[1].amount ?? 0}`)
}

main()
