import { DfnsWallet } from '@dfns/ethersjs5-wallet'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import { BigNumber } from '@ethersproject/bignumber'
import { JsonRpcProvider } from '@ethersproject/providers'
import { CrossChainMessenger, MessageStatus } from '@eth-optimism/sdk'
import dotenv from 'dotenv'

dotenv.config()

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
    retryInterval: 2000,
    dfnsClient,
  }).connect(provider)
}

const l1Wallet = initDfnsWallet(process.env.ETHEREUM_WALLET_ID!, l1Provider)
const l2Wallet = initDfnsWallet(process.env.OPTIMISM_WALLET_ID!, l2Provider)

const AMOUNT_TO_DEPOSIT = BigNumber.from('1000000')

const main = async () => {
  const crossChainMessenger = new CrossChainMessenger({
    l1ChainId: 5, // Goerli value, 1 for mainnet
    l2ChainId: 420, // Goerli value, 10 for mainnet
    l1SignerOrProvider: l1Wallet,
    l2SignerOrProvider: l2Wallet,
  })

  const oldBalance = await l2Wallet.getBalance()

  const depositTx = await crossChainMessenger.depositETH(AMOUNT_TO_DEPOSIT, {
    recipient: await l2Wallet.getAddress(),
  })
  console.log(`Transaction hash (on L1): ${depositTx.hash}`)
  await depositTx.wait()

  console.log('Waiting for status to change to RELAYED ⏳')
  await crossChainMessenger.waitForMessageStatus(depositTx.hash, MessageStatus.RELAYED)

  const newBalance = await l2Wallet.getBalance()
  console.log(`ETH balance of the L2 wallet has been updated from ${oldBalance.toString()} to ${newBalance.toString()}`)
}

main()
