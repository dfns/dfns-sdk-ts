import { CredentialStore } from './store'
import { CredentialSigner } from './signer'
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

export type DfnsAuthenticatorOptions = Omit<DfnsBaseApiOptions, 'accessToken'> & {
  signer: CredentialSigner & Partial<CredentialStore>
}

export class DfnsAuthenticator {
  private api: BaseAuthApi

  constructor(private apiOptions: DfnsAuthenticatorOptions) {}

  async login(request: LoginRequest): Promise<LoginResponse> {
    const { challenge, challengeIdentifier, allowCredentials } = await BaseAuthApi.createUserLoginChallenge(
      request,
      this.apiOptions
    )
    const assertion = await this.apiOptions.signer.sign(challenge, allowCredentials)
    return BaseAuthApi.createUserLogin(
      {
        challengeIdentifier,
        firstFactor: assertion,
      },
      this.apiOptions
    )
  }

  async register(request: RegisterRequest): Promise<RegisterResponse> {
    if (!this.apiOptions.signer.create) {
      throw new Error(`Provided signer does not implement 'create'`)
    }

    const challenge = await BaseAuthApi.createUserRegistrationChallenge(request, this.apiOptions)
    const attestation = await this.apiOptions.signer.create(challenge)
    return BaseAuthApi.createUserRegistration(
      { firstFactorCredential: attestation },
      {
        ...this.apiOptions,
        accessToken: challenge.temporaryAuthenticationToken,
      }
    )
  }
}
