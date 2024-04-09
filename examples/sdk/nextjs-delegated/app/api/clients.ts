import { DfnsApiClient, DfnsDelegatedApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'

export const apiClient = (authToken?: string) => {
  const signer = new AsymmetricKeySigner({
    credId: process.env.DFNS_CRED_ID!,
    privateKey: process.env.DFNS_PRIVATE_KEY!.replace(/\\n/g, '\n'),
  })

  return new DfnsApiClient({
    appId: process.env.DFNS_APP_ID!,
    authToken: authToken ?? process.env.DFNS_AUTH_TOKEN!,
    baseUrl: process.env.DFNS_API_URL!,
    signer,
  })
}

export const delegatedClient = (authToken: string) => {
  return new DfnsDelegatedApiClient({
    appId: process.env.DFNS_APP_ID!,
    authToken,
    baseUrl: process.env.DFNS_API_URL!,
  })
}
