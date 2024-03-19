import { Buffer } from 'buffer'

const pad = (topad: string): string => {
  const padLength = 4 - (topad.length % 4)
  if (padLength < 4) {
    topad += '='.repeat(padLength)
  }
  return topad
}

export const toBase64 = (buffer: string | Buffer): string => {
  if (typeof buffer === 'string') {
    buffer = Buffer.from(buffer)
  }
  return buffer.toString('base64')
}

export const fromBase64 = (encoded: string): Buffer => {
  return Buffer.from(pad(encoded), 'base64')
}

export const toBase64Url = (buffer: string | Buffer): string => {
  return toBase64(buffer).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
}

export const fromBase64Url = (encoded: string): Buffer => {
  encoded = pad(encoded).replace(/\-/g, '+').replace(/_/g, '/')
  return Buffer.from(encoded, 'base64')
}
