import { DfnsBaseApiOptions } from './baseAuthApi'
import { DelegatedAssetsClient } from './codegen/Assets'
import { DelegatedAuthClient } from './codegen/Auth'
import { DelegatedCallbacksClient } from './codegen/Callbacks'
import { DelegatedPublicKeysClient } from './codegen/PublicKeys'
import { DelegatedNetworksClient } from './generated/networks'
import { DelegatedPermissionsClient } from './generated/permissions'
import { DelegatedPoliciesClient } from './generated/policies'
import { DelegatedSignersClient } from './generated/signers'
import { DelegatedWalletsClient } from './generated/wallets'
import { DelegatedWebhooksClient } from './generated/webhooks'

export type DfnsDelegatedApiClientOptions = DfnsBaseApiOptions & {
  authToken: string
}

export class DfnsDelegatedApiClient {
  constructor(private apiOptions: DfnsDelegatedApiClientOptions) {}

  public get assets() {
    return new DelegatedAssetsClient(this.apiOptions)
  }

  public get auth() {
    return new DelegatedAuthClient(this.apiOptions)
  }

  public get callbacks() {
    return new DelegatedCallbacksClient(this.apiOptions)
  }

  public get networks() {
    return new DelegatedNetworksClient(this.apiOptions)
  }

  public get permissions() {
    return new DelegatedPermissionsClient(this.apiOptions)
  }

  public get policies() {
    return new DelegatedPoliciesClient(this.apiOptions)
  }

  public get publicKeys() {
    return new DelegatedPublicKeysClient(this.apiOptions)
  }

  public get wallets() {
    return new DelegatedWalletsClient(this.apiOptions)
  }

  public get webhooks() {
    return new DelegatedWebhooksClient(this.apiOptions)
  }

  public get signers() {
    return new DelegatedSignersClient(this.apiOptions)
  }
}
