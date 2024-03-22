import { Fido2Assertion, Fido2Attestation, KeyAssertion, KeyAttestation } from '@dfns/sdk'
import { WebAuthn } from '@dfns/sdk-webauthn'
import { BrowserKeySigner } from '@dfns/sdk-browsersigner'

const asUrl = (path: string): URL => new URL(path, process.env.REACT_APP_API_URL!)

// const get = async (path: string, token?: string): Promise<any> => {
//   let options: RequestInit = {
//     method: 'GET',
//     credentials: 'include'
//   }
//   if (token !== undefined) {
//     options.headers = { 'Authorization': token }
//   }
//   const res = await fetch(asUrl(path), options)
//   return res.json()
// }

const post = async (path: string, body: any, token?: string): Promise<any> => {
  let options: RequestInit = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'content-type': 'application/json',
    },
    credentials: 'include',
  }
  if (token !== undefined) {
    options.headers = { 'Authorization': token }
  }
  const res = await fetch(asUrl(path), options)
  return res.status !== 204 ? res.json() : undefined
}

export const api = {
  async login(username: string, password: string): Promise<{ username: string, token: string }> {
    return post('/login', { username, password })
  },

  async register(username: string, password: string, keyPair?: CryptoKeyPair): Promise<{ username: string }> {
    const challenge = await post('/register/init', { 
      appId: process.env.REACT_APP_DFNS_APP_ID!, 
      appOrigin: process.env.REACT_APP_DFNS_APP_ORIGIN!, 
      username, 
      password 
    })

    let attestation: Fido2Attestation | KeyAttestation
    // If keyPair is not set then webauthn is used
    if (keyPair === undefined) {
      const webauthn = new WebAuthn({ rpId: process.env.REACT_APP_DFNS_WEBAUTHN_RPID! })
      attestation = await webauthn.create(challenge)
    }
    else {
      const browserKey = new BrowserKeySigner({
        keyPair: keyPair,
        appOrigin: process.env.REACT_APP_DFNS_APP_ORIGIN!,
      })
      attestation = await browserKey.create(challenge)
    }

    return post('/register/complete', {
      appId: process.env.REACT_APP_DFNS_APP_ID!, 
      signedChallenge: { firstFactorCredential: attestation },
      temporaryAuthenticationToken: challenge.temporaryAuthenticationToken,
    })
  },

  async listWallets(dfnsToken?: string) {
    return post('/wallets/list', {
      appId: process.env.REACT_APP_DFNS_APP_ID!,
      authToken: dfnsToken
    })
  },

  async createWallet(network: string, dfnsToken?: string, keyPair?: CryptoKeyPair) {
    const {
      requestBody,
      challenge: { challenge, challengeIdentifier, allowCredentials },
    } = await post('/wallets/new/init', {
      appId: process.env.REACT_APP_DFNS_APP_ID!,
      authToken: dfnsToken, 
      network: network 
    })

    let assertion: Fido2Assertion | KeyAssertion
    // If keypair is undefined then webauthn is used
    if (keyPair === undefined) {
      const webauthn = new WebAuthn({ rpId: process.env.REACT_APP_DFNS_WEBAUTHN_RPID! })
      assertion = await webauthn.sign(challenge, allowCredentials)
    }
    else {
      // Here we retrieve the credId from the init call response
      const credId = allowCredentials.key[0].id 
      const browserKey = new BrowserKeySigner({
        keyPair: keyPair,
        credId: credId,
        appOrigin: process.env.REACT_APP_DFNS_APP_ORIGIN!,
      })
      assertion = await browserKey.sign(challenge, allowCredentials) 
    }

    await post('/wallets/new/complete', {
      appId: process.env.REACT_APP_DFNS_APP_ID!,
      authToken: dfnsToken, 
      requestBody,
      signedChallenge: { challengeIdentifier, firstFactor: assertion },
    })
  },
}
