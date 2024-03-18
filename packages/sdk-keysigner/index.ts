import * as crypto from 'crypto'
import { CredentialSigner, KeyAssertion, UserRegistrationChallenge, KeyAttestation } from '@dfns/sdk'
import { toBase64Url, toHex, exportPublicKeyInPemFormatBrowser, rawSignatureToAns1, generateRandom } from '@dfns/sdk/utils'

export class AsymmetricKeySigner implements CredentialSigner<KeyAssertion> {
  constructor(
    private options: {
      privateKey: string
      credId: string
      appOrigin: string
      crossOrigin?: boolean
      algorithm?: string
    }
  ) { }

  async sign(challenge: string): Promise<KeyAssertion> {
    const clientData = Buffer.from(
      JSON.stringify({
        type: 'key.get',
        challenge,
        origin: this.options.appOrigin,
        crossOrigin: this.options.crossOrigin ?? false,
      })
    )

    return {
      kind: 'Key',
      credentialAssertion: {
        credId: this.options.credId,
        clientData: toBase64Url(clientData),
        signature: toBase64Url(crypto.sign(this.options.algorithm || undefined, clientData, this.options.privateKey)),
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
      crossOrigin?: boolean
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
        crossOrigin: this.options.crossOrigin ?? false,
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

  async sign(challenge: string): Promise<KeyAssertion> {
    const credId = this.options.credId
    if (credId === undefined || credId === '') {
      throw new Error('credId is needed to sign')
    }
    const clientData = JSON.stringify({
      type: 'key.get',
      challenge,
      origin: this.options.appOrigin,
      crossOrigin: this.options.crossOrigin ?? false,
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
