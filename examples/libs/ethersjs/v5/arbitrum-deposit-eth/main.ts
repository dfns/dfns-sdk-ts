import { EthBridger, getL2Network, EthDepositStatus } from '@arbitrum/sdk'
import { DfnsWallet } from '@dfns/lib-ethersjs5'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import { BigNumber } from '@ethersproject/bignumber'
import { JsonRpcProvider } from '@ethersproject/providers'
import dotenv from 'dotenv'

dotenv.config()

const ethereum = new JsonRpcProvider(process.env.ETHEREUM_NODE_URL)
const arbitrum = new JsonRpcProvider(process.env.ARBITRUM_NODE_URL)

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

const AMOUNT_TO_DEPOSIT = BigNumber.from('1')

const main = async () => {
  const ethWallet = (await initDfnsWallet(process.env.ETHEREUM_WALLET_ID!)).connect(ethereum)
  const arbWallet = (await initDfnsWallet(process.env.ARBITRUM_WALLET_ID!)).connect(arbitrum)

  const l2Network = await getL2Network(arbWallet)
  const ethBridger = new EthBridger(l2Network)

  const oldBalance = await arbWallet.getBalance()

  const depositTx = await ethBridger.depositTo({
    amount: AMOUNT_TO_DEPOSIT,
    l1Signer: ethWallet,
    l2Provider: arbitrum,
    destinationAddress: await arbWallet.getAddress(),
  })
  const depositRec = await depositTx.wait()
  console.log('Deposit L1 receipt is:', depositRec.transactionHash)

  console.warn('Now we wait for L2 side of the transaction to be executed ⏳')
  const l2Result = await depositRec.waitForL2(arbitrum)

  l2Result.complete
    ? console.log(`L2 message successful: status: ${EthDepositStatus[await l2Result.message.status()]}`)
    : console.log(`L2 message failed: status ${EthDepositStatus[await l2Result.message.status()]}`)

  const newBalance = await arbWallet.getBalance()
  console.log(
    `ETH balance of the Arbitrum wallet has been updated from ${oldBalance.toString()} to ${newBalance.toString()}`
  )
}

main()
