import { WebAuthn } from '@dfns/sdk-webauthn'
import { DfnsApiClient, DfnsAuthenticator } from '@dfns/sdk'

export const authApi = (): DfnsAuthenticator => {
  const signer = new WebAuthn({ rpId: process.env.REACT_APP_DFNS_WEBAUTHN_RPID! })
  return new DfnsAuthenticator({
    appId: process.env.REACT_APP_DFNS_APP_ID!,
    baseUrl: process.env.REACT_APP_DFNS_API_URL!,
    signer,
  })
}

export const dfnsApi = (): DfnsApiClient => {
  const signer = new WebAuthn({ rpId: process.env.REACT_APP_DFNS_WEBAUTHN_RPID! })
  return new DfnsApiClient({
    appId: process.env.REACT_APP_DFNS_APP_ID!,
    authToken: localStorage.getItem('DFNS_AUTH_TOKEN') ?? undefined,
    baseUrl: process.env.REACT_APP_DFNS_API_URL!,
    signer,
  })
}
