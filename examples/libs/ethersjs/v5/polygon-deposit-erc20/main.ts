import { DfnsWallet } from '@dfns/lib-ethersjs5'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import { JsonRpcProvider } from '@ethersproject/providers'
import { use, POSClient } from '@maticnetwork/maticjs'
import { Web3ClientPlugin } from '@maticnetwork/maticjs-ethers'
import dotenv from 'dotenv'
import { Signer } from 'ethers'

dotenv.config()

const USDC_CONTRACT_ADDRESS = '0x07865c6e87b9f70255377e024ace6630c1eaa37f'

const ethereum = new JsonRpcProvider(process.env.ETHEREUM_NODE_URL)
const polygon = new JsonRpcProvider(process.env.POLYGON_NODE_URL)

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

use(Web3ClientPlugin)

const initPOSClient = async (ethWallet: Signer, polygonWallet: Signer) => {
  const posClient = new POSClient()
  return posClient.init({
    log: false,
    network: 'testnet',
    version: 'mumbai',
    parent: {
      provider: ethWallet,
      defaultConfig: {
        from: await ethWallet.getAddress(),
      },
    },
    child: {
      provider: polygonWallet,
      defaultConfig: {
        from: await polygonWallet.getAddress(),
      },
    },
  })
}

const AMOUNT_TO_DEPOSIT = '100'

const main = async () => {
  const ethWallet = (await initDfnsWallet(process.env.DFNS_WALLET_ID!)).connect(ethereum)
  const polygonWallet = ethWallet.connect(polygon)

  const client = await initPOSClient(ethWallet, polygonWallet)
  const usdc = client.erc20(USDC_CONTRACT_ADDRESS, true)

  const address = await ethWallet.getAddress()
  console.log(`${address} USDC balance on Ethereum: ${await usdc.getBalance(address)}`)

  const approveTx = await usdc.approve(AMOUNT_TO_DEPOSIT, {
    gasLimit: 60000,
  })
  console.log(`Approve bridge contract allowance: ${await approveTx.getTransactionHash()}`)
  await approveTx.getReceipt()

  const depositTx = await usdc.deposit(AMOUNT_TO_DEPOSIT, address, {
    gasLimit: 300000,
  })
  console.log(`Transaction hash on L1: ${await depositTx.getTransactionHash()}`)
  await depositTx.getReceipt()

  console.log(`${address}'s USDC balance after Polygon deposit: ${await usdc.getBalance(address)}`)
}

main()
