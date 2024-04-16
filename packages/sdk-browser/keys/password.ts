import { fromBase64, rawSignatureToAns1, toBase64 } from '@dfns/sdk/utils'
import { Buffer } from 'buffer'

import { exportPublicKeyAsPem } from '../utils/crypto'

export class PasswordWrappedKey {
  constructor(public readonly publicKey: string, public readonly encryptedPrivateKey: string) {}

  public static async create(password: string, salt: Uint8Array): Promise<PasswordWrappedKey> {
    const iv = crypto.getRandomValues(new Uint8Array(16))

    const keyPair = await crypto.subtle.generateKey(
      {
        name: 'ECDSA',
        namedCurve: 'P-256',
      },
      true,
      ['sign', 'verify']
    )

    const passwordKey = await crypto.subtle.importKey(
      'raw',
      new TextEncoder().encode(password),
      { name: 'PBKDF2' },
      false,
      ['deriveBits', 'deriveKey']
    )

    const wrappingKey = await crypto.subtle.deriveKey(
      {
        name: 'PBKDF2',
        salt,
        iterations: 100000,
        hash: 'SHA-256',
      },
      passwordKey,
      { name: 'AES-GCM', length: 256 },
      true,
      ['wrapKey', 'unwrapKey']
    )

    const wrappedKey = await crypto.subtle.wrapKey('pkcs8', keyPair.privateKey, wrappingKey, {
      name: 'AES-GCM',
      iv,
    })

    const publicKey = await exportPublicKeyAsPem(keyPair)
    const encryptedPrivateKey = toBase64(
      JSON.stringify({
        key: toBase64(Buffer.from(wrappedKey)),
        iv: toBase64(Buffer.from(iv)),
      })
    )

    return new PasswordWrappedKey(publicKey, encryptedPrivateKey)
  }

  public async sign(password: string, salt: Uint8Array, message: string): Promise<Uint8Array> {
    const unpacked: { key: string; iv: string } = JSON.parse(fromBase64(this.encryptedPrivateKey).toString('utf8'))
    const wrappedKey = fromBase64(unpacked.key)
    const iv = fromBase64(unpacked.iv)

    const passwordKey = await crypto.subtle.importKey(
      'raw',
      new TextEncoder().encode(password),
      { name: 'PBKDF2' },
      false,
      ['deriveBits', 'deriveKey']
    )

    const wrappingKey = await crypto.subtle.deriveKey(
      {
        name: 'PBKDF2',
        salt,
        iterations: 100000,
        hash: 'SHA-256',
      },
      passwordKey,
      { name: 'AES-GCM', length: 256 },
      true,
      ['wrapKey', 'unwrapKey']
    )

    const privateKey = await crypto.subtle.unwrapKey(
      'pkcs8',
      wrappedKey,
      wrappingKey,
      {
        name: 'AES-GCM',
        iv: iv,
      },
      { name: 'ECDSA', namedCurve: 'P-256' },
      true,
      ['sign']
    )

    const signature = await crypto.subtle.sign(
      { name: 'ECDSA', hash: { name: 'SHA-256' } },
      privateKey,
      new TextEncoder().encode(message)
    )

    return rawSignatureToAns1(new Uint8Array(signature))
  }
}
