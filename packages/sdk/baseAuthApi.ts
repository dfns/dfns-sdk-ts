import { PartialBy } from 'utils/types'
import { DfnsApiOptions } from './dfnsApiClient'
import { AllowCredential, FirstFactorAssertion, SecondFactorAssertion } from './signer'
import { Fetch, HttpMethod, preflightFetch } from './utils/fetch'

export type CreateUserActionChallengeRequest = {
  userActionPayload: string
  userActionHttpMethod: HttpMethod
  userActionHttpPath: string
  userActionServerKind: 'Api'
}

export type CredentialKind = 'Key' | 'Fido2' | 'Password' | 'Totp'

export type CredentialFactor = 'first' | 'second' | 'either'

export type UserActionChallengeResponse = {
  supportedCredentialKinds: {
    kind: CredentialKind
    factor: CredentialFactor
    requiresSecondFactor: boolean
  }[]
  challenge: string
  challengeIdentifier: string
  externalAuthenticationUrl: string
  allowCredentials: {
    key: AllowCredential[]
    webauthn: AllowCredential[]
  }
}

export type SignUserActionChallengeRequest = {
  challengeIdentifier: string
  firstFactor: FirstFactorAssertion
  secondFactor?: SecondFactorAssertion
}

export type UserActionResponse = {
  userAction: string
}

export type CreateUserLoginChallengeRequest = {
  username: string
  orgId: string
}

export type UserLoginChallengeResponse = UserActionChallengeResponse

export type SignUserLoginChallengeRequest = SignUserActionChallengeRequest

export type UserLoginResponse = {
  token: string
}

export class BaseAuthApi {
  private fetch: Fetch

  constructor(private apiOptions: PartialBy<DfnsApiOptions, 'signer'>) {
    this.fetch = preflightFetch
  }

  async createUserActionChallenge(request: CreateUserActionChallengeRequest): Promise<UserActionChallengeResponse> {
    const response = await this.fetch('/auth/action/init', {
      method: 'POST',
      body: request,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async signUserActionChallenge(request: SignUserActionChallengeRequest): Promise<UserActionResponse> {
    const response = await this.fetch('/auth/action', {
      method: 'POST',
      body: request,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async createUserLoginChallenge(request: CreateUserLoginChallengeRequest): Promise<UserLoginChallengeResponse> {
    const response = await this.fetch('/auth/login/init', {
      method: 'POST',
      body: request,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async signUserLoginChallenge(request: SignUserLoginChallengeRequest): Promise<UserLoginResponse> {
    const response = await this.fetch('/auth/login', {
      method: 'POST',
      body: request,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }
}
