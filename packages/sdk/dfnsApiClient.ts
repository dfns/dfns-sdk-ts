import { DfnsBaseApiOptions } from './types/generic'
import { AuthClient } from './generated/auth'
import { ExchangesClient } from './generated/exchanges'
import { FeeSponsorsClient } from './generated/feeSponsors'
import { KeysClient } from './generated/keys'
import { NetworksClient } from './generated/networks'
import { PermissionsClient } from './generated/permissions'
import { PoliciesClient } from './generated/policies'
import { SignersClient } from './generated/signers'
import { StakingClient } from './generated/staking'
import { WalletsClient } from './generated/wallets'
import { WebhooksClient } from './generated/webhooks'
import { CredentialSigner } from './signer'
import { SwapsClient } from './generated/swaps'
import { AgreementsClient } from './generated/agreements'
import { YieldsClient } from './generated/yields/client'

export type DfnsApiClientOptions = DfnsBaseApiOptions & {
  /** Needs to be specified to use any endpoint that required User Action Signing flow */
  signer?: CredentialSigner
}

export class DfnsApiClient {
  constructor(private apiOptions: DfnsApiClientOptions) {}

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

  public get permissions() {
    return new PermissionsClient(this.apiOptions)
  }

  public get policies() {
    return new PoliciesClient(this.apiOptions)
  }

  public get staking() {
    return new StakingClient(this.apiOptions)
  }

  public get yields() {
    return new YieldsClient(this.apiOptions)
  }

  public get swaps() {
    return new SwapsClient(this.apiOptions)
  }

  public get agreements() {
    return new AgreementsClient(this.apiOptions)
  }

  public get signers() {
    return new SignersClient(this.apiOptions)
  }

  public get wallets() {
    return new WalletsClient(this.apiOptions)
  }

  public get webhooks() {
    return new WebhooksClient(this.apiOptions)
  }
}
