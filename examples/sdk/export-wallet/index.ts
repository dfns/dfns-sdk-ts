import { DfnsApiClient } from '@dfns/sdk'
import { newWalletExportContext } from '@dfns/sdk-keyexport-utils-nodejs'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
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
  // 1. Update the wallet ID you want to export
  const WALLET_ID_TO_EXPORT = 'wa-xxx-xxx-xxxxxx'

  // 2. This creates an "export context". Under the hood, it creates an encryption key to start wallet export, so that the wallet private key shares are transmitted back to you securely.
  const ctx = newWalletExportContext()

  // 3. This is the API call exporting all key shares (encrypted) of the wallet
  try {
    const exportedSigningKey = await dfnsApi.wallets.exportWallet({
      walletId: WALLET_ID_TO_EXPORT,
      body: ctx.getConf(),
    })

    // 4. This decrypts the keyshares and reconstruct wallet private key, from encrypted wallet key shares.
    const exportedWalletPrivateKey = ctx.recoverSecretKey(exportedSigningKey)

    console.log('🥳 Exported wallet private key:', Buffer.from(exportedWalletPrivateKey).toString('hex'))
  } catch (error) {
    console.log((error as any).toString())
  }
}

main()
