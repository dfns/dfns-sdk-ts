/* eslint @typescript-eslint/no-unused-vars: 0 */

import { DfnsApiClientOptions } from '../../types/generic'
import { simpleFetch } from '../../utils/fetch'
import { userActionFetch } from '../../utils/userActionFetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class SwapsClient {
  constructor(private apiOptions: DfnsApiClientOptions) {}

  async createSwap(request: T.CreateSwapRequest): Promise<T.CreateSwapResponse> {
    const path = buildPathAndQuery('/swaps', {
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

  async createSwapQuote(request: T.CreateSwapQuoteRequest): Promise<T.CreateSwapQuoteResponse> {
    const path = buildPathAndQuery('/swaps/quotes', {
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
