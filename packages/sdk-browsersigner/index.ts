import { 
  AllowCredential, 
  CredentialSigner, 
  CredentialStore,
  Fido2Assertion,
  Fido2Attestation,
  KeyAssertion, 
  KeyAttestation, 
  UserRegistrationChallenge, 
} from '@dfns/sdk'
import { 
  exportPublicKeyInPemFormatBrowser, 
  fromBase64Url,
  generateRandom, 
  toBase64Url, 
  rawSignatureToAns1, 
  toHex, 
} from '@dfns/sdk/utils'
import { Buffer } from 'buffer'

export const DEFAULT_WAIT_TIMEOUT = 60000

export class WebAuthn implements CredentialSigner<Fido2Assertion>, CredentialStore<Fido2Attestation> {
  constructor(
    private options: {
      rpId: string
      timeout?: number
    }
  ) { }

  async sign(
    challenge: string,
    allowCredentials: { key: AllowCredential[]; webauthn: AllowCredential[] }
  ): Promise<Fido2Assertion> {
    const credential = (await navigator.credentials.get({
      publicKey: {
        challenge: Buffer.from(challenge),
        allowCredentials: allowCredentials.webauthn.map(({ id, type, transports }) => ({
          id: fromBase64Url(id),
          type,
          transports: transports ?? [],
        })),
        rpId: this.options.rpId,
        userVerification: 'required',
        timeout: this.options.timeout ?? DEFAULT_WAIT_TIMEOUT,
      },
    })) as PublicKeyCredential | null

    if (!credential) {
      throw new Error('Failed to sign with WebAuthn credential')
    }

    const assertion = <AuthenticatorAssertionResponse>credential.response

    return {
      kind: 'Fido2',
      credentialAssertion: {
        credId: credential.id,
        clientData: toBase64Url(Buffer.from(assertion.clientDataJSON)),
        authenticatorData: toBase64Url(Buffer.from(assertion.authenticatorData)),
        signature: toBase64Url(Buffer.from(assertion.signature)),
        userHandle: assertion.userHandle ? toBase64Url(Buffer.from(assertion.userHandle)) : '',
      },
    }
  }

  async create(challenge: UserRegistrationChallenge): Promise<Fido2Attestation> {
    const options: CredentialCreationOptions = {
      publicKey: {
        challenge: Buffer.from(challenge.challenge),
        pubKeyCredParams: challenge.pubKeyCredParams,
        rp: challenge.rp,
        user: {
          displayName: challenge.user.displayName,
          id: Buffer.from(challenge.user.id),
          name: challenge.user.name,
        },
        attestation: challenge.attestation,
        excludeCredentials: challenge.excludeCredentials.map((cred) => ({
          id: fromBase64Url(cred.id),
          type: cred.type,
        })),
        authenticatorSelection: challenge.authenticatorSelection,
        timeout: this.options.timeout ?? DEFAULT_WAIT_TIMEOUT,
      },
    }

    const response = await navigator.credentials.create(options)

    if (response === null) {
      throw Error(`Failed to create and sign with WebAuthn credential`)
    }

    const credential = response as PublicKeyCredential
    const attestation = <AuthenticatorAttestationResponse>credential.response

    return {
      credentialKind: 'Fido2',
      credentialInfo: {
        credId: credential.id,
        attestationData: toBase64Url(Buffer.from(attestation.attestationObject)),
        clientData: toBase64Url(Buffer.from(attestation.clientDataJSON)),
      },
    }
  }
}

export class BrowserKeySigner implements CredentialSigner<KeyAssertion> {
  constructor(
    private options: {
      keyPair: CryptoKeyPair
      credId?: string
      appOrigin: string
    }
  ) { }

  async create(challenge: UserRegistrationChallenge): Promise<KeyAttestation> {
    let credId = this.options.credId
    if (credId === undefined || credId === '') {
      credId = toBase64Url(Buffer.from(generateRandom(32)))
      this.options.credId = credId
    }
    const publicKeyPem = await exportPublicKeyInPemFormatBrowser(this.options.keyPair)
    const clientData = JSON.stringify({
        type: 'key.create',
        challenge: challenge.challenge,
        origin: this.options.appOrigin,
      })
    const clientDataHash = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(clientData))
    const clientDataHashHex = toHex(clientDataHash)
    const credInfoFingerprint = JSON.stringify({
      clientDataHash: clientDataHashHex,
      publicKey: publicKeyPem,
    })
    let rawSignature: ArrayBuffer
    const algorithm = this.options.keyPair.privateKey.algorithm.name
    if (algorithm == 'ECDSA') {
      rawSignature = await crypto.subtle.sign(
        { name: 'ECDSA', hash: { name: 'SHA-256' } },
        this.options.keyPair.privateKey,
        new TextEncoder().encode(credInfoFingerprint)
      )
    } else {
      throw new Error(`${algorithm} is not supported`)
    }
    const signature = rawSignatureToAns1(new Uint8Array(rawSignature))
    const attestationData = JSON.stringify({
      publicKey: publicKeyPem,
      signature: toHex(signature) 
    })

    return {
      credentialKind: 'Key',
      credentialInfo: {
        credId: credId,
        clientData: toBase64Url(clientData),
        attestationData: toBase64Url(attestationData),
      },
    }
  }

  async sign(
    challenge: string,
    allowCredentials: { key: AllowCredential[]; webauthn: AllowCredential[] }
    ): Promise<KeyAssertion> {
      const credId = this.options.credId
      if (credId === undefined || credId === '') {
        throw new Error('credId is needed to sign')
      }
      const allowedCredId = allowCredentials.key.map(cred => cred.id)
      if (!allowedCredId.includes(credId)) {
        throw new Error(`CredId ${credId} does not exist for this account: ${allowedCredId}`)
      }
      const clientData = JSON.stringify({
        type: 'key.get',
        challenge,
        origin: this.options.appOrigin,
      })

      let rawSignature: ArrayBuffer

      const algorithm = this.options.keyPair.privateKey.algorithm.name
      if (algorithm == 'ECDSA') {
        rawSignature = await crypto.subtle.sign(
          { name: 'ECDSA', hash: { name: 'SHA-256' } },
          this.options.keyPair.privateKey,
          new TextEncoder().encode(clientData)
        )
      } else {
        throw new Error(`${algorithm} is not supported`)
      }

      const signature = rawSignatureToAns1(new Uint8Array(rawSignature))

      return {
        kind: 'Key',
        credentialAssertion: {
          credId: this.options.credId ?? '',
          clientData: toBase64Url(clientData),
          signature: toBase64Url(Buffer.from(signature)),
        },
      }
  }
}
