import { BaseAuthApi, SignUserActionChallengeRequest, UserActionChallengeResponse } from '../../baseAuthApi'
import { DfnsDelegatedApiClientOptions } from '../../dfnsDelegatedApiClient'
import { simpleFetch } from '../../utils/fetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class DelegatedAgreementsClient {
  constructor(private apiOptions: DfnsDelegatedApiClientOptions) {}

  async getLatestUnacceptedAgreement(request?: T.GetLatestUnacceptedAgreementRequest): Promise<T.GetLatestUnacceptedAgreementResponse> {
    const path = buildPathAndQuery('/agreements/latest-unaccepted', {
      path: request ?? {},
      query: request?.query ?? {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async recordAgreementAcceptanceInit(request: T.RecordAgreementAcceptanceRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/agreements/:agreementId/accept', {
      path: request ?? {},
      query: {},
    })

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'POST',
        userActionHttpPath: path,
        userActionPayload: JSON.stringify({}),
        userActionServerKind: 'Api',
      },
      this.apiOptions
    )

    return challenge
  }

  async recordAgreementAcceptanceComplete(
    request: T.RecordAgreementAcceptanceRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.RecordAgreementAcceptanceResponse> {
    const path = buildPathAndQuery('/agreements/:agreementId/accept', {
      path: request ?? {},
      query: {},
    })

    const { userAction } = await BaseAuthApi.signUserActionChallenge(
      signedChallenge,
      this.apiOptions
    )

    const response = await simpleFetch(path, {
      method: 'POST',
      body: {},
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }
}
