import { DfnsApiClient, DfnsDelegatedApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'

export const signer = new AsymmetricKeySigner({
  appOrigin: process.env.DFNS_APP_ORIGIN!,
  credId: process.env.DFNS_CRED_ID!,
  privateKey: process.env.DFNS_PRIVATE_KEY!.replace(/\\n/g, '\n'),
})

export const dfns = new DfnsApiClient({
  appId: process.env.DFNS_APP_ID!,
  baseUrl: process.env.DFNS_API_URL!,
  authToken: process.env.DFNS_AUTH_TOKEN!,
  signer,
})

export const getDfnsDelegatedClient = (endUserAuthToken: string) =>
  new DfnsDelegatedApiClient({
    appId: process.env.DFNS_APP_ID!,
    baseUrl: process.env.DFNS_API_URL!,
    authToken: endUserAuthToken,
  })
