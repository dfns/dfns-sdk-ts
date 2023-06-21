import { DfnsBaseApiOptions } from './baseAuthApi'
import { DelegatedAssetsClient } from './codegen/Assets'
import { DelegatedBlockchainsClient } from './codegen/Blockchains'
import { DelegatedCallbacksClient } from './codegen/Callbacks'
import { DelegatedPermissionsClient } from './codegen/Permissions'
import { DelegatedPolicyExecutionClient } from './codegen/PolicyExecution'
import { DelegatedPolicyManagementClient } from './codegen/PolicyManagement'
import { DelegatedPublicKeysClient } from './codegen/PublicKeys'
import { DelegatedWalletsClient } from './codegen/Wallets'

export type DfnsDelegatedApiClientOptions = DfnsBaseApiOptions & {
  accessToken: string
}

export class DfnsDelegatedApiClient {
  constructor(private apiOptions: DfnsDelegatedApiClientOptions) {}

  public get assets() {
    return new DelegatedAssetsClient(this.apiOptions)
  }

  public get blockchains() {
    return new DelegatedBlockchainsClient(this.apiOptions)
  }

  public get callbacks() {
    return new DelegatedCallbacksClient(this.apiOptions)
  }

  public get permissions() {
    return new DelegatedPermissionsClient(this.apiOptions)
  }

  public get policyExecution() {
    return new DelegatedPolicyExecutionClient(this.apiOptions)
  }

  public get policyManagement() {
    return new DelegatedPolicyManagementClient(this.apiOptions)
  }

  public get publicKeys() {
    return new DelegatedPublicKeysClient(this.apiOptions)
  }

  public get wallets() {
    return new DelegatedWalletsClient(this.apiOptions)
  }
}
