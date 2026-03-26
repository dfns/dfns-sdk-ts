export const buildPathAndQuery = (
  pattern: string,
  params: { path: Record<string, any>; query: Record<string, string | number | boolean | string[] | undefined> }
): string => {
  let path = pattern

  const paramsToReplace = (path.match(new RegExp(`:[a-zA-Z]+`, 'g')) || []).map((v) => v.replace(/^:/, ''))

  for (const key of paramsToReplace) {
    path = path.replace(new RegExp(`:${key}`, 'g'), encodeURIComponent(params.path[key]))
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
