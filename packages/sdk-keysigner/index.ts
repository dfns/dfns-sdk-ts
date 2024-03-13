import * as crypto from 'crypto'
import { CredentialSigner, KeyAssertion, UserRegistrationChallenge, KeyAttestation } from '@dfns/sdk'
import { toBase64Url, toBase64 } from '@dfns/sdk/utils'

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
      credId: string
      appOrigin: string
      crossOrigin?: boolean
    }
  ) { }


  minimizeBigInt = (value: Uint8Array): Uint8Array => {
    const minValue = [0, ...value]
    for (let i = 0; i < minValue.length; ++i) {
      if (minValue[i] === 0) {
        continue
      }
      if (minValue[i] > 0x7f) {
        return new Uint8Array(minValue.slice(i - 1))
      }
      return new Uint8Array(minValue.slice(i))
    }
    return new Uint8Array([0])
  }

  rawSignatureToAns1 = (rawSignature: Uint8Array): Uint8Array => {
    const r = rawSignature.slice(0, 32)
    const s = rawSignature.slice(32)

    const minR = this.minimizeBigInt(r)
    const minS = this.minimizeBigInt(s)

    return new Uint8Array([
      0x30,
      minR.length + minS.length + 4,
      0x02,
      minR.length,
      ...minR,
      0x02,
      minS.length,
      ...minS
    ])
  }

  toHex = (buffer: ArrayBuffer): string => {
    const view = new Uint8Array(buffer)
    let hexString = ""
    for (const byte of view) {
      const hexByte = byte.toString(16)
      hexString += hexByte.padStart(2, "0")
    }
    return hexString.toLowerCase()
  }

  exportPublicKeyInPemFormat = async (key: CryptoKeyPair): Promise<string> => {
    const exported = await crypto.subtle.exportKey('spki', key.publicKey)
    const pem = `-----BEGIN PUBLIC KEY-----\n${toBase64(exported)}\n-----END PUBLIC KEY-----`
    return pem
  }

  async create(challenge: UserRegistrationChallenge): Promise<KeyAttestation> {
    const publicKeyPem = await this.exportPublicKeyInPemFormat(this.options.keyPair)
    const clientData = JSON.stringify({
        type: 'key.create',
        challenge: challenge.challenge,
        origin: this.options.appOrigin,
        crossOrigin: this.options.crossOrigin ?? false,
      })
    const clientDataHash = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(clientData))
    const clientDataHashHex = this.toHex(clientDataHash)
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
    const signature = this.rawSignatureToAns1(new Uint8Array(rawSignature))
    const attestationData = JSON.stringify({
      publicKey: publicKeyPem,
      signature: this.toHex(signature) 
    })

    return {
      credentialKind: 'Key',
      credentialInfo: {
        credId: this.options.credId,
        clientData: toBase64Url(clientData),
        attestationData: toBase64Url(attestationData),
      },
    }
  }

  async sign(challenge: string): Promise<KeyAssertion> {
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

    const signature = this.rawSignatureToAns1(new Uint8Array(rawSignature))

    return {
      kind: 'Key',
      credentialAssertion: {
        credId: this.options.credId,
        clientData: toBase64Url(clientData),
        signature: toBase64Url(Buffer.from(signature)),
      },
    }
  }
}
