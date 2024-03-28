import { LightSmartContractAccount, getDefaultLightAccountFactoryAddress } from '@alchemy/aa-accounts'
import { AlchemyProvider } from '@alchemy/aa-alchemy'
import { LocalAccountSigner } from '@alchemy/aa-core'
import { DfnsWallet } from '@dfns/lib-viem'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import dotenv from 'dotenv'
import { encodeFunctionData, parseAbi } from 'viem'
import { toAccount } from 'viem/accounts'
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

const alchemyProvider = async (): Promise<AlchemyProvider> => {
  const ethWallet = await initDfnsWallet(process.env.ETHEREUM_WALLET_ID!)
  const account = toAccount(ethWallet)
  const eoaSigner = new LocalAccountSigner(account)

  return new AlchemyProvider({
    apiKey: process.env.ALCHEMY_API_KEY!,
    chain: sepolia,
  }).connect(
    (rpcClient) =>
      new LightSmartContractAccount({
        chain: sepolia,
        owner: eoaSigner,
        factoryAddress: getDefaultLightAccountFactoryAddress(sepolia),
        rpcClient,
      })
  )
}

const main = async () => {
  const provider = await alchemyProvider()
  const address = await provider.getAddress()
  console.log(`Smart account address: ${address}`)

  // link the provider with the Gas Manager. This ensures user operations
  // sent with this provider get sponsorship from the Gas Manager.
  provider.withAlchemyGasManager({
    policyId: process.env.ALCHEMY_GAS_POLICY_ID!,
  })

  const alchemyToken = '0x6F3c1baeF15F2Ac6eD52ef897f60cac0B10d90C3'

  // send a sponsored user operation to mint some tokens
  const { hash: uoHash } = await provider.sendUserOperation({
    target: alchemyToken,
    data: encodeFunctionData({
      abi: parseAbi(['function mint(address recipient)']),
      functionName: 'mint',
      args: [address],
    }),
  })
  console.log(`User operation hash: ${uoHash}`)

  const txHash = await provider.waitForUserOperationTransaction(uoHash)
  console.log(`Transaction hash: ${txHash}`)
}

main()
