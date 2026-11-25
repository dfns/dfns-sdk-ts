import { fromBase64 } from './base64'

export const JWT_CUSTOM_DATA_CLAIM = 'https://custom/app_metadata'

export const extractTokenScope = ({ authToken }: { authToken: string }): { orgId?: string; tenantId?: string } => {
  const tokenBody = authToken.split('.')?.[1] || ''
  let decoded: any

  try {
    decoded = JSON.parse(fromBase64(tokenBody).toString('utf-8'))
  } catch (error) {
    throw new Error('Provided auth token could not be properly parsed')
  }

  const tokenData = decoded?.[JWT_CUSTOM_DATA_CLAIM]

  const orgId = typeof tokenData?.orgId === 'string' ? tokenData?.orgId : undefined
  const tenantId = typeof tokenData?.tenantId === 'string' ? tokenData?.tenantId : undefined

  return { orgId, tenantId }
}

/**
 * Throws if the auth token is scoped to an org. Tenant endpoints only accept a tenant-scoped token,
 * which a tenant user gets at login or with `auth.exchangeAccessToken`.
 */
export const assertTenantScopedToken = (authToken?: string) => {
  if (!authToken) return
  if (extractTokenScope({ authToken }).orgId) {
    throw new Error(
      'The auth token is scoped to an org. Tenant API clients need a tenant-scoped token: exchange it with `auth.exchangeAccessToken({ body: { target: tenantId } })`.'
    )
  }
}
