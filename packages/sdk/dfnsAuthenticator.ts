import { KeyStore } from './keyStore'
import { Signer } from './signer'
import {
  BaseAuthApi,
  CreateUserLoginChallengeRequest,
  CreateUserRegistrationChallengeRequest,
  DfnsBaseApiOptions,
  UserLoginResponse,
  UserRegistrationResponse,
} from './baseAuthApi'

export type LoginRequest = CreateUserLoginChallengeRequest

export type LoginResponse = UserLoginResponse

export type RegisterRequest = CreateUserRegistrationChallengeRequest

export type RegisterResponse = UserRegistrationResponse

export type DfnsAuthenticatorOptions = Omit<DfnsBaseApiOptions, 'accessToken'> & { signer: Signer & Partial<KeyStore> }

export class DfnsAuthenticator {
  private api: BaseAuthApi

  constructor(private apiOptions: DfnsAuthenticatorOptions) {}

  async login(request: LoginRequest): Promise<LoginResponse> {
    const { challenge, challengeIdentifier, allowCredentials } = await BaseAuthApi.createUserLoginChallenge(
      request,
      this.apiOptions
    )
    const assertions = await this.apiOptions.signer.sign(challenge, allowCredentials)
    return BaseAuthApi.createUserLogin(
      {
        challengeIdentifier,
        ...assertions,
      },
      this.apiOptions
    )
  }

  async register(request: RegisterRequest): Promise<RegisterResponse> {
    if (!this.apiOptions.signer.create) {
      throw new Error(`Provided signer does not implement 'create'`)
    }

    const challenge = await BaseAuthApi.createUserRegistrationChallenge(request, this.apiOptions)
    const attestations = await this.apiOptions.signer.create(challenge)
    return BaseAuthApi.createUserRegistration(attestations, {
      ...this.apiOptions,
      accessToken: challenge.temporaryAuthenticationToken,
    })
  }
}
