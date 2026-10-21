import { Buffer } from 'buffer'

import { fromBase64, rawSignatureToAns1, toBase64, toBase64Url } from '@dfns/sdk/utils'

import { namedError } from './protocol'

type WrappedEnvelope = {
  iv: string
  key: string
}

const deriveWrappingKey = async (password: string, salt: Uint8Array<ArrayBuffer>): Promise<CryptoKey> => {
  const material = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), { name: 'PBKDF2' }, false, [
    'deriveKey',
  ])
  return crypto.subtle.deriveKey(
    { hash: 'SHA-256', iterations: 100000, name: 'PBKDF2', salt },
    material,
    { length: 256, name: 'AES-GCM' },
    false,
    ['wrapKey', 'unwrapKey']
  )
}

const exportPublicKeySpki = (publicKey: CryptoKey) => crypto.subtle.exportKey('spki', publicKey)

const exportPublicKeyAsPem = async (publicKey: CryptoKey): Promise<string> => {
  const buf = await exportPublicKeySpki(publicKey)
  const b64 = toBase64(Buffer.from(buf))
  return `-----BEGIN PUBLIC KEY-----\n${b64.match(/.{1,64}/g)?.join('\n')}\n-----END PUBLIC KEY-----`
}

const computeCredId = async (publicKey: CryptoKey): Promise<string> => {
  const spki = await exportPublicKeySpki(publicKey)
  const hash = await crypto.subtle.digest('SHA-256', spki)
  return toBase64Url(Buffer.from(hash))
}

export class IsolatedKey {
  private constructor(
    private readonly privateKey: CryptoKey,
    readonly credId: string
  ) {}

  static async create(opts: { password?: string; salt?: Uint8Array<ArrayBuffer> }): Promise<{
    isolated: IsolatedKey
    publicKey: string
    credId: string
    wrappedKey?: string
  }> {
    if (opts.password === undefined) {
      const pair = await crypto.subtle.generateKey({ name: 'ECDSA', namedCurve: 'P-256' }, false, ['sign', 'verify'])
      const publicKey = await exportPublicKeyAsPem(pair.publicKey)
      const credId = await computeCredId(pair.publicKey)
      return { isolated: new IsolatedKey(pair.privateKey, credId), publicKey, credId }
    }

    if (!opts.salt) {
      throw namedError('InvalidArgument', 'salt is required when password is provided')
    }

    const extractablePair = await crypto.subtle.generateKey({ name: 'ECDSA', namedCurve: 'P-256' }, true, [
      'sign',
      'verify',
    ])
    const publicKey = await exportPublicKeyAsPem(extractablePair.publicKey)
    const credId = await computeCredId(extractablePair.publicKey)
    const iv = crypto.getRandomValues(new Uint8Array(16))
    const wrappingKey = await deriveWrappingKey(opts.password, opts.salt)
    const wrappedBuf = await crypto.subtle.wrapKey('pkcs8', extractablePair.privateKey, wrappingKey, {
      iv,
      name: 'AES-GCM',
    })

    const nonExtractable = await crypto.subtle.unwrapKey(
      'pkcs8',
      wrappedBuf,
      wrappingKey,
      { iv, name: 'AES-GCM' },
      { name: 'ECDSA', namedCurve: 'P-256' },
      false,
      ['sign']
    )

    const envelope: WrappedEnvelope = {
      iv: toBase64(Buffer.from(iv)),
      key: toBase64(Buffer.from(wrappedBuf)),
    }
    const wrappedKey = toBase64(JSON.stringify(envelope))
    return { isolated: new IsolatedKey(nonExtractable, credId), publicKey, credId, wrappedKey }
  }

  static async fromWrapped(
    credId: string,
    wrappedKey: string,
    password: string,
    salt: Uint8Array<ArrayBuffer>
  ): Promise<IsolatedKey> {
    let envelope: WrappedEnvelope
    try {
      envelope = JSON.parse(fromBase64(wrappedKey).toString('utf8'))
    } catch {
      throw namedError('InvalidArgument', 'stored key envelope could not be parsed')
    }
    if (
      !envelope ||
      typeof envelope !== 'object' ||
      typeof envelope.iv !== 'string' ||
      typeof envelope.key !== 'string'
    ) {
      throw namedError('InvalidArgument', 'stored key envelope is missing iv or key')
    }
    let wrappedBuf: Uint8Array<ArrayBuffer>
    let iv: Uint8Array<ArrayBuffer>
    try {
      wrappedBuf = new Uint8Array(fromBase64(envelope.key))
      iv = new Uint8Array(fromBase64(envelope.iv))
    } catch {
      throw namedError('InvalidArgument', 'stored key envelope has invalid base64 fields')
    }
    const wrappingKey = await deriveWrappingKey(password, salt)
    try {
      const privateKey = await crypto.subtle.unwrapKey(
        'pkcs8',
        wrappedBuf,
        wrappingKey,
        { iv, name: 'AES-GCM' },
        { name: 'ECDSA', namedCurve: 'P-256' },
        false,
        ['sign']
      )
      return new IsolatedKey(privateKey, credId)
    } catch (err) {
      // AES-GCM auth tag didn't verify. Overwhelmingly the common cause is a wrong
      // password/recovery code; the rare alternative is tampered or truncated ciphertext.
      // Both surface as OperationError from Web Crypto — we don't try to distinguish.
      if (err instanceof Error && err.name === 'OperationError') {
        throw namedError('UnlockFailed', 'key could not be unlocked; check the unlock code')
      }
      throw err
    }
  }

  async sign(message: string): Promise<Uint8Array> {
    const raw = await crypto.subtle.sign(
      { hash: { name: 'SHA-256' }, name: 'ECDSA' },
      this.privateKey,
      new TextEncoder().encode(message)
    )
    return rawSignatureToAns1(new Uint8Array(raw))
  }
}
