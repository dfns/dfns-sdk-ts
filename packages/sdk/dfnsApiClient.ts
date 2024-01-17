import { DfnsBaseApiOptions } from './baseAuthApi'
import { AssetsClient } from './codegen/Assets'
import { AuthClient } from './codegen/Auth'
import { BlockchainsClient } from './codegen/Blockchains'
import { CallbacksClient } from './codegen/Callbacks'
import { PolicyExecutionClient } from './codegen/PolicyExecution'
import { PolicyManagementClient } from './codegen/PolicyManagement'
import { PublicKeysClient } from './codegen/PublicKeys'
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

  public get blockchains() {
    return new BlockchainsClient(this.apiOptions)
  }

  public get callbacks() {
    return new CallbacksClient(this.apiOptions)
  }

  public get permissions() {
    return new PermissionsClient(this.apiOptions)
  }

  public get policies() {
    return new PoliciesClient(this.apiOptions)
  }

  /**
   * @deprecated use the new policy engine instead
   */
  public get policyExecution() {
    return new PolicyExecutionClient(this.apiOptions)
  }

  /**
   * @deprecated use the new policy engine instead
   */
  public get policyManagement() {
    return new PolicyManagementClient(this.apiOptions)
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
