import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import { DfnsWallet } from '@dfns/lib-starknet'
import { RpcProvider, hash, Account, CallData, stark } from 'starknet'

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

  // OpenZeppelin Account class hash (v0.8.1 on Sepolia)
  const OZ_ACCOUNT_CLASS_HASH = '0x061dac032f228abdf9c2ec0d0336610cbc3abf7b9b8b65a8f17d99c6f4dd8b4e'
  
  // Generate a random salt for the account deployment
  const salt = stark.randomAddress()
  console.log('using deployment salt: %s', salt)
  
  // Calculate constructor calldata
  const publicKey = await senderWallet.getPubKey()
  const constructorCalldata = CallData.compile({
    public_key: publicKey
  })
  
  // Calculate the future account address
  const accountAddress = hash.calculateContractAddressFromHash(
    salt,
    OZ_ACCOUNT_CLASS_HASH,
    constructorCalldata,
    0 // deployer address (0 for deploy_account)
  )
  
  console.log('calculated account address: %s', accountAddress)
  
  try {
    // Check if account is already deployed
    const accountCode = await provider.getClassHashAt(accountAddress)
    
    if (accountCode && accountCode !== '0x0') {
      console.log('account already deployed at: %s', accountAddress)
      return
    }
  } catch (error) {
    // Account doesn't exist yet, which is expected for new deployments
    console.log('account not found, proceeding with deployment...')
  }
  
  // Create account instance for deployment
  const account = new Account(provider, accountAddress, senderWallet)
  
  const deployAccountPayload = {
    classHash: OZ_ACCOUNT_CLASS_HASH,
    constructorCalldata,
    addressSalt: salt,
  }
  
  console.log('deploying account contract...')
  const deployResult = await account.deployAccount(deployAccountPayload)
  
  console.log(`account deployment executed. txHash: ${deployResult.transaction_hash}`)
  
  const receipt = await provider.waitForTransaction(deployResult.transaction_hash)
  console.log(`account deployed successfully in block: ${receipt.block_number}`)
  console.log(`final account address: ${accountAddress}`)
}

main()