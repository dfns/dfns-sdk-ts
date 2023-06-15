import { WebauthnSigner } from '@dfns/sdk-webauthn-signer'

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
  return res.json()
}

export const api = {
  async login(username: string, password: string): Promise<{ username: string }> {
    return post('/login', { username, password })
  },

  async listWallets() {
    return get('/wallets/list')
  },

  async createWallet(network: string) {
    const {
      requestBody,
      challenge: { challenge, challengeIdentifier, allowCredentials },
    } = await post('/wallets/new/init', { network })

    const signer = new WebauthnSigner({ rpId: process.env.REACT_APP_DFNS_WEBAUTHN_RPID! })

    const assertions = await signer.sign(challenge, allowCredentials)

    await post('/wallets/new/complete', { requestBody, signedChallenge: { challengeIdentifier, ...assertions } })
  },
}
