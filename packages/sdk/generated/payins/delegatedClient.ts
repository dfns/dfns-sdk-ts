import { BaseAuthApi, SignUserActionChallengeRequest, UserActionChallengeResponse } from '../../baseAuthApi'
import { DfnsDelegatedApiClientOptions } from '../../dfnsDelegatedApiClient'
import { simpleFetch } from '../../utils/fetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class DelegatedPayinsClient {
  constructor(private apiOptions: DfnsDelegatedApiClientOptions) {}

  async createPayinRecipientInit(request: T.CreatePayinRecipientRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/payins/recipients', {
      path: request ?? {},
      query: {},
    })

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'POST',
        userActionHttpPath: path,
        userActionPayload: JSON.stringify(request.body),
        userActionServerKind: 'Api',
      },
      this.apiOptions
    )

    return challenge
  }

  async createPayinRecipientComplete(
    request: T.CreatePayinRecipientRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreatePayinRecipientResponse> {
    const path = buildPathAndQuery('/payins/recipients', {
      path: request ?? {},
      query: {},
    })

    const { userAction } = await BaseAuthApi.signUserActionChallenge(
      signedChallenge,
      this.apiOptions
    )

    const response = await simpleFetch(path, {
      method: 'POST',
      body: request.body,
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async getPayinRecipient(request?: T.GetPayinRecipientRequest): Promise<T.GetPayinRecipientResponse> {
    const path = buildPathAndQuery('/payins/recipients', {
      path: request ?? {},
      query: request?.query ?? {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }
}
