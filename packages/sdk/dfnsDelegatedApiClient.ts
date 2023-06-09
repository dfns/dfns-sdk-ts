import { DelegatedApiKeysClient } from './codegen/ApiKeys'
import { DelegatedAssetsClient } from './codegen/Assets'
import { DelegatedCallbacksClient } from './codegen/Callbacks'
import { DelegatedPermissionsClient } from './codegen/Permissions'
import { DelegatedPolicyExecutionClient } from './codegen/PolicyExecution'
import { DelegatedPolicyManagementClient } from './codegen/PolicyManagement'
import { DelegatedPublicKeysClient } from './codegen/PublicKeys'
import { DelegatedWalletsClient } from './codegen/Wallets'
import { DfnsApiOptions } from './dfnsApiClient'

export type DfnsDelegatedApiClientOptions = Omit<DfnsApiOptions, 'signer'> &
  Required<Pick<DfnsApiOptions, 'accessToken'>>

export class DfnsDelegatedApiClient {
  constructor(private apiOptions: DfnsDelegatedApiClientOptions) {}

  public get apiKeys() {
    return new DelegatedApiKeysClient(this.apiOptions)
  }

  public get assets() {
    return new DelegatedAssetsClient(this.apiOptions)
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
