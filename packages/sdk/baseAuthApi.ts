import { AllowCredential, FirstFactorAssertion, SecondFactorAssertion } from './signer'
import { HttpMethod, simpleFetch } from './utils/fetch'

export type DfnsBaseApiOptions = {
  appId: string
  appSecret?: string
  accessToken?: string
  baseUrl: string
}

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
  static async createUserActionChallenge(
    request: CreateUserActionChallengeRequest,
    options: DfnsBaseApiOptions
  ): Promise<UserActionChallengeResponse> {
    const response = await simpleFetch('/auth/action/init', {
      method: 'POST',
      body: request,
      apiOptions: options,
    })

    return response.json()
  }

  static async signUserActionChallenge(
    request: SignUserActionChallengeRequest,
    options: DfnsBaseApiOptions
  ): Promise<UserActionResponse> {
    const response = await simpleFetch('/auth/action', {
      method: 'POST',
      body: request,
      apiOptions: options,
    })

    return response.json()
  }

  static async createUserLoginChallenge(
    request: CreateUserLoginChallengeRequest,
    options: DfnsBaseApiOptions
  ): Promise<UserLoginChallengeResponse> {
    const response = await simpleFetch('/auth/login/init', {
      method: 'POST',
      body: request,
      apiOptions: options,
    })

    return response.json()
  }

  static async signUserLoginChallenge(
    request: SignUserLoginChallengeRequest,
    options: DfnsBaseApiOptions
  ): Promise<UserLoginResponse> {
    const response = await simpleFetch('/auth/login', {
      method: 'POST',
      body: request,
      apiOptions: options,
    })

    return response.json()
  }
}
