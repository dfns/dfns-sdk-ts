import { DfnsWallet } from '@dfns/lib-ethersjs6'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import dotenv from 'dotenv'
import { Contract, JsonRpcProvider } from 'ethers'

dotenv.config()

// Zama ACL contract (same address on Sepolia and Mainnet)
const ACL_CONTRACT = '0xf0Ffdc93b7E186bC2f8CB3dAA75D86d1930A433D'

const ACL_ABI = [
  'function delegateForUserDecryption(address delegate, address contractAddress, uint64 expirationDate)',
  'function getUserDecryptionDelegationExpirationDate(address delegator, address delegate, address contractAddress) view returns (uint64)',
]

const MAX_UINT64 = 2n ** 64n - 1n

const sepolia = new JsonRpcProvider(process.env.ETHEREUM_NODE_URL!)

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
  const wallet = (await initDfnsWallet(process.env.ETHEREUM_WALLET_ID!)).connect(sepolia)
  const walletAddress = await wallet.getAddress()

  const delegateeAddress = process.env.ERC7984_DELEGATEE_ADDRESS!
  const erc7984Contract = process.env.ERC7984_CONTRACT_ADDRESS!

 // Expiration: permanent (max uint64)
 const expirationDate = MAX_UINT64

  console.log(`Wallet:     ${walletAddress}`)
  console.log(`Delegatee:  ${delegateeAddress}`)
  console.log(`Contract:   ${erc7984Contract}`)
  console.log(`ACL:        ${ACL_CONTRACT}`)
  console.log(`Expiration: ${expirationDate === MAX_UINT64 ? 'permanent': new Date((expirationDate * 1000n).toString()).toISOString()}`)
  console.log()

  const acl = new Contract(ACL_CONTRACT, ACL_ABI, wallet)

  // Check if delegation already exists
  const existing = await acl.getUserDecryptionDelegationExpirationDate(walletAddress, delegateeAddress, erc7984Contract)

  if (existing > 0n) {
    const display = existing === MAX_UINT64 ? 'permanent' : new Date(Number(existing) * 1000).toISOString()
    console.log(`Delegation already active (expires: ${display})`)
    return
  }

  // Delegate decrypt rights
  console.log('Delegating FHE decrypt rights...')
  const tx = await acl.delegateForUserDecryption(delegateeAddress, erc7984Contract, expirationDate)
  console.log(`Transaction sent: ${tx.hash}`)

  const receipt = await tx.wait()
  console.log(`Confirmed in block ${receipt.blockNumber}`)
}

main()