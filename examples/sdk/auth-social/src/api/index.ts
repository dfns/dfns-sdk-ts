import { WebAuthnSigner } from '@dfns/sdk-browser'
import { DfnsApiClient } from '@dfns/sdk'

export const dfnsApi = (authToken: string | undefined): DfnsApiClient => {
  const signer = new WebAuthnSigner()
  return new DfnsApiClient({
    appId: process.env.REACT_APP_DFNS_APP_ID!,
    authToken: authToken,
    baseUrl: process.env.REACT_APP_DFNS_API_URL!,
    signer,
  })
}
