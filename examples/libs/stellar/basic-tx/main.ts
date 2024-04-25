import { DfnsWallet } from '@dfns/lib-stellar'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import { Horizon, TransactionBuilder, BASE_FEE, Networks, Operation, Asset, Memo } from '@stellar/stellar-sdk'

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
  const senderWallet = await initDfnsWallet(process.env.STELLAR_WALLET_ID!)
  console.log('stellar sender address: %s', senderWallet.address)

  await senderWallet.internalWorkflow(senderWallet.address)

  const provider = new Horizon.Server(process.env.HORIZON_API_URL!)

  const account = await provider.loadAccount(senderWallet.address)
  const transaction = new TransactionBuilder(account, {
    fee: BASE_FEE,
    networkPassphrase: Networks.TESTNET,
  })
    .addOperation(
      Operation.payment({
        destination: senderWallet.address,
        asset: Asset.native(),
        amount: "0.00001",
      })
    )
    .addMemo(Memo.text('Test Transaction'))
    .setTimeout(180)
    .build()

  const signedTx = await senderWallet.sign(transaction)
  console.log(`native transaction signed`)


  const t = TransactionBuilder.buildFeeBumpTransaction(senderWallet.address, "200", signedTx, Networks.TESTNET)
  const b = await senderWallet.sign(t)
  console.log(`native transaction signed`)

  const txHash = (await provider.submitTransaction(b)).hash
  console.log(`transaction broadcasted: ${txHash}`)
}

main()
