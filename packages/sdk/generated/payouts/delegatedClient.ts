import { BaseAuthApi, SignUserActionChallengeRequest, UserActionChallengeResponse } from '../../baseAuthApi'
import { DfnsDelegatedApiClientOptions } from '../../dfnsDelegatedApiClient'
import { simpleFetch } from '../../utils/fetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class DelegatedPayoutsClient {
  constructor(private apiOptions: DfnsDelegatedApiClientOptions) {}

  async createPayoutInit(request: T.CreatePayoutRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/payouts', {
      path: request ?? {},
      query: {},
    })
    const userActionHttpPath = new URL(path, 'https://dfns.invalid').pathname

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'POST',
        userActionHttpPath,
        userActionPayload: JSON.stringify(request.body),
        userActionServerKind: 'Api',
      },
      this.apiOptions
    )

    return challenge
  }

  async createPayoutComplete(
    request: T.CreatePayoutRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreatePayoutResponse> {
    const path = buildPathAndQuery('/payouts', {
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

  async createPayoutActionInit(request: T.CreatePayoutActionRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/payouts/:payoutId/action', {
      path: request ?? {},
      query: {},
    })
    const userActionHttpPath = new URL(path, 'https://dfns.invalid').pathname

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'POST',
        userActionHttpPath,
        userActionPayload: JSON.stringify(request.body),
        userActionServerKind: 'Api',
      },
      this.apiOptions
    )

    return challenge
  }

  async createPayoutActionComplete(
    request: T.CreatePayoutActionRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreatePayoutActionResponse> {
    const path = buildPathAndQuery('/payouts/:payoutId/action', {
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

  async createPayoutQuote(request: T.CreatePayoutQuoteRequest): Promise<T.CreatePayoutQuoteResponse> {
    const path = buildPathAndQuery('/payouts/quote', {
      path: request ?? {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'POST',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async getPayout(request: T.GetPayoutRequest): Promise<T.GetPayoutResponse> {
    const path = buildPathAndQuery('/payouts/:payoutId', {
      path: request ?? {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listPayouts(request?: T.ListPayoutsRequest): Promise<T.ListPayoutsResponse> {
    const path = buildPathAndQuery('/payouts', {
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
