import { EthBridger, getL2Network, EthDepositStatus } from '@arbitrum/sdk'
import { DfnsWallet } from '@dfns/lib-ethersjs5'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import { BigNumber } from '@ethersproject/bignumber'
import { JsonRpcProvider } from '@ethersproject/providers'
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
    dfnsClient,
    maxRetries: 10,
  }).connect(provider)
}

const l1Wallet = initDfnsWallet(process.env.ETHEREUM_WALLET_ID!, l1Provider)
const l2Wallet = initDfnsWallet(process.env.ARBITRUM_WALLET_ID!, l2Provider)

const AMOUNT_TO_DEPOSIT = BigNumber.from('1000000')

const main = async () => {
  const l2Network = await getL2Network(l2Wallet)
  const ethBridger = new EthBridger(l2Network)

  const oldBalance = await l2Wallet.getBalance()

  const depositTx = await ethBridger.depositTo({
    amount: AMOUNT_TO_DEPOSIT,
    l1Signer: l1Wallet,
    l2Provider: l2Provider,
    destinationAddress: await l2Wallet.getAddress(),
  })
  const depositRec = await depositTx.wait()
  console.log('Deposit L1 receipt is:', depositRec.transactionHash)

  console.warn('Now we wait for L2 side of the transaction to be executed ⏳')
  const l2Result = await depositRec.waitForL2(l2Provider)

  l2Result.complete
    ? console.log(`L2 message successful: status: ${EthDepositStatus[await l2Result.message.status()]}`)
    : console.log(`L2 message failed: status ${EthDepositStatus[await l2Result.message.status()]}`)

  const newBalance = await l2Wallet.getBalance()
  console.log(`ETH balance of the L2 wallet has been updated from ${oldBalance.toString()} to ${newBalance.toString()}`)
}

main()
