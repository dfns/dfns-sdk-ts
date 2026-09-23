import crypto from 'crypto'
import { toBase64Url } from './base64'

/**
 * Generate nonce for client-side challenge
 * @returns single-use value containing exactly 16 random bytes encoded as 22 canonical unpadded base64url characters
 */
export function generateClientChallengeNonce() {
  return toBase64Url(Buffer.from(crypto.getRandomValues(new Uint8Array(16))))
}
