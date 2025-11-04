import { splitPrivateKeyForSigners } from '@dfns/sdk-keyimport-utils-nodejs'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import crypto from 'crypto'
import dotenv from 'dotenv'

dotenv.config()

const dfnsApi = new DfnsApiClient({
  orgId: process.env.DFNS_ORG_ID!,
  authToken: process.env.DFNS_AUTH_TOKEN!,
  baseUrl: process.env.DFNS_API_URL!,
  signer: new AsymmetricKeySigner({
    credId: process.env.DFNS_CRED_ID!,
    privateKey: process.env.DFNS_PRIVATE_KEY!,
  }),
})

const main = async () => {
  // Step 1
  //
  // Get the private key you want to import into Dfns as a wallet. It needs to be as raw bytes array (Buffer here).
  // As an example, we are generating a random 32-bytes private key (like a key on curve secp256k1 would be)
  const privateKey = crypto.randomBytes(32)

  // Instead of a randomly generated one, you can also use an existing key. Uncomment the line below to import a
  // private key you already have, for example, one exported from Metamask as a hex-encoded string

  // const privateKey = Buffer.from('6233d8f92a4c434c243418e45a4b671b8d685d86643f5b84c2cf9d34fc9c426a', 'hex')

  // Step 2
  //
  // Make a call to Dfns API to get the list of "signers" where your private key wallet will be imported into, with
  // their corresponding encryption keys. If you are importing multiple wallets, you don't need to repeat this step,
  // signers info just needs to be fetched once.
  const { clusters } = await dfnsApi.signers.listSigners()

  // Step 3
  //
  // Split the private key locally into key shares, one per signer, and encrypt them with each signer's encryption key.
  // Only the signers will be able to decrypt the key shares during signing. Your complete private key will not leave
  // your machine.
  const keyInfo = splitPrivateKeyForSigners({
    signers: clusters[0].signers, // only 1 signing cluster in the response
    keyScheme: 'ECDSA',
    keyCurve: 'secp256k1',
    privateKey,
  })

  // Step 4.
  //
  // Import and create a wallet with your private key as the signing key.
  const wallet = await dfnsApi.wallets.importWallet({
    body: {
      name: 'My imported wallet',
      network: 'EthereumSepolia',
      ...keyInfo,
    },
  })

  console.log('🥳 Newly imported wallet:', wallet)

  // You can also import an extended key with a chain code. This key can then be used as a master key to derive
  // child keys for HD wallets.

  // const chainCode = Buffer.from('46d3aeb67b4e61ee088f82d6064968fe5fa8231a3d836f780cd27a28fa10febe', 'hex')

  // const masterKeyInfo = splitPrivateKeyForSigners({
  //   signers: clusters[0].signers,
  //   keyScheme: 'ECDSA',
  //   keyCurve: 'secp256k1',
  //   privateKey,
  //   chainCode,
  //   masterKey: true, // must set the master key indicator to true
  // })

  // const masterKey = await dfnsApi.keys.importKey({
  //   body: masterKeyInfo,
  // })

  // console.log('🥳 Newly imported master key:', masterKey)
}

main()
