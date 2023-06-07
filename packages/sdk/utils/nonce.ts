import { v4 } from 'uuid'

import { toBase64Url } from './base64'

export const generateNonce = (): string => {
  return toBase64Url(
    JSON.stringify({
      uuid: v4(),
      date: new Date().toISOString(),
    })
  )
}
