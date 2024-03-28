import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import dotenv from 'dotenv'

const main = async () => {
  dotenv.config()

  const signer = new AsymmetricKeySigner({
    credId: process.env.DFNS_CRED_ID!,
    privateKey: process.env.DFNS_PRIVATE_KEY!,
  })

  const dfnsApi = new DfnsApiClient({
    appId: process.env.DFNS_APP_ID!,
    authToken: process.env.DFNS_AUTH_TOKEN!,
    baseUrl: process.env.DFNS_API_URL!,
    signer,
  })

  const wallet = await dfnsApi.wallets.createWallet({ body: { network: 'EthereumSepolia' } })
  console.log('New wallet: ', wallet)

  const list = await dfnsApi.wallets.listWallets({})
  console.log(`You have ${list.items.length} wallets`)
}

main()
