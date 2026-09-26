import { Buffer } from 'buffer'
import { toBase64Url } from './base64'
import { toHex } from './string'

export const sha256 = async (bytes: Uint8Array, encoding: 'hex' | 'base64url' = 'hex'): Promise<string> => {
  const digest = await crypto.subtle.digest('SHA-256', bytes as BufferSource)

  switch (encoding) {
    case 'base64url':
      return toBase64Url(Buffer.from(digest))
    case 'hex':
      return toHex(digest)
    default:
      throw Error(`Unsupported encoding for sha256. Expected 'hex' or 'base64url'.`)
  }
}
