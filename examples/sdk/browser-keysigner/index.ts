import * as crypto from 'crypto'
import { DfnsApiClient } from '@dfns/sdk'
import { BrowserKeySigner } from '@dfns/sdk-keysigner'
import { WebAuthn } from '@dfns/sdk-webauthn'
import dotenv from 'dotenv'

const exportPublicKeyInPemFormat = async (key: CryptoKey) => {
  const exported = await crypto.subtle.exportKey('spki', key)
  const pem = `-----BEGIN PUBLIC KEY-----\n${Buffer.from(exported).toString('base64')}\n-----END PUBLIC KEY-----`
  return pem
}

const main = async () => {
  dotenv.config()

  const webauthnSigner = new WebAuthn({ rpId: process.env.DFNS_APP_RPID! })

  // Need User Login token
  const dfnsApi = new DfnsApiClient({
    appId: process.env.DFNS_APP_ID!,
    authToken: localStorage.getItem('DFNS_AUTH_TOKEN') ?? undefined,
    baseUrl: process.env.DFNS_API_URL!,
    signer: webauthnSigner,
  })

  const keyPair = await crypto.subtle.generateKey(
    { name: 'ECDSA', namedCurve: 'P-256' },
    true,
    ['sign', 'verify']
  )

  const pemPublicKey = await exportPublicKeyInPemFormat(keyPair.publicKey)

  const myPat = await dfnsApi.auth.createPersonalAccessToken({
    body: {
      name: 'mypat',
      publicKey: pemPublicKey,
    },
  })

  const patSigner = new BrowserKeySigner({
    credId: myPat.credId,
    privateKey: keyPair.privateKey,
    appOrigin: process.env.DFNS_APP_ORIGIN!,
  })

  const dfnsPatApi = new DfnsApiClient({
    appId: process.env.DFNS_APP_ID!,
    authToken: myPat.accessToken,
    baseUrl: process.env.DFNS_API_URL!,
    signer: patSigner,
  })

  const wallet = await dfnsPatApi.wallets.createWallet({ body: { network: 'EthereumSepolia' } })
  console.log('New wallet: ', wallet)

  const list = await dfnsPatApi.wallets.listWallets({})
  console.log(`You have ${list.items.length} wallets`)
}

main()