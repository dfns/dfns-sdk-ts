import { BaseAuthApi, CreateUserLoginChallengeRequest, UserLoginResponse } from './baseAuthApi'
import { DfnsApiOptions } from './dfnsApiClient'

export type LoginRequest = CreateUserLoginChallengeRequest

export type LoginResponse = UserLoginResponse

export class DfnsAuthenticator {
  private api: BaseAuthApi

  constructor(private apiOptions: DfnsApiOptions) {
    this.api = new BaseAuthApi(apiOptions)
  }

  async login(request: LoginRequest): Promise<LoginResponse> {
    const { challenge, challengeIdentifier, allowCredentials } = await this.api.createUserLoginChallenge(request)
    const assertions = await this.apiOptions.signer.sign(challenge, allowCredentials)
    return this.api.signUserLoginChallenge({
      challengeIdentifier,
      ...assertions,
    })
  }
}
