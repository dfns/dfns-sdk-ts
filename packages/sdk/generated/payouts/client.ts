/* eslint @typescript-eslint/no-unused-vars: 0 */

import { DfnsApiClientOptions } from '../../types/generic'
import { simpleFetch } from '../../utils/fetch'
import { userActionFetch } from '../../utils/userActionFetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class PayoutsClient {
  constructor(private apiOptions: DfnsApiClientOptions) {}

  async createPayout(request: T.CreatePayoutRequest): Promise<T.CreatePayoutResponse> {
    const path = buildPathAndQuery('/payouts', {
      path: request ?? {},
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'POST',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async createPayoutAction(request: T.CreatePayoutActionRequest): Promise<T.CreatePayoutActionResponse> {
    const path = buildPathAndQuery('/payouts/:payoutId/action', {
      path: request ?? {},
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'POST',
      body: request.body,
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
}
