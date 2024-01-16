import { DfnsWallet } from '@dfns/lib-ethersjs5'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import { JsonRpcProvider } from '@ethersproject/providers'
import { CrossChainMessenger, MessageStatus } from '@eth-optimism/sdk'
import dotenv from 'dotenv'

dotenv.config()

const ethereum = new JsonRpcProvider(process.env.ETHEREUM_NODE_URL)
const optimism = new JsonRpcProvider(process.env.OPTIMISM_NODE_URL)

const initDfnsWallet = (walletId: string) => {
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

  return DfnsWallet.init({ walletId, dfnsClient })
}

const AMOUNT_TO_DEPOSIT = 1

const main = async () => {
  const ethWallet = (await initDfnsWallet(process.env.ETHEREUM_WALLET_ID!)).connect(ethereum)
  const opWallet = (await initDfnsWallet(process.env.OPTIMISM_WALLET_ID!)).connect(optimism)

  const crossChainMessenger = new CrossChainMessenger({
    l1ChainId: (await ethereum.getNetwork()).chainId,
    l2ChainId: (await optimism.getNetwork()).chainId,
    l1SignerOrProvider: ethWallet,
    l2SignerOrProvider: opWallet,
  })

  const oldBalance = await opWallet.getBalance()

  const depositTx = await crossChainMessenger.depositETH(AMOUNT_TO_DEPOSIT, {
    recipient: await opWallet.getAddress(),
  })
  console.log(`Transaction hash (on L1): ${depositTx.hash}`)
  await depositTx.wait()

  console.log('Waiting for status to change to RELAYED ⏳')
  await crossChainMessenger.waitForMessageStatus(depositTx.hash, MessageStatus.RELAYED)

  const newBalance = await opWallet.getBalance()
  console.log(
    `ETH balance of the Optimism wallet has been updated from ${oldBalance.toString()} to ${newBalance.toString()}`
  )
}

main()
