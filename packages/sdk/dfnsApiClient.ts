import { AddressWatchesClient } from './generated/addressWatches'
import { AllocationsClient } from './generated/allocations'
import { AuthClient } from './generated/auth'
import { CredentialSigner } from './signer'
import { ExchangesClient } from './generated/exchanges'
import { FeeSponsorsClient } from './generated/feeSponsors'
import { KeysClient } from './generated/keys'
import { NetworksClient } from './generated/networks'
import { PayinsClient } from './generated/payins'
import { PayoutsClient } from './generated/payouts'
import { PermissionsClient } from './generated/permissions'
import { PoliciesClient } from './generated/policies'
import { SignersClient } from './generated/signers'
import { StakingClient } from './generated/staking'
import { SwapsClient } from './generated/swaps'
import { TenantClient } from './generated/tenant'
import { VaultsClient } from './generated/vaults'
import { WalletsClient } from './generated/wallets'
import { WebhooksClient } from './generated/webhooks'
import { DfnsBaseApiOptions } from './types/generic'

export type DfnsApiClientOptions = DfnsBaseApiOptions & {
  /** Needs to be specified to use any endpoint that required User Action Signing flow */
  signer?: CredentialSigner
}

export class DfnsApiClient {
  constructor(private apiOptions: DfnsApiClientOptions) {}

  public get addressWatches() {
    return new AddressWatchesClient(this.apiOptions)
  }

  public get allocations() {
    return new AllocationsClient(this.apiOptions)
  }

  public get auth() {
    return new AuthClient(this.apiOptions)
  }

  public get exchanges() {
    return new ExchangesClient(this.apiOptions)
  }

  public get feeSponsors() {
    return new FeeSponsorsClient(this.apiOptions)
  }

  public get keys() {
    return new KeysClient(this.apiOptions)
  }

  public get networks() {
    return new NetworksClient(this.apiOptions)
  }

  public get payins() {
    return new PayinsClient(this.apiOptions)
  }

  public get payouts() {
    return new PayoutsClient(this.apiOptions)
  }

  public get permissions() {
    return new PermissionsClient(this.apiOptions)
  }

  public get policies() {
    return new PoliciesClient(this.apiOptions)
  }

  public get signers() {
    return new SignersClient(this.apiOptions)
  }

  public get staking() {
    return new StakingClient(this.apiOptions)
  }

  public get swaps() {
    return new SwapsClient(this.apiOptions)
  }

  /**
   * Tenant-level endpoints: orgs, tenant users, user groups and tenant permissions.
   *
   * Only a tenant user can call them, with a tenant-scoped auth token. A tenant user gets one
   * with `auth.exchangeAccessToken`. All other modules need a token scoped to an org.
   */
  public get tenant() {
    return new TenantClient(this.apiOptions)
  }

  public get vaults() {
    return new VaultsClient(this.apiOptions)
  }

  public get wallets() {
    return new WalletsClient(this.apiOptions)
  }

  public get webhooks() {
    return new WebhooksClient(this.apiOptions)
  }
}
