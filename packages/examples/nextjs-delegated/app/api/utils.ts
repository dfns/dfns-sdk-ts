import { DfnsApiClient, DfnsDelegatedApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'

export const signer = new AsymmetricKeySigner({
  appOrigin: process.env.DFNS_APPLICATION_ORIGIN!,
  credId: process.env.DFNS_SERVICE_ACCOUNT_CREDENTIAL_ID!,
  privateKey: process.env.DFNS_SERVICE_ACCOUNT_PRIVATE_KEY!,
})

export const dfns = new DfnsApiClient({
  appId: process.env.DFNS_APPLICATION_ID!,
  baseUrl: process.env.DFNS_API_BASE_URL!,
  authToken: process.env.DFNS_SERVICE_ACCOUNT_TOKEN!,
  signer,
})

export const getDfnsDelegatedClient = (endUserAuthToken: string) =>
  new DfnsDelegatedApiClient({
    appId: process.env.DFNS_APPLICATION_ID!,
    baseUrl: process.env.DFNS_API_BASE_URL!,
    authToken: endUserAuthToken,
  })
