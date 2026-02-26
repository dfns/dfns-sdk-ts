import { DfnsWallet } from '@dfns/lib-starknet'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import { Account, RpcProvider } from 'starknet'
import dotenv from 'dotenv'

const addHexPrefix = (hex: string): string => {
  return hex.startsWith('0x') ? hex : `0x${hex}`
}

const stripHexPrefix = (hex: string): string => {
  return hex.replace(/^0x/, '')
}

const padHexString = (input: string, length: number): string => {
  return addHexPrefix(stripHexPrefix(input).padStart(length, '0'))
}

dotenv.config()

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
  const wallet = await initDfnsWallet(process.env.STARKNET_WALLET_ID!)
  console.log(`Starknet wallet address: ${wallet.address}`)

  const provider = new RpcProvider({ nodeUrl: process.env.STARKNET_NODE_URL! })
  const account = new Account({
    provider,
    address: wallet.address!,
    signer: wallet
  })

  const STRK_CONTRACT =
'0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d'
  const toAddress =
'0x0147ab9d3247fa3a7db3921e45b2a72b4739cce23100e79826f3a7e3bcdae0d3'
  const amount = '1'

  console.log(`Transferring ${amount} STR (min decimals) to ${toAddress}`)

  const result = await account.execute({
    contractAddress: STRK_CONTRACT,
    entrypoint: 'transfer',
    calldata: [toAddress, amount, '0'],
  })

  // Starknet can return non-padded hash... we pad it to be consistent with dfns backend
  const txHash = padHexString(result.transaction_hash, 64)

  console.log(`Transaction hash: ${txHash}`)
  await provider.waitForTransaction(txHash)
  console.log('Transaction confirmed')
}

main()