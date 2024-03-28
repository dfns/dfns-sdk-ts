import { DfnsApiClient } from '@dfns/sdk'
import { newWalletExportContext } from '@dfns/sdk-keyexport-utils'
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
  const walletId = process.env.WALLET_ID_TO_EXPORT!

  // Creates an "export context". Under the hood, it creates an encryption key to start wallet export,
  // so that the wallet private key shares are transmitted back to you securely.
  const ctx = newWalletExportContext()

  // API call to export wallet
  const exportedSigningKey = await dfnsApi.wallets.exportWallet({
    walletId,
    body: ctx.getConf(),
  })

  // Decrypt and reconstruct wallet private key, from encrypted wallet key shares.
  const exportedWalletPrivateKey = ctx.recoverSecretKey(exportedSigningKey)

  console.log('🥳 Exported wallet private key:', Buffer.from(exportedWalletPrivateKey).toString('hex'))
}

main()
