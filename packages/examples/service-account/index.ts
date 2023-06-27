import { BlockchainNetwork } from '@dfns/sdk/codegen/datamodel/Foundations'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import dotenv from 'dotenv'

const main = async () => {
  dotenv.config()

  const signer = new AsymmetricKeySigner({
    privateKey: process.env.DFNS_PRIVATE_KEY!,
    credId: process.env.DFNS_CRED_ID!,
    appOrigin: process.env.DFNS_APP_ORIGIN!,
  })

  const dfnsApi = new DfnsApiClient({
    appId: process.env.DFNS_APP_ID!,
    authToken: process.env.DFNS_AUTH_TOKEN!,
    baseUrl: process.env.DFNS_API_URL!,
    signer,
  })

  const wallet = await dfnsApi.wallets.createWallet({ body: { network: BlockchainNetwork.ETH_GOERLI } })
  console.log(JSON.stringify(wallet))

  const list = await dfnsApi.wallets.listWallets({})
  console.log(JSON.stringify(list))
}

main()
