import { BaseAuthApi, SignUserActionChallengeRequest, UserActionChallengeResponse } from '../../baseAuthApi'
import { DfnsDelegatedApiClientOptions } from '../../dfnsDelegatedApiClient'
import { simpleFetch } from '../../utils/fetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class DelegatedSwapsClient {
  constructor(private apiOptions: DfnsDelegatedApiClientOptions) {}

  async createSwapInit(request: T.CreateSwapRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/swaps', {
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

  async createSwapComplete(
    request: T.CreateSwapRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreateSwapResponse> {
    const path = buildPathAndQuery('/swaps', {
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

  async createSwapQuote(request: T.CreateSwapQuoteRequest): Promise<T.CreateSwapQuoteResponse> {
    const path = buildPathAndQuery('/swaps/quotes', {
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

  async getSwap(request: T.GetSwapRequest): Promise<T.GetSwapResponse> {
    const path = buildPathAndQuery('/swaps/:swapId', {
      path: request ?? {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async getSwapQuote(request: T.GetSwapQuoteRequest): Promise<T.GetSwapQuoteResponse> {
    const path = buildPathAndQuery('/swaps/quotes/:quoteId', {
      path: request ?? {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listSwaps(request?: T.ListSwapsRequest): Promise<T.ListSwapsResponse> {
    const path = buildPathAndQuery('/swaps', {
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
