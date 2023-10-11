import { splitPrivateKeyForSigners } from '@dfns/sdk-keyimport-utils'
import crypto from 'crypto'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import dotenv from 'dotenv'
import { BlockchainNetwork, KeyScheme } from '@dfns/sdk/codegen/datamodel/Wallets'

dotenv.config()

const requestSigner = new AsymmetricKeySigner({
  privateKey: process.env.DFNS_PRIVATE_KEY!,
  credId: process.env.DFNS_CRED_ID!,
  appOrigin: process.env.DFNS_APP_ORIGIN!,
})

const dfnsApi = new DfnsApiClient({
  appId: process.env.DFNS_APP_ID!,
  authToken: process.env.DFNS_AUTH_TOKEN!,
  baseUrl: process.env.DFNS_API_URL!,
  signer: requestSigner,
})

const main = async () => {
  // Get the private key of the wallet you want to import into Dfns, as raw bytes array (Buffer here)
  // For now, the wallet-import feature only supports keys from elliptic curve secp256k1 (which are 32 bytes).
  // Here, for the example, we are generating a random 32-bytes private key.
  const walletPrivateKey = crypto.randomBytes(32)

  // The line commented below would be another example, taking the private key exported from a Metamask wallet (Metamask exports it as a hex-encoded string)
  // const walletPrivateKey = Buffer.from('e4fd52ad095af0291e9e3a228e55c4efd307ec7861cf22e3542f2330d981d534', 'hex')

  // API call to get the list of "signers" where your private key wallet will be imported into, with their corresponding encryption keys.
  const { clusters } = await dfnsApi.signers.listSigners()

  // This splits the private key into key-shares (one share per signer), and encrypt them with signers encryption keys (only signers at then end of the chain will be able to decrypt and use them)
  const splittedKeyInfo = splitPrivateKeyForSigners({
    privateKey: walletPrivateKey,
    signers: clusters[0].signers, // You should have only 1 signing cluster in the returned clusters.
    keyScheme: KeyScheme.ECDSA,
  })

  // API call to import encrypted key shares into signers, thus creating new Dfns wallet.
  const wallet = await dfnsApi.wallets.importWallet({
    body: {
      name: 'My imported wallet',
      network: BlockchainNetwork.EthereumSepolia,
      ...splittedKeyInfo,
    },
  })

  console.log('🥳 Newly imported wallet:', wallet)
}

main()
