/* eslint @typescript-eslint/no-unused-vars: 0 */

import { DfnsApiClientOptions } from '../../types/generic'
import { simpleFetch } from '../../utils/fetch'
import { userActionFetch } from '../../utils/userActionFetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class FeeSponsorsClient {
  constructor(private apiOptions: DfnsApiClientOptions) {}

  async activateFeeSponsor(request: T.ActivateFeeSponsorRequest): Promise<T.ActivateFeeSponsorResponse> {
    const path = buildPathAndQuery('/fee-sponsors/:feeSponsorId/activate', {
      path: request ?? {},
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'PUT',
      body: {},
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async createFeeSponsor(request: T.CreateFeeSponsorRequest): Promise<T.CreateFeeSponsorResponse> {
    const path = buildPathAndQuery('/fee-sponsors', {
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

  async deactivateFeeSponsor(request: T.DeactivateFeeSponsorRequest): Promise<T.DeactivateFeeSponsorResponse> {
    const path = buildPathAndQuery('/fee-sponsors/:feeSponsorId/deactivate', {
      path: request ?? {},
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'PUT',
      body: {},
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async deleteFeeSponsor(request: T.DeleteFeeSponsorRequest): Promise<T.DeleteFeeSponsorResponse> {
    const path = buildPathAndQuery('/fee-sponsors/:feeSponsorId', {
      path: request ?? {},
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'DELETE',
      body: {},
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async getFeeSponsor(request: T.GetFeeSponsorRequest): Promise<T.GetFeeSponsorResponse> {
    const path = buildPathAndQuery('/fee-sponsors/:feeSponsorId', {
      path: request ?? {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listFeeSponsors(request?: T.ListFeeSponsorsRequest): Promise<T.ListFeeSponsorsResponse> {
    const path = buildPathAndQuery('/fee-sponsors', {
      path: request ?? {},
      query: request?.query ?? {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listSponsoredFees(request: T.ListSponsoredFeesRequest): Promise<T.ListSponsoredFeesResponse> {
    const path = buildPathAndQuery('/fee-sponsors/:feeSponsorId/fees', {
      path: request ?? {},
      query: request.query ?? {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }
}
