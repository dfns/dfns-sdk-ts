import { DfnsWallet } from '@dfns/lib-ethersjs6'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import dotenv from 'dotenv'
import { Contract, JsonRpcProvider } from 'ethers'

dotenv.config()

const L1_BRIDGE = '0xfd0Bf71F60660E2f608ed56e1659C450eB113120'

const L1_BRIDGE_ABI = ['function bridgeETHTo(address _to, uint32 _minGasLimit, bytes _extraData) payable']

const ethereum = new JsonRpcProvider(process.env.ETHEREUM_NODE_URL!)

const initDfnsWallet = async (walletId: string) => {
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
  const ethWallet = (await initDfnsWallet(process.env.ETHEREUM_WALLET_ID!)).connect(ethereum)
  const baseWallet = await initDfnsWallet(process.env.BASE_WALLET_ID!)

  const l1Address = await ethWallet.getAddress()
  console.log(`Ethereum L1 sending address ${l1Address}`)

  const l2Address = await baseWallet.getAddress()
  console.log(`Base L2 receiving address ${l2Address}`)

  const minGasLimit = '1000000'
  const bridgeContract = new Contract(L1_BRIDGE, L1_BRIDGE_ABI, ethWallet)
  const amountToDeposit = '1'
  console.log(`Depositing ${amountToDeposit} wei`)

  const depositTx = await bridgeContract.bridgeETHTo(l2Address, minGasLimit, '0x', { value: amountToDeposit })
  const depositReceipt = await depositTx.wait()
  console.log(`Deposit L1 receipt is: ${depositReceipt.hash}`)
}

main()
