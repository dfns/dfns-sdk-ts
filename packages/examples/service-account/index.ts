import { BlockchainNetwork } from '@dfns/sdk/codegen/datamodel/Foundations'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-key-signer'
import dotenv from 'dotenv'

const main = async () => {
  dotenv.config()

  const signer = new AsymmetricKeySigner({
    privateKey: process.env.DFNS_PRIVATE_KEY!,
    credId: 'Y2ktMzgxaTEtZTF1bWgtOXY1cG9yY2tkZDd1dG1jYg',
    appOrigin: 'https://app.dfns.wtf',
  })

  const client = new DfnsApiClient({
    appId: 'ap-C3H2-H7-3c762njr9t96l9qto6snl5ca4r',
    accessToken: process.env.DFNS_ACCESS_TOKEN!,
    baseUrl: 'https://api.dfns.wtf',
    signer,
  })

  const wallet = await client.wallets.createWallet({ body: { network: BlockchainNetwork.ETH_GOERLI } })
  console.log(JSON.stringify(wallet))

  const list = await client.wallets.listWallets({})
  console.log(JSON.stringify(list))
}

main()
