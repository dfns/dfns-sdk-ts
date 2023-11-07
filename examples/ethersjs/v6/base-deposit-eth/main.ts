import { DfnsWallet } from '@dfns/lib-ethersjs6'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import dotenv from 'dotenv'
import { Contract, JsonRpcProvider, parseEther } from 'ethers'

dotenv.config()

const L1_BRIDGE = '0xfa6d8ee5be770f84fc001d098c4bd604fe01284a'

const L1_BRIDGE_ABI = ['function bridgeETHTo(address _to, uint32 _minGasLimit, bytes _extraData) payable']

const ethereumGoerli = new JsonRpcProvider(process.env.ETHEREUM_GOERLI_PROVIDER_URL!)

const initDfnsWallet = (walletId: string, provider: JsonRpcProvider | null = null) => {
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
    walletId: walletId,
    dfnsClient,
    maxRetries: 10,
  }).connect(provider)
}

const sender = initDfnsWallet(process.env.ETHEREUM_GOERLI_WALLET_ID!, ethereumGoerli)
const receiver = initDfnsWallet(process.env.BASE_GOERLI_DFNS_WALLET_ID!)

const main = async () => {
  const l1Address = await sender.getAddress()
  console.log(`L1 sender address ${l1Address}`)

  const l2Address = await receiver.getAddress()
  console.log(`L2 receiver address ${l2Address}`)

  const minGasLimit = '1000000'
  const bridgeContract = new Contract(L1_BRIDGE, L1_BRIDGE_ABI, sender)
  const amountToDeposit = parseEther('0.1')
  console.log(`Depositing ${amountToDeposit} wei`)

  const depositTx = await bridgeContract.bridgeETHTo(l2Address, minGasLimit, '0x', { value: amountToDeposit })
  const depositReceipt = await depositTx.wait()
  console.log('Deposit L1 receipt is:', depositReceipt.transactionHash)
}

main()
