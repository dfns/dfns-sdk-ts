const URL_RESOLUTION_BASE = 'https://dfns.invalid'

export const getCanonicalPath = (resource: string | URL): string => {
  return resource instanceof URL ? resource.pathname : new URL(resource, URL_RESOLUTION_BASE).pathname
}

export const buildApiUrl = (resource: string | URL, baseUrl: string): URL => {
  const base = new URL(baseUrl)

  if (base.search || base.hash) {
    throw new Error('baseUrl must not contain a query string or fragment')
  }

  if (resource instanceof URL) {
    return new URL(resource)
  }

  const resolvedResource = new URL(resource, URL_RESOLUTION_BASE)
  if (resolvedResource.origin !== URL_RESOLUTION_BASE) {
    return resolvedResource
  }

  const basePath = base.pathname.replace(/\/+$/, '')
  const resourcePath = resolvedResource.pathname.replace(/^\/+/, '')
  base.pathname = `${basePath}/${resourcePath}`
  base.search = resolvedResource.search
  base.hash = resolvedResource.hash

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
