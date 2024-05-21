import { WebAuthnSigner } from '@dfns/sdk-browser'
import { DfnsApiClient } from '@dfns/sdk'

const DFNS_AUTH_TOKEN = 'DFNS_AUTH_TOKEN'

export const dfnsApi = (): DfnsApiClient => {
  const signer = new WebAuthnSigner()
  return new DfnsApiClient({
    appId: process.env.REACT_APP_DFNS_APP_ID!,
    authToken: getAuthToken(),
    baseUrl: process.env.REACT_APP_DFNS_API_URL!,
    signer,
  })
}

export const setAuthToken = (authToken: string) => {
  localStorage.setItem(DFNS_AUTH_TOKEN, authToken)
}

const getAuthToken = () => {
  return localStorage.getItem(DFNS_AUTH_TOKEN) ?? undefined
}
