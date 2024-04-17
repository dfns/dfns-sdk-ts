import {
  FirstFactorAttestation,
  RecoveryFactorAttestation,
  SecondFactorAttestation,
  UserRegistrationChallenge,
} from './store'
import {
  CredentialKind,
  FirstFactorAssertion,
  RecoveryKeyAssertion,
  SecondFactorAssertion,
  UserActionChallenge,
} from './signer'
import { HttpMethod, simpleFetch } from './utils/fetch'

export type DfnsBaseApiOptions = {
  appId: string
  /** Needs to be specified to use any endpoint that requires authentication */
  authToken?: string
  /** Only needs to be specified when using another API environment */
  baseUrl?: string
  appSecret?: string
}

export type CreateUserActionChallengeRequest = {
  userActionPayload: string
  userActionHttpMethod: HttpMethod
  userActionHttpPath: string
  userActionServerKind: 'Api'
}

export type UserActionChallengeResponse = UserActionChallenge

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

export type CreateUserLoginRequest = SignUserActionChallengeRequest

export type UserLoginResponse = {
  token: string
}

export type CreateUserRegistrationChallengeRequest = {
  orgId: string
  username: string
  registrationCode: string
}

export type UserRegistrationChallengeResponse = UserRegistrationChallenge

export type CreateUserRegistrationRequest = {
  firstFactorCredential: FirstFactorAttestation
  secondFactorCredential?: SecondFactorAttestation
  recoveryCredential?: RecoveryFactorAttestation
}

export type UserRegistrationResponse = {
  credential: {
    uuid: string
    kind: CredentialKind
    name: string
  }
  user: {
    id: string
    username: string
    orgId: string
  }
}

export type CreateUserRecoveryRequest = {
  recovery: RecoveryKeyAssertion
  newCredentials: {
    firstFactorCredential: FirstFactorAttestation
    secondFactorCredential?: SecondFactorAttestation
    recoveryCredential?: RecoveryFactorAttestation
  }
}

export type UserRecoveryResponse = UserRegistrationResponse

export class BaseAuthApi {
  /**
   * Creates a user action challenge
   */
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

  /**
   * Sign a user action challenge
   */
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

  /**
   * Initiates user login, by creating a challenge that will need to be signed by the user Credentials.
   */
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

  /**
   * Completes user login by sending the signed login challenge.
   */
  static async createUserLogin(
    request: CreateUserLoginRequest,
    options: DfnsBaseApiOptions
  ): Promise<UserLoginResponse> {
    const response = await simpleFetch('/auth/login', {
      method: 'POST',
      body: request,
      apiOptions: options,
    })

    return response.json()
  }
  /**
   * Completes user logout by sending the user auth token.
   */
  static async userLogout(options: DfnsBaseApiOptions): Promise<void> {
    if (!options.authToken) {
      throw new Error('authToken is required')
    }
    const response = await simpleFetch('/auth/logout', {
      method: 'PUT',
      apiOptions: options,
    })

    return response.json()
  }

  /**
   * Initiates Registration by creating a challenge that will need to be signed by a new set of Credentials.
   */
  static async createUserRegistrationChallenge(
    request: CreateUserRegistrationChallengeRequest,
    options: DfnsBaseApiOptions
  ): Promise<UserRegistrationChallengeResponse> {
    const response = await simpleFetch('/auth/registration/init', {
      method: 'POST',
      body: request,
      apiOptions: options,
    })

    return response.json()
  }

  /**
   * Completes Registration by sending the signed registration challenge, containing the new Credential identity created.
   */
  static async createUserRegistration(
    request: CreateUserRegistrationRequest,
    options: DfnsBaseApiOptions
  ): Promise<UserRegistrationResponse> {
    const response = await simpleFetch('/auth/registration', {
      method: 'POST',
      body: request,
      apiOptions: options,
    })

    return response.json()
  }

  /**
   * Completes Recovery by sending the signed recovery challenge, containing the new Credential identity created.
   */
  async createUserRecovery(
    request: CreateUserRecoveryRequest,
    options: DfnsBaseApiOptions
  ): Promise<UserRecoveryResponse> {
    const response = await simpleFetch('/auth/recover/user', {
      method: 'POST',
      body: request,
      apiOptions: options,
    })

    return response.json()
  }
}
