const arrayBufferToBase64 = (buffer: ArrayBuffer): string => {
  const str = new Uint8Array(buffer).reduce((str: string, byte: number) => {
    return str + String.fromCharCode(byte)
  }, '')
  return btoa(str)
}

const base64ToBase64Url = (base64: string): string => {
  return base64
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
}

export const arrayBufferToBase64Url = (buffer: ArrayBuffer): string => {
  return base64ToBase64Url(arrayBufferToBase64(buffer))
}

export const base64url = (str: string) => {
  return base64ToBase64Url(btoa(str))
}
