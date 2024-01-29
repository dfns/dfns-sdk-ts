import * as crypto from 'crypto'
import { CredentialSigner, KeyAssertion } from '@dfns/sdk'
import { toBase64Url } from '@dfns/sdk/utils'

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
      privateKey: CryptoKey
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


  async sign(challenge: string): Promise<KeyAssertion> {
    const clientData = JSON.stringify({
      type: 'key.get',
      challenge,
      origin: this.options.appOrigin,
      crossOrigin: this.options.crossOrigin ?? false,
    })

    let rawSignature: ArrayBuffer

    const algorithm = this.options.privateKey.algorithm.name
    if (algorithm == 'ECDSA') {
      rawSignature = await crypto.subtle.sign(
        { name: 'ECDSA', hash: { name: 'SHA-256' } },
        this.options.privateKey,
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
