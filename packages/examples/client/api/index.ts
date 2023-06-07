import { WebauthnSigner } from '@dfns/sdk-webauthn-signer'
import { DfnsApiClient } from '@dfns/sdk/dfnsApiClient'
import { DfnsAuthenticator } from '@dfns/sdk/dfnsAuthenticator'

export const authApi = (): DfnsAuthenticator => {
  const signer = new WebauthnSigner({ rpId: process.env.NEXT_PUBLIC_DFNS_WEBAUTHN_RPID ?? 'localhost' })
  return new DfnsAuthenticator({
    appId: process.env.NEXT_PUBLIC_DFNS_APP_ID ?? '',
    baseUrl: new URL(process.env.NEXT_PUBLIC_DFNS_API_URL ?? ''),
    signer,
  })
}

export const dfnsApi = (): DfnsApiClient => {
  const signer = new WebauthnSigner({ rpId: process.env.NEXT_PUBLIC_DFNS_WEBAUTHN_RPID ?? 'localhost' })
  return new DfnsApiClient({
    appId: process.env.NEXT_PUBLIC_DFNS_APP_ID ?? '',
    accessToken: localStorage.getItem('DFNS_ACCESS_TOKEN') ?? undefined,
    baseUrl: new URL(process.env.NEXT_PUBLIC_DFNS_API_URL ?? ''),
    signer,
  })
}
