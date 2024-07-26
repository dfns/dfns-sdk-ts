import { splitPrivateKeyForSigners } from '@dfns/sdk-keyimport-utils-nodejs'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import crypto from 'crypto'
import dotenv from 'dotenv'

dotenv.config()

const requestSigner = new AsymmetricKeySigner({
  credId: process.env.DFNS_CRED_ID!,
  privateKey: process.env.DFNS_PRIVATE_KEY!,
})

const dfnsApi = new DfnsApiClient({
  appId: process.env.DFNS_APP_ID!,
  authToken: process.env.DFNS_AUTH_TOKEN!,
  baseUrl: process.env.DFNS_API_URL!,
  signer: requestSigner,
})

const main = async () => {
  // 1. Get the private key you want to import into Dfns as a wallet. It needs to be as raw bytes array (Buffer here).
  //    Here, as an example, we are generating a random 32-bytes private key (like a key on curve secp256k1 would be)
  const walletPrivateKey = crypto.randomBytes(32)

  // 1.(bis) Another example: the line below showcases taking the private key exported from a Metamask wallet (Metamask exports it as a hex-encoded string)
  // const walletPrivateKey = Buffer.from('e4fd52ad095af0291e9e3a228e55c4efd307ec7861cf22e3542f2330d981d534', 'hex')

  // 2. This makes a call to Dfns API to get the list of "signers" where your private key wallet will be imported into, with their corresponding encryption keys. If you are importing multiple wallets, you don't need to repeat this step, signers info just needs to be fetched once.
  const { clusters } = await dfnsApi.signers.listSigners()

  // 3. This splits the private key into key-shares (one share per signer), and encrypt them with signers encryption keys (only signers at then end of the chain will be able to decrypt and use them)
  const splittedKeyInfo = splitPrivateKeyForSigners({
    privateKey: walletPrivateKey,
    signers: clusters[0].signers, // You should have only 1 signing cluster in the returned clusters.
    keyCurve: 'secp256k1',
  })

  // 4. This makes a call to Dfns API to import encrypted key shares into signers, and create new Dfns wallet.
  const wallet = await dfnsApi.wallets.importWallet({
    body: {
      name: 'My imported wallet',
      network: 'EthereumSepolia',
      ...splittedKeyInfo,
    },
  })

  console.log('🥳 Newly imported wallet:', wallet)
}

main()
