import { WebAuthn } from '@dfns/sdk-webauthn'

const asUrl = (path: string): URL => new URL(path, process.env.REACT_APP_API_URL!)

const get = async (path: string): Promise<any> => {
  const res = await fetch(asUrl(path), {
    method: 'GET',
    credentials: 'include',
  })
  return res.json()
}

const post = async (path: string, body: any): Promise<any> => {
  const res = await fetch(asUrl(path), {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'content-type': 'application/json',
    },
    credentials: 'include',
  })
  return res.status !== 204 ? res.json() : undefined
}

export const api = {
  async login(username: string, password: string): Promise<{ username: string }> {
    return post('/login', { username, password })
  },

  async register(username: string, password: string): Promise<{ username: string }> {
    const challenge = await post('/register/init', { username, password })

    const webauthn = new WebAuthn({ rpId: process.env.REACT_APP_DFNS_WEBAUTHN_RPID! })
    const attestation = await webauthn.create(challenge)

    return post('/register/complete', {
      signedChallenge: { firstFactorCredential: attestation },
      temporaryAuthenticationToken: challenge.temporaryAuthenticationToken,
    })
  },

  async listWallets() {
    return get('/wallets/list')
  },

  async createWallet(network: string) {
    const {
      requestBody,
      challenge: { challenge, challengeIdentifier, allowCredentials },
    } = await post('/wallets/new/init', { network })

    const webauthn = new WebAuthn({ rpId: process.env.REACT_APP_DFNS_WEBAUTHN_RPID! })
    const assertion = await webauthn.sign(challenge, allowCredentials)

    await post('/wallets/new/complete', {
      requestBody,
      signedChallenge: { challengeIdentifier, firstFactor: assertion },
    })
  },
}
