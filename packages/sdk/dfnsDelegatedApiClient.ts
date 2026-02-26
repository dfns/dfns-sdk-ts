import { DelegatedAgreementsClient } from './generated/agreements'
import { DelegatedAllocationsClient } from './generated/allocations'
import { DelegatedAuthClient } from './generated/auth'
import { DelegatedExchangesClient } from './generated/exchanges'
import { DelegatedFeeSponsorsClient } from './generated/feeSponsors'
import { DelegatedKeysClient } from './generated/keys'
import { DelegatedNetworksClient } from './generated/networks'
import { DelegatedPayoutsClient } from './generated/payouts'
import { DelegatedPermissionsClient } from './generated/permissions'
import { DelegatedPoliciesClient } from './generated/policies'
import { DelegatedSignersClient } from './generated/signers'
import { DelegatedStakingClient } from './generated/staking'
import { DelegatedSwapsClient } from './generated/swaps'
import { DelegatedWalletsClient } from './generated/wallets'
import { DelegatedWebhooksClient } from './generated/webhooks'
import { DfnsBaseApiOptions } from './types/generic'

export type DfnsDelegatedApiClientOptions = DfnsBaseApiOptions

export class DfnsDelegatedApiClient {
  constructor(private apiOptions: DfnsDelegatedApiClientOptions) {}

  public get agreements() {
    return new DelegatedAgreementsClient(this.apiOptions)
  }

  public get allocations() {
    return new DelegatedAllocationsClient(this.apiOptions)
  }

  public get auth() {
    return new DelegatedAuthClient(this.apiOptions)
  }

  public get exchanges() {
    return new DelegatedExchangesClient(this.apiOptions)
  }

  public get feeSponsors() {
    return new DelegatedFeeSponsorsClient(this.apiOptions)
  }

  public get keys() {
    return new DelegatedKeysClient(this.apiOptions)
  }

  public get networks() {
    return new DelegatedNetworksClient(this.apiOptions)
  }

  public get payouts() {
    return new DelegatedPayoutsClient(this.apiOptions)
  }

  public get permissions() {
    return new DelegatedPermissionsClient(this.apiOptions)
  }

  public get policies() {
    return new DelegatedPoliciesClient(this.apiOptions)
  }

  public get staking() {
    return new DelegatedStakingClient(this.apiOptions)
  }

  public get swaps() {
    return new DelegatedSwapsClient(this.apiOptions)
  }

  public get signers() {
    return new DelegatedSignersClient(this.apiOptions)
  }

  public get wallets() {
    return new DelegatedWalletsClient(this.apiOptions)
  }

  public get webhooks() {
    return new DelegatedWebhooksClient(this.apiOptions)
  }
}
