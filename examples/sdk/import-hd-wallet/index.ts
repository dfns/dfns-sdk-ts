import { splitPrivateKeyForSigners } from '@dfns/sdk-keyimport-utils-nodejs'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import bs58check from 'bs58check'
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
  // Get the extended private key you want to import into Dfns as a wallet in xprv format. The key will be parsed
  // and the private key and chain code extracted.

  const xprv = 'xprv9s21ZrQH143K31xY...'
  const extendedKey = bs58check.decode(xprv)
  if (extendedKey.length !== 78) {
    throw Error('invalid xprv')
  }

  const chainCode = Buffer.from(extendedKey.subarray(13, 45))
  const privateKey = Buffer.from(extendedKey.subarray(46))

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

  const masterKeyInfo = splitPrivateKeyForSigners({
    signers: clusters[0].signers,
    keyScheme: 'ECDSA',
    keyCurve: 'secp256k1',
    privateKey,
    chainCode,
    masterKey: true, // must set the master key indicator to true
    secretScalar: false, // for EdDSA, you may have a secret scalar instead of the private key
  })

  // Step 4.
  //
  // Import your private key as the master key.

  const masterKey = await dfnsApi.keys.importKey({
    body: masterKeyInfo,
  })

  console.log('🥳 Newly imported master key:', masterKey)

  // Step 5.
  //
  // Create derived wallets using the master key from the previous step

  const wallet = await dfnsApi.wallets.createWallet({
    body: {
      name: 'My imported wallet',
      network: 'EthereumSepolia',
      signingKey: {
        deriveFrom: {
          keyId: masterKey.id,
          path: 'm/44/1/0/0/0',
        },
      },
    },
  })

  console.log('🥳 Newly imported derived wallet:', wallet)
}

main()
