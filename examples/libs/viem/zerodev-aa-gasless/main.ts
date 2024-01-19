import { LocalAccountSigner } from '@alchemy/aa-core'
import { DfnsWallet } from '@dfns/lib-viem'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import { ECDSAProvider } from '@zerodev/sdk'
import dotenv from 'dotenv'
import { Hash, createPublicClient, encodeFunctionData, http, parseAbi } from 'viem'
import { toAccount } from 'viem/accounts'
import { polygonMumbai } from 'viem/chains'

dotenv.config()

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

const main = async () => {
  const mumbaiWallet = await initDfnsWallet(process.env.POLYGON_WALLET_ID!)
  const account = toAccount(mumbaiWallet)
  const owner = new LocalAccountSigner(account)

  // create the AA wallet
  const ecdsaProvider = await ECDSAProvider.init({
    projectId: process.env.ZERODEV_PROJECT_ID!,
    owner,
  })
  const address = await ecdsaProvider.getAddress()
  console.log('Smart account address:', address)

  // mint the NFT
  const zerodevNft = '0x34bE7f35132E97915633BC1fc020364EA5134863'
  const contractAbi = parseAbi([
    'function mint(address _to) public',
    'function balanceOf(address owner) external view returns (uint256 balance)',
  ])

  const { hash } = await ecdsaProvider.sendUserOperation({
    target: zerodevNft,
    data: encodeFunctionData({
      abi: contractAbi,
      functionName: 'mint',
      args: [address],
    }),
  })
  console.log(`User operation hash: ${hash}`)

  const txHash = await ecdsaProvider.waitForUserOperationTransaction(<Hash>hash)
  console.log(`Transaction hash: ${txHash}`)

  // check how many NFTs we have
  const publicClient = createPublicClient({
    chain: polygonMumbai,
    transport: http(process.env.POLYGON_NODE_URL),
  })
  const balanceOf = await publicClient.readContract({
    address: zerodevNft,
    abi: contractAbi,
    functionName: 'balanceOf',
    args: [address],
  })
  console.log(`Smart account NFT balance: ${balanceOf}`)
}

main()
