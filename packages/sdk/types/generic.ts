import { CredentialSigner } from '../signer'

export type DfnsBaseApiOptions = {
  /** Complete transport base URL. It may include a deployment-specific path prefix. */
  baseUrl?: string
  /** Auth token needs to be specified to use any endpoint that requires authentication */
  authToken?: string
  /** If orgId is specified, and an auth token is used, then before API requests are sent, a check will be performed that the auth token is indeed scoped to the expected org. That can be useful in the context of multi-org */
  orgId?: string
  /** Base URL used for user-action challenge requests. Defaults to baseUrl. */
  baseAuthUrl?: string
  /** User-action server kind. Defaults to Api. */
  userActionServerKind?: string
}

export type DfnsApiClientOptions = DfnsBaseApiOptions & {
  /** Needs to be specified to use any endpoint that required User Action Signing flow */
  signer?: CredentialSigner
}
