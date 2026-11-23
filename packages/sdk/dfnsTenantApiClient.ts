import { DfnsApiClient, DfnsApiClientOptions } from './dfnsApiClient'
import { AuthClient } from './generated/auth'
import { TenantClient } from './generated/tenant'
import { assertTenantScopedToken } from './utils/authToken'

export type DfnsTenantApiClientOptions = DfnsApiClientOptions

/**
 * Client for a tenant user acting at tenant level, with a tenant-scoped auth token.
 *
 * It holds the tenant endpoints (orgs, tenant users, user groups and tenant permissions) and the
 * auth endpoints that accept a tenant-scoped token (user action signing, credentials, token exchange, logout).
 * To work inside an org, use `forOrg(orgId)`: it returns a `DfnsApiClient` with a token scoped to that org.
 */
export class DfnsTenantApiClient {
  constructor(private apiOptions: DfnsTenantApiClientOptions) {
    assertTenantScopedToken(apiOptions.authToken)
  }

  public get auth() {
    return new AuthClient(this.apiOptions)
  }

  public get tenant() {
    return new TenantClient(this.apiOptions)
  }

  /** Exchanges the tenant-scoped token for one scoped to `orgId`, and returns a `DfnsApiClient` for that org. */
  async forOrg(orgId: string): Promise<DfnsApiClient> {
    const { token } = await this.auth.exchangeAccessToken({ body: { target: orgId } })
    const { tenantId: _tenantId, ...options } = this.apiOptions
    return new DfnsApiClient({ ...options, orgId, authToken: token })
  }
}
