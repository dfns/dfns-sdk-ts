import { createSmartAccountClient, PaymasterMode } from '@biconomy/account'
import { DfnsWallet } from '@dfns/lib-viem'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import dotenv from 'dotenv'
import { createWalletClient, encodeFunctionData, http, parseAbi, parseEther } from 'viem'
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

const main = async () => {
  const ethWallet = await initDfnsWallet(process.env.ETHEREUM_WALLET_ID!)

  const walletClient = createWalletClient({
    account: toAccount(ethWallet),
    chain: sepolia,
    transport: http(),
  })

  const smartAccountClient = await createSmartAccountClient({
    signer: walletClient,
    biconomyPaymasterApiKey: process.env.BICONOMY_API_KEY!,
    bundlerUrl: `https://bundler.biconomy.io/api/v2/${sepolia.id}/nJPK7B3ru.dd7f7861-190d-41bd-af80-6877f74b8f44`,
  })

  const address = await smartAccountClient.getAccountAddress()
  console.log(`Smart account address: ${address}`)

  // an erc20 token on sepolia testnet that anyone can mint
  const token = '0x9aF64fA0B11FB3603f7A8E9D29D2f2FA62Bb51BB'

  const userOp = await smartAccountClient.sendTransaction(
    {
      to: token,
      data: encodeFunctionData({
        abi: parseAbi(['function mint(address to, uint256 amount)']),
        functionName: 'mint',
        args: [address, parseEther('1')],
      }),
    },
    { paymasterServiceData: { mode: PaymasterMode.SPONSORED } }
  )
  console.log(`User operation hash: ${userOp.userOpHash}`)

  const { transactionHash: txHash } = await userOp.waitForTxHash()
  console.log(`Transaction hash: ${txHash}`)
}

main()
