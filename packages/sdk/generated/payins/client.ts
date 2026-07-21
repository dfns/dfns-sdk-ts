/* eslint @typescript-eslint/no-unused-vars: 0 */

import { DfnsApiClientOptions } from '../../types/generic'
import { simpleFetch } from '../../utils/fetch'
import { userActionFetch } from '../../utils/userActionFetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class PayinsClient {
  constructor(private apiOptions: DfnsApiClientOptions) {}

  async createPayin(request: T.CreatePayinRequest): Promise<T.CreatePayinResponse> {
    const path = buildPathAndQuery('/payins', {
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

  async createPayinRecipient(request: T.CreatePayinRecipientRequest): Promise<T.CreatePayinRecipientResponse> {
    const path = buildPathAndQuery('/payins/recipients', {
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

  async getPayin(request: T.GetPayinRequest): Promise<T.GetPayinResponse> {
    const path = buildPathAndQuery('/payins/:payinId', {
      path: request ?? {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
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

  async listPayinBalances(request?: T.ListPayinBalancesRequest): Promise<T.ListPayinBalancesResponse> {
    const path = buildPathAndQuery('/payins/balances', {
      path: request ?? {},
      query: request?.query ?? {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listPayins(request?: T.ListPayinsRequest): Promise<T.ListPayinsResponse> {
    const path = buildPathAndQuery('/payins', {
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
