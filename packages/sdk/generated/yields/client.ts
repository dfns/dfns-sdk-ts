/* eslint @typescript-eslint/no-unused-vars: 0 */

import { DfnsApiClientOptions } from '../../types/generic'
import { simpleFetch } from '../../utils/fetch'
import { userActionFetch } from '../../utils/userActionFetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class YieldsClient {
  constructor(private apiOptions: DfnsApiClientOptions) {}

  async createYield(request: T.CreateYieldRequest): Promise<T.CreateYieldResponse> {
    const path = buildPathAndQuery('/yields', {
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

  async createYieldAction(request: T.CreateYieldActionRequest): Promise<T.CreateYieldActionResponse> {
    const path = buildPathAndQuery('/yields/:yieldId/actions', {
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

  async getYield(request: T.GetYieldRequest): Promise<T.GetYieldResponse> {
    const path = buildPathAndQuery('/yields/:yieldId', {
      path: request ?? {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listYieldActions(request: T.ListYieldActionsRequest): Promise<T.ListYieldActionsResponse> {
    const path = buildPathAndQuery('/yields/:yieldId/actions', {
      path: request ?? {},
      query: request.query ?? {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listYields(request?: T.ListYieldsRequest): Promise<T.ListYieldsResponse> {
    const path = buildPathAndQuery('/yields', {
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
