// Sentinel origin for resolving relative resource paths. Any resolved URL whose origin stays this
// value is a valid relative path; anything else means the caller handed us an absolute URL, which
// we reject — the SDK must only ever talk to the configured deployment baseUrl.
const URL_RESOLUTION_BASE = 'https://dfns.invalid'

export const getCanonicalPath = (resource: string): string => new URL(resource, URL_RESOLUTION_BASE).pathname

// Server-challenge signs the pathname only; client-challenge covers the full request line and so
// needs the query string too — swapping `?dryRun=true` on an otherwise-identical request must
// invalidate the signature.
export const getCanonicalPathAndQuery = (resource: string): string => {
  const url = new URL(resource, URL_RESOLUTION_BASE)
  return url.pathname + url.search
}

export const buildFullUrl = (resource: string, baseUrl: string): URL => {
  const base = new URL(baseUrl)

  if (base.search || base.hash) {
    throw new Error('baseUrl must not contain a query string or fragment')
  }

  const { origin, pathname, search, hash } = new URL(resource, URL_RESOLUTION_BASE)
  if (origin !== URL_RESOLUTION_BASE) {
    throw new Error('resource must be a canonical Dfns API path (e.g. "/wallets"), not an absolute URL')
  }

  const basePath = base.pathname.replace(/\/+$/, '')
  const resourcePath = pathname.replace(/^\/+/, '')
  base.pathname = `${basePath}/${resourcePath}`
  base.search = search
  base.hash = hash

  return base
}

export const buildPathAndQuery = (
  pattern: string,
  params: { path: Record<string, unknown>; query: Record<string, string | number | boolean | string[] | undefined> }
): string => {
  let path = pattern

  const paramsToReplace = (path.match(new RegExp(`:[a-zA-Z]+`, 'g')) || []).map((v) => v.replace(/^:/, ''))

  for (const key of paramsToReplace) {
    path = path.replace(new RegExp(`:${key}`, 'g'), encodeURIComponent(String(params.path[key])))
  }

  const query = Object.entries(params.query)
    .flatMap(([key, value]) => {
      if (Array.isArray(value)) {
        return value.map((item) => `${key}=${encodeURIComponent(item)}`)
      } else if (!value) {
        return []
      } else {
        return [`${key}=${encodeURIComponent(value.toString())}`]
      }
    })
    .join('&')

  return query === '' ? path : `${path}?${query}`
}
