import {
  CredentialSigner,
  CredentialStore,
  DfnsError,
  KeyAssertion,
  KeyAttestation,
  UserActionChallenge,
  UserRegistrationChallenge,
} from '@dfns/sdk'
import {
  exportPublicKeyInPemFormatBrowser,
  generateRandom,
  rawSignatureToAns1,
  toBase64Url,
  toHex,
} from '@dfns/sdk/utils'
import { Buffer } from 'buffer'

export class BrowserKeySigner implements CredentialSigner<KeyAssertion>, CredentialStore<KeyAttestation> {
  constructor(
    private options: {
      credId?: string
      keyPair: CryptoKeyPair
    }
  ) {}

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
      throw new DfnsError(-1, `${algorithm} is not supported`)
    }
    const signature = rawSignatureToAns1(new Uint8Array(rawSignature))
    const attestationData = JSON.stringify({
      publicKey: publicKeyPem,
      signature: toHex(signature),
    })

    return {
      credentialKind: 'Key',
      credentialInfo: {
        credId,
        clientData: toBase64Url(clientData),
        attestationData: toBase64Url(attestationData),
      },
    }
  }

  async sign(challenge: UserActionChallenge): Promise<KeyAssertion> {
    const credId = this.options.credId
    if (credId === undefined || credId === '') {
      throw new DfnsError(-1, 'credId is needed to sign')
    }
    const allowedCredId = challenge.allowCredentials.key.map((cred) => cred.id)
    if (!allowedCredId.includes(credId)) {
      throw new DfnsError(-1, `${credId} does not match allowed credentials: ${allowedCredId}`)
    }
    const clientData = JSON.stringify({
      type: 'key.get',
      challenge: challenge.challenge,
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
      throw new DfnsError(-1, `${algorithm} is not supported`)
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
