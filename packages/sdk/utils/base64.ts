import { Buffer } from 'buffer'

export const toBase64Url = (buffer: string | Buffer): string => {
  if (typeof buffer === 'string') {
    buffer = Buffer.from(buffer)
  }

  return buffer.toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
}

export const fromBase64Url = (encoded: string): Buffer => {
  const padLength = 4 - (encoded.length % 4)
  if (padLength < 4) {
    encoded += '='.repeat(padLength)
  }

  encoded = encoded.replace(/\-/g, '+').replace(/_/g, '/')
  return Buffer.from(encoded, 'base64')
}

export const toBase64 = (buffer: ArrayBuffer): string => {
  const view = new Uint8Array(buffer);
  return btoa(String.fromCharCode(...view));
}