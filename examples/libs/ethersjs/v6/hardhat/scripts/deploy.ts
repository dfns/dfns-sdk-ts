import { DfnsWallet } from '@dfns/lib-ethersjs6'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import dotenv from 'dotenv'
import { ethers } from 'hardhat'

dotenv.config()

const initDfnsWallet = (walletId: string) => {
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

const main = async () => {
  const ethWallet = await initDfnsWallet(process.env.ETHEREUM_WALLET_ID!)
  console.log(`ERC20 contract deployed by ${await ethWallet.getAddress()}`)

  const contract = await ethers.deployContract('Token', [process.env.TOKEN_NAME!, process.env.TOKEN_SYMBOL!], {
    signer: ethWallet.connect(new ethers.JsonRpcProvider(process.env.ETHEREUM_NODE_URL!)),
  })

  await contract.waitForDeployment()
  console.log(`ERC20 contract deployed to ${await contract.getAddress()}`)
  console.log(`transaction hash: ${contract.deploymentTransaction()?.hash}`)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
