import { DfnsDelegatedApiClient, DfnsDelegatedApiClientOptions } from './dfnsDelegatedApiClient'
import { DelegatedAuthClient } from './generated/auth'
import { DelegatedTenantClient } from './generated/tenant'
import { assertTenantScopedToken } from './utils/authToken'

export type DfnsDelegatedTenantApiClientOptions = DfnsDelegatedApiClientOptions

/**
 * Delegated version of `DfnsTenantApiClient`: requests that need a user action signature are split
 * into `...Init` and `...Complete` methods, and the tenant user signs the challenge outside this client.
 */
export class DfnsDelegatedTenantApiClient {
  constructor(private apiOptions: DfnsDelegatedTenantApiClientOptions) {
    assertTenantScopedToken(apiOptions.authToken)
  }

  public get auth() {
    return new DelegatedAuthClient(this.apiOptions)
  }

  public get tenant() {
    return new DelegatedTenantClient(this.apiOptions)
  }

  /** Exchanges the tenant-scoped token for one scoped to `orgId`, and returns a `DfnsDelegatedApiClient` for that org. */
  async forOrg(orgId: string): Promise<DfnsDelegatedApiClient> {
    const { token } = await this.auth.exchangeAccessToken({ body: { target: orgId } })
    const { tenantId: _tenantId, ...options } = this.apiOptions
    return new DfnsDelegatedApiClient({ ...options, orgId, authToken: token })
  }
}
