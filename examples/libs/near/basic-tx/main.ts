import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import { DfnsWallet } from '@dfns/lib-near'
import { Account } from '@near-js/accounts'
import { JsonRpcProvider, Provider } from '@near-js/providers'

import * as dotenv from 'dotenv'

dotenv.config()

const initDfnsWallet = async (walletId: string) => {
  const signer = new AsymmetricKeySigner({
    credId: process.env.DFNS_CRED_ID!,
    privateKey: process.env.DFNS_PRIVATE_KEY!,
  })

  const dfnsClient = new DfnsApiClient({
    orgId: process.env.DFNS_ORG_ID!,
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
  const nearWalletId = process.env.NEAR_WALLET_ID!
  const senderWallet = await initDfnsWallet(nearWalletId)
  // add headers if needed
  const provider = new JsonRpcProvider({url: process.env.NEAR_NODE_URL!})

  const account = new Account(senderWallet.address, provider as Provider, senderWallet)

  const receiverId = "b7a3c12dc0c8c748ab07525b701122b88bd78f600c76342d27f25e5f92444cde"
  const amount = BigInt('10000000000000000000000') // 0.01 NEAR

  console.log(`Sending ${amount / 10n ** 24n} NEAR to the address ${receiverId}`)

  const finalOutput = await account.transfer({
    receiverId,
    amount,
  })

  console.log(`Transaction submitted with hash ${finalOutput.transaction.hash}`)
}

main()
