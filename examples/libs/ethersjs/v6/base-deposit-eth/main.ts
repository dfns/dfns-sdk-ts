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
    orgId: process.env.DFNS_ORG_ID!,
    authToken: process.env.DFNS_AUTH_TOKEN!,
    baseUrl: process.env.DFNS_API_URL!,
    signer,
  })

  return DfnsWallet.init({ walletId, dfnsClient })
}
const main = async () => {
  const signer = new AsymmetricKeySigner({
    credId: process.env.DFNS_CRED_ID!,
    privateKey: process.env.DFNS_PRIVATE_KEY!,
  })

  const dfnsClient = new DfnsApiClient({
    orgId: process.env.DFNS_ORG_ID!,
    authToken: process.env.DFNS_AUTH_TOKEN!,
    baseUrl: process.env.DFNS_API_URL!,
    signer,
  })
  const usdc = '0x036cbd53842c5426634e7929541ec2318f3dcf7e'

  const erc20 = new Interface(['function transfer(address to, uint amount)'])
  const data = erc20.encodeFunctionData('transfer', ['0x416a2003ba6e8c2ee25816a8cbd09dca187049b3', 1])

  const nonce = 3

  await parallelize([...Array(1000).keys()], 20).forEach(async (n) => {
    const res = await dfnsClient.wallets.broadcastTransaction({
      walletId: process.env.BASE_WALLET_ID!,
      body: {
        kind: 'Transaction',
        transaction: {
          to: usdc,
          data,
          nonce: nonce + n,
        },
      },
    })

    console.log(`broadcasted ${res.id}, status: ${res.status}`)
  })
}
