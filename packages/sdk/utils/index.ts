export * from './base64'
export * from './bigint'
export * from './crypto'
export * from './fetch'
export * from './nonce'
export * from './string'
export * from './url'

export const generateRandom = (size: number): Uint8Array => {
  const buffer = new Uint8Array(size)
  for (let i = 0; i < size; i++) {
    buffer[i] = Math.floor(Math.random() * 256)
  }
  return buffer
}