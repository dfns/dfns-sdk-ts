import { Buffer } from 'buffer'

import { DfnsError } from '../dfnsError'
import { DfnsApiClientOptions } from '../types/generic'
import { assertAuthTokenIsSameOrg, JWT_CUSTOM_DATA_CLAIM } from './authToken'
import { fromBase64Url, toBase64Url } from './base64'
import { FetchOptions } from './fetch'

/** Build the Key assertion accepted by the single-request user-action verifier. */
export const createFastAuthHeader = async (url: URL, options: FetchOptions<DfnsApiClientOptions>): Promise<string> => {
  const { signer, orgId } = options.apiOptions
  if (!signer?.signFastAuth) {
    throw new DfnsError(-1, 'Fast Auth requires a Key signer implementing signFastAuth.')
  }

  const headers = Object.entries(options.headers ?? {})
  if (headers.some(([name]) => ['x-dfns-useraction', 'x-useraction'].includes(name.toLowerCase()))) {
    throw new DfnsError(-1, 'Fast Auth cannot be combined with another user-action header.')
  }
  const authorization = headers.filter(([name]) => name.toLowerCase() === 'authorization')
  if (authorization.length !== 1 || !/^Bearer \S+$/i.test(authorization[0][1])) {
    throw new DfnsError(-1, 'Fast Auth requires one bearer authorization token.')
  }
  const authToken = authorization[0][1].slice(7)
  if (orgId) assertAuthTokenIsSameOrg({ authToken, orgId })

  // The bearer token remains server-verified. Read only its scope for the signed challenge.
  let scope: { orgId?: string; tenantId?: string }
  try {
    const metadata = JSON.parse(fromBase64Url(authToken.split('.')[1]).toString('utf8'))[JWT_CUSTOM_DATA_CLAIM]
    const validId = (value: unknown): value is string =>
      typeof value === 'string' && /^[A-Za-z0-9_-]{1,50}$/.test(value)
    if (validId(metadata?.orgId) && metadata.tenantId === undefined) {
      scope = { orgId: metadata.orgId }
    } else if (validId(metadata?.tenantId) && metadata.orgId === undefined) {
      scope = { tenantId: metadata.tenantId }
    } else {
      throw new Error('Invalid scope')
    }
  } catch {
    throw new DfnsError(-1, 'Fast Auth requires a bearer token scoped to exactly one org or tenant.')
  }

  const body = options.body ?? ''
  if (typeof body !== 'string') {
    throw new DfnsError(-1, 'Fast Auth requires a serialized JSON body.')
  }
  const payloadHash = toBase64Url(Buffer.from(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(body))))
  const challenge = toBase64Url(
    JSON.stringify({
      timestamp: String(Date.now()),
      nonce: toBase64Url(Buffer.from(crypto.getRandomValues(new Uint8Array(16)))),
      host: url.hostname.toLowerCase(),
      method: options.method,
      path: url.pathname + url.search,
      payloadHash,
      ...scope,
    })
  )
  const assertion = await signer.signFastAuth(challenge)
  if (assertion.kind !== 'Key') {
    throw new DfnsError(-1, 'Fast Auth requires a Key credential assertion.')
  }
  return toBase64Url(JSON.stringify(assertion))
}
