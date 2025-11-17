import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import { DfnsWallet } from '@dfns/lib-starknet'
import { Account, RpcProvider, Call } from 'starknet'

import * as dotenv from 'dotenv'

dotenv.config()

const initDfnsWallet = async (walletId: string) => {
  const signer = new AsymmetricKeySigner({
    credId: process.env.DFNS_CRED_ID!,
    privateKey: process.env.DFNS_PRIVATE_KEY!,
  })

  const dfnsClient = new DfnsApiClient({
    authToken: process.env.DFNS_AUTH_TOKEN!,
    baseUrl: process.env.DFNS_API_URL!,
    signer,
  })

  return DfnsWallet.init({
    walletId,
    dfnsClient,
  })
}

async function main() {
  const starknetWalletId = process.env.STARKNET_WALLET_ID!

  const senderWallet = await initDfnsWallet(starknetWalletId)
  console.log('Starknet wallet public key: %s', await senderWallet.getPubKey())

  // Initialize provider (using Sepolia testnet)
  const provider = new RpcProvider({ 
    nodeUrl: 'https://free-rpc.nethermind.io/sepolia-juno'
  })

  const accountAddress = process.env.ACCOUNT_ADDRESS!
  const recipientAddress = process.env.RECIPIENT_ADDRESS!
  
  // Create account instance with Dfns signer
  const account = new Account(provider, accountAddress, senderWallet)

  const amount = '1000000000000000' // 0.001 ETH in wei
  const ethTokenAddress = '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7'
  console.log(`transferring ${amount} wei from wallet ${accountAddress} to ${recipientAddress}`)

  console.log('creating transfer transaction...')
  const transferCall: Call = {
    contractAddress: ethTokenAddress,
    entrypoint: 'transfer',
    calldata: [recipientAddress, amount, '0']
  }

  console.log('signing and executing transfer transaction...')
  const result = await account.execute([transferCall])

  console.log(`transaction executed. txHash: ${result.transaction_hash}`)
  
  const receipt = await provider.waitForTransaction(result.transaction_hash)
  console.log(`transaction confirmed in block: ${receipt.block_number}`)
}

main()