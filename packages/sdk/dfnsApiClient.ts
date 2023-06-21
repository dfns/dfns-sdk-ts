import { DfnsBaseApiOptions } from './baseAuthApi'
import { AssetsClient } from './codegen/Assets'
import { AuthClient } from './codegen/Auth'
import { BlockchainsClient } from './codegen/Blockchains'
import { CallbacksClient } from './codegen/Callbacks'
import { PermissionsClient } from './codegen/Permissions'
import { PolicyExecutionClient } from './codegen/PolicyExecution'
import { PolicyManagementClient } from './codegen/PolicyManagement'
import { PublicKeysClient } from './codegen/PublicKeys'
import { WalletsClient } from './codegen/Wallets'
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

  public get policyExecution() {
    return new PolicyExecutionClient(this.apiOptions)
  }

  public get policyManagement() {
    return new PolicyManagementClient(this.apiOptions)
  }

  public get publicKeys() {
    return new PublicKeysClient(this.apiOptions)
  }

  public get wallets() {
    return new WalletsClient(this.apiOptions)
  }
}
