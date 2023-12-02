import { BiconomySmartAccountV2, DEFAULT_ENTRYPOINT_ADDRESS } from '@biconomy/account'
import { Bundler } from '@biconomy/bundler'
import { ChainId } from '@biconomy/core-types'
import { DEFAULT_ECDSA_OWNERSHIP_MODULE, ECDSAOwnershipValidationModule } from '@biconomy/modules'
import { BiconomyPaymaster, PaymasterMode } from '@biconomy/paymaster'
import { DfnsWallet } from '@dfns/lib-ethersjs5'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import { Interface } from '@ethersproject/abi'
import { JsonRpcProvider } from '@ethersproject/providers'
import dotenv from 'dotenv'

dotenv.config()

const provider = new JsonRpcProvider(process.env.POLYGON_PROVIDER_URL)

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

const bundler = new Bundler({
  bundlerUrl: 'https://bundler.biconomy.io/api/v2/80001/nJPK7B3ru.dd7f7861-190d-41bd-af80-6877f74b8f44',
  chainId: ChainId.POLYGON_MUMBAI,
  entryPointAddress: DEFAULT_ENTRYPOINT_ADDRESS,
})

const paymaster = new BiconomyPaymaster({
  paymasterUrl: 'https://paymaster.biconomy.io/api/v1/80001/Tpk8nuCUd.70bd3a7f-a368-4e5a-af14-80c7f1fcda1a',
})

const createAccount = async (): Promise<BiconomySmartAccountV2> => {
  const mumbaiWallet = await initDfnsWallet(process.env.POLYGON_WALLET_ID!)

  const module = await ECDSAOwnershipValidationModule.create({
    signer: mumbaiWallet,
    moduleAddress: DEFAULT_ECDSA_OWNERSHIP_MODULE,
  })

  return BiconomySmartAccountV2.create({
    chainId: ChainId.POLYGON_MUMBAI,
    bundler: bundler,
    paymaster: paymaster,
    entryPointAddress: DEFAULT_ENTRYPOINT_ADDRESS,
    defaultValidationModule: module,
    activeValidationModule: module,
  })
}

const main = async () => {
  const account = await createAccount()
  const address = await account.getAccountAddress()
  console.log(`Smart account address: ${address}`)

  const biconomyNft = '0x1758f42Af7026fBbB559Dc60EcE0De3ef81f665e'
  const mintAbi = new Interface(['function safeMint(address _to)'])
  const gaslessMint = await account.buildUserOp([
    {
      to: biconomyNft,
      data: mintAbi.encodeFunctionData('safeMint', [address]),
    },
  ])

  const paymasterResponse = await paymaster.getPaymasterAndData(gaslessMint, {
    mode: PaymasterMode.SPONSORED,
    smartAccountInfo: {
      name: 'BICONOMY',
      version: '2.0.0',
    },
  })

  gaslessMint.paymasterAndData = paymasterResponse.paymasterAndData
  const userOpResponse = await account.sendUserOp(gaslessMint)
  const userOpReceipt = await userOpResponse.wait()
  console.log(`Transaction hash: ${userOpReceipt.receipt.transactionHash}`)
  console.log(`Minted NFT: https://testnets.opensea.io/${address}`)
}

main()
