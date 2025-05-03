import { DfnsWallet } from '@dfns/lib-viem';
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import dotenv from 'dotenv'
import { createSmartAccountClient } from 'permissionless'
import { toSimpleSmartAccount } from 'permissionless/accounts'
import { createPimlicoClient } from 'permissionless/clients/pimlico'
import { createPublicClient, getContract, http, parseAbi, parseEther } from 'viem'
import { toAccount } from 'viem/accounts'
import { entryPoint06Address } from "viem/account-abstraction"
import { sepolia } from 'viem/chains'

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

  const publicClient = createPublicClient({
    transport: http(process.env.ETHEREUM_NODE_URL!),
    chain: sepolia
  })

  // global entry point
  const entryPoint = {
    address: entryPoint06Address,
    version: '0.6' as const,
  }

  const pimlicoRpc = http(`https://api.pimlico.io/v2/${sepolia.id}/rpc?apikey=${process.env.PIMLICO_API_KEY!}`)

  const simpleAccount = await toSimpleSmartAccount({
    client: publicClient,
    owner: toAccount(ethWallet),
    factoryAddress: '0x9406Cc6185a346906296840746125a0E44976454',
    entryPoint: entryPoint,
  })

  const paymasterClient = createPimlicoClient({
    entryPoint: entryPoint,
    transport: pimlicoRpc,
  })

  const smartAccountClient = createSmartAccountClient({
    account: simpleAccount,
    chain: sepolia,
    bundlerTransport: pimlicoRpc,
    paymaster: paymasterClient,
    userOperation: {
      estimateFeesPerGas: async () => {
        return (await paymasterClient.getUserOperationGasPrice()).fast
      },
    }
  })

  const address = smartAccountClient.account.address
  console.log(`Smart account address: ${address}`)

  // an erc20 token on sepolia testnet that anyone can mint
  const token = getContract({
    address: '0x9aF64fA0B11FB3603f7A8E9D29D2f2FA62Bb51BB',
    abi: parseAbi(['function mint(address to, uint256 amount)']),
    client: {
      public: publicClient,
      wallet: smartAccountClient,
    },
  })

  // send a sponsored user operation to mint some tokens
  const txHash = await token.write.mint([address, parseEther('1')])
  console.log(`Transaction hash: ${txHash}`)
}

main()