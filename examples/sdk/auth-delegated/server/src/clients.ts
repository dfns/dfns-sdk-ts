import { DfnsApiClient, DfnsDelegatedApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'

export const apiClient = (appId: string, appOrigin: string) => {
  const signer = new AsymmetricKeySigner({
    privateKey: process.env.DFNS_PRIVATE_KEY!,
    credId: process.env.DFNS_CRED_ID!,
    appOrigin,
  })

  return new DfnsApiClient({
    appId,
    authToken: process.env.DFNS_AUTH_TOKEN!,
    baseUrl: process.env.DFNS_API_URL!,
    signer,
  })
}

export const delegatedClient = (appId: string, authToken: string) => {
  return new DfnsDelegatedApiClient({
    appId,
    authToken,
    baseUrl: process.env.DFNS_API_URL!,
  })
}
