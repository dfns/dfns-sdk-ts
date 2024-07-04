import { DfnsWallet } from '@dfns/lib-ethersjs6'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'

import { JsonRpcProvider } from 'ethers'

export const ethereum = new JsonRpcProvider(process.env.ETHEREUM_NODE_URL!)

export const initDfnsWallet = async (walletId: string) => {
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
