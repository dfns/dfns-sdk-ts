import { DfnsBaseApiOptions } from './baseAuthApi'
import { AssetsClient } from './codegen/Assets'
import { AuthClient } from './codegen/Auth'
import { CallbacksClient } from './codegen/Callbacks'
import { PublicKeysClient } from './codegen/PublicKeys'
import { NetworksClient } from './generated/networks'
import { PermissionsClient } from './generated/permissions'
import { PoliciesClient } from './generated/policies'
import { SignersClient } from './generated/signers'
import { WalletsClient } from './generated/wallets'
import { WebhooksClient } from './generated/webhooks'
import { CredentialSigner } from './signer'

export type DfnsApiClientOptions = DfnsBaseApiOptions & {
  signer: CredentialSigner
}

export class DfnsApiClient {
  constructor(private apiOptions: DfnsApiClientOptions) {}

  public get assets() {
    return new AssetsClient(this.apiOptions)
  }

  public get auth() {
    return new AuthClient(this.apiOptions)
  }

  public get callbacks() {
    return new CallbacksClient(this.apiOptions)
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

  public get publicKeys() {
    return new PublicKeysClient(this.apiOptions)
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
