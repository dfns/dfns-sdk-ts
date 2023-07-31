import { DfnsWallet } from '@dfns/lib-ethersjs5'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import { JsonRpcProvider } from '@ethersproject/providers'
import { use, POSClient } from '@maticnetwork/maticjs'
import { Web3ClientPlugin } from '@maticnetwork/maticjs-ethers'
import dotenv from 'dotenv'

dotenv.config()

const USDC_CONTRACT_ADDRESS = '0x07865c6e87b9f70255377e024ace6630c1eaa37f'

const l1Provider = new JsonRpcProvider(process.env.L1_RPC_PROVIDER_URL)
const l2Provider = new JsonRpcProvider(process.env.L2_RPC_PROVIDER_URL)

const initDfnsWallet = (walletId: string, provider: JsonRpcProvider) => {
  const signer = new AsymmetricKeySigner({
    privateKey: process.env.DFNS_PRIVATE_KEY!,
    credId: process.env.DFNS_CRED_ID!,
    appOrigin: process.env.DFNS_APP_ORIGIN!,
  })

  const dfnsClient = new DfnsApiClient({
    appId: process.env.DFNS_APP_ID!,
    authToken: process.env.DFNS_AUTH_TOKEN!,
    baseUrl: process.env.DFNS_API_URL!,
    signer,
  })

  return new DfnsWallet({
    walletId,
    dfnsClient,
    maxRetries: 10,
  }).connect(provider)
}

const goerliWallet = initDfnsWallet(process.env.DFNS_WALLET_ID!, l1Provider)
const mumbaiWallet = goerliWallet.connect(l2Provider)

use(Web3ClientPlugin)

const initPOSClient = async () => {
  const posClient = new POSClient()
  return posClient.init({
    log: false,
    network: 'testnet',
    version: 'mumbai',
    parent: {
      provider: goerliWallet,
      defaultConfig: {
        from: await goerliWallet.getAddress(),
      },
    },
    child: {
      provider: mumbaiWallet,
      defaultConfig: {
        from: await mumbaiWallet.getAddress(),
      },
    },
  })
}

const AMOUNT_TO_DEPOSIT = '100'

const main = async () => {
  const client = await initPOSClient()
  const usdc = client.erc20(USDC_CONTRACT_ADDRESS, true)

  const address = await goerliWallet.getAddress()
  console.log(`${address} USDC balance: ${await usdc.getBalance(address)}`)

  const approveTx = await usdc.approve(AMOUNT_TO_DEPOSIT, {
    gasLimit: 60000,
  })
  console.log(`Approve bridge contract allowance: ${await approveTx.getTransactionHash()}`)
  await approveTx.getReceipt()

  const depositTx = await usdc.deposit(AMOUNT_TO_DEPOSIT, address, {
    gasLimit: 300000,
  })
  console.log(`Transaction hash on L1: ${await depositTx.getTransactionHash()}`)
  const receipt = await depositTx.getReceipt()
  console.log(JSON.stringify(receipt))

  console.log(`${address}'s USDC balance: ${await usdc.getBalance(address)}`)
}

main()
