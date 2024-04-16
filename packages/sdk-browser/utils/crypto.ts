import { toBase64 } from '@dfns/sdk/utils'
import { Buffer } from 'buffer'

export const exportPublicKeyAsPem = async (keyPair: CryptoKeyPair): Promise<string> => {
  const buffer = await crypto.subtle.exportKey('spki', keyPair.publicKey)
  const b64 = toBase64(Buffer.from(buffer))
  return `-----BEGIN PUBLIC KEY-----\n${b64.match(/.{1,64}/g)?.join('\n')}\n-----END PUBLIC KEY-----`
}
