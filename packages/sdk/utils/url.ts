export const buildPathAndQuery = (
  pattern: string,
  params: { path: Record<string, any>; query: Record<string, string | number | boolean | undefined> }
): string => {
  let path = pattern

  const paramsToReplace = path.match(new RegExp(`:[a-zA-Z]+`, 'g')) || []

  for (const key of paramsToReplace) {
    path = path.replace(new RegExp(`${key}`, 'g'), encodeURIComponent(params.path[key]))
  }

  const query = Object.entries(params.query)
    .filter(([_, value]) => !!value)
    .map(([key, value]) => `${key}=${encodeURIComponent(value!.toString())}`)
    .join('&')

  return query === '' ? path : `${path}?${query}`
}
