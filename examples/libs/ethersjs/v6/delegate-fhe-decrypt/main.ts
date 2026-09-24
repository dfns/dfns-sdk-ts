import { DfnsWallet } from '@dfns/lib-ethersjs6'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import dotenv from 'dotenv'
import { Contract, JsonRpcProvider } from 'ethers'

dotenv.config()

// Zama FHEVM ACL contract, per network — the address differs between chains.
// Verified against zama-ai/fhevm `library-solidity/config/ZamaConfig.sol`.
const ACL_CONTRACTS: Record<number, string> = {
  1: '0xcA2E8f1F656CD25C01F05d0b243Ab1ecd4a8ffb6', // Ethereum Mainnet
  11155111: '0xf0Ffdc93b7E186bC2f8CB3dAA75D86d1930A433D', // Ethereum Sepolia
}

const ACL_ABI = [
  'function delegateForUserDecryption(address delegate, address contractAddress, uint64 expirationDate)',
  'function getUserDecryptionDelegationExpirationDate(address delegator, address delegate, address contractAddress) view returns (uint64)',
]

const MAX_UINT64 = 2n ** 64n - 1n

const provider = new JsonRpcProvider(process.env.ETHEREUM_NODE_URL!)

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
  const wallet = (await initDfnsWallet(process.env.ETHEREUM_WALLET_ID!)).connect(provider)
  const walletAddress = await wallet.getAddress()

  // Pick the ACL contract for the network the provider is actually connected to.
  const { chainId } = await provider.getNetwork()
  const aclContract = ACL_CONTRACTS[Number(chainId)]
  if (!aclContract) {
    throw new Error(
      `No Zama FHEVM ACL configured for chainId ${chainId}. ` +
        `Supported networks: Ethereum Mainnet (1) and Ethereum Sepolia (11155111).`
    )
  }

  const delegateeAddress = process.env.ERC7984_DELEGATEE_ADDRESS!
  const erc7984Contract = process.env.ERC7984_CONTRACT_ADDRESS!

 // Expiration: permanent (max uint64)
 const expirationDate = MAX_UINT64

  console.log(`Wallet:     ${walletAddress}`)
  console.log(`Delegatee:  ${delegateeAddress}`)
  console.log(`Contract:   ${erc7984Contract}`)
  console.log(`ACL:        ${aclContract} (chainId ${chainId})`)
  console.log(`Expiration: ${expirationDate === MAX_UINT64 ? 'permanent': new Date((expirationDate * 1000n).toString()).toISOString()}`)
  console.log()

  const acl = new Contract(aclContract, ACL_ABI, wallet)

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