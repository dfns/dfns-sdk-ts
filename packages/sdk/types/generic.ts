import { CredentialSigner } from '../signer'

export type DfnsBaseApiOptions = {
  appId: string
  /** Needs to be specified to use any endpoint that requires authentication */
  authToken?: string
  /** Only needs to be specified when using another API environment */
  baseUrl?: string
  appSecret?: string
}

export type DfnsApiClientOptions = DfnsBaseApiOptions & {
  /** Needs to be specified to use any endpoint that required User Action Signing flow */
  signer?: CredentialSigner
}
