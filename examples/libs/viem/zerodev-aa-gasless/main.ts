import { DfnsWallet } from '@dfns/lib-viem'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import dotenv from 'dotenv'
import { createPublicClient, getContract, http, parseAbi, parseEther } from 'viem'
import { toAccount } from 'viem/accounts'
import { sepolia } from 'viem/chains'
import { signerToEcdsaValidator } from '@zerodev/ecdsa-validator'
import { createKernelAccount, createKernelAccountClient, createZeroDevPaymasterClient } from '@zerodev/sdk'
import { getEntryPoint, KERNEL_V3_1 } from '@zerodev/sdk/constants'

dotenv.config()

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

const main = async () => {
  const ethWallet = await initDfnsWallet(process.env.ETHEREUM_WALLET_ID!)

  const entryPoint = getEntryPoint('0.7')
  const rpcUrl = `https://rpc.zerodev.app/api/v3/${process.env.ZERODEV_PROJECT_ID!}/chain/${sepolia.id}`

  const publicClient = createPublicClient({
    transport: http(rpcUrl),
    chain: sepolia,
  })

  const ecdsaValidator = await signerToEcdsaValidator(publicClient, {
    signer: toAccount(ethWallet),
    entryPoint,
    kernelVersion: KERNEL_V3_1,
  })

  const account = await createKernelAccount(publicClient, {
    plugins: {
      sudo: ecdsaValidator,
    },
    entryPoint,
    kernelVersion: KERNEL_V3_1,
  })

  const zerodevPaymaster = createZeroDevPaymasterClient({
    chain: sepolia,
    transport: http(rpcUrl),
  })

  const kernelClient = createKernelAccountClient({
    account,
    chain: sepolia,
    paymaster: zerodevPaymaster,
    bundlerTransport: http(rpcUrl),
  })

  const address = await kernelClient.account.address
  console.log('Smart account address:', address)

  // an erc20 token on sepolia testnet that anyone can mint
  const token = getContract({
    address: '0x9aF64fA0B11FB3603f7A8E9D29D2f2FA62Bb51BB',
    abi: parseAbi(['function mint(address to, uint256 amount)']),
    client: {
      public: publicClient,
      wallet: kernelClient,
    },
  })

  // send a sponsored user operation to mint some tokens
  const txHash = await token.write.mint([address, parseEther('1')])
  console.log(`Transaction hash: ${txHash}`)
}

main()
