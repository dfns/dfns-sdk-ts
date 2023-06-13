import { BaseAuthApi, CreateUserLoginChallengeRequest, UserLoginResponse } from './baseAuthApi'
import { DfnsApiClientOptions } from './dfnsApiClient'

export type LoginRequest = CreateUserLoginChallengeRequest

export type LoginResponse = UserLoginResponse

export type DfnsAuthenticatorOptions = Omit<DfnsApiClientOptions, 'accessToken'>

export class DfnsAuthenticator {
  private api: BaseAuthApi

  constructor(private apiOptions: DfnsAuthenticatorOptions) {}

  async login(request: LoginRequest): Promise<LoginResponse> {
    const { challenge, challengeIdentifier, allowCredentials } = await BaseAuthApi.createUserLoginChallenge(
      request,
      this.apiOptions
    )
    const assertions = await this.apiOptions.signer.sign(challenge, allowCredentials)
    return BaseAuthApi.signUserLoginChallenge(
      {
        challengeIdentifier,
        ...assertions,
      },
      this.apiOptions
    )
  }
}
