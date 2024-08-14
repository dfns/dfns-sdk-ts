import { DfnsBaseApiOptions } from './baseAuthApi'
import { AuthClient } from './generated/auth'
import { ExchangesClient } from './generated/exchanges'
import { NetworksClient } from './generated/networks'
import { PermissionsClient } from './generated/permissions'
import { PoliciesClient } from './generated/policies'
import { SignersClient } from './generated/signers'
import { WalletsClient } from './generated/wallets'
import { WebhooksClient } from './generated/webhooks'
import { CredentialSigner } from './signer'

export type DfnsApiClientOptions = DfnsBaseApiOptions & {
  /** Needs to be specified to use any endpoint that required User Action Signing flow */
  signer?: CredentialSigner
}

export class DfnsApiClient {
  constructor(private apiOptions: DfnsApiClientOptions) { }

  public get auth() {
    return new AuthClient(this.apiOptions)
  }

  public get exchanges() {
    return new ExchangesClient(this.apiOptions)
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

  public get wallets() {
    return new WalletsClient(this.apiOptions)
  }

  public get webhooks() {
    return new WebhooksClient(this.apiOptions)
  }

  public get signers() {
    return new SignersClient(this.apiOptions)
  }
}
