/* eslint @typescript-eslint/no-unused-vars: 0 */

import { DfnsApiClientOptions } from '../../types/generic'
import { simpleFetch } from '../../utils/fetch'
import { userActionFetch } from '../../utils/userActionFetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class AddressWatchesClient {
  constructor(private apiOptions: DfnsApiClientOptions) {}

  async createAddressWatch(request: T.CreateAddressWatchRequest): Promise<T.CreateAddressWatchResponse> {
    const path = buildPathAndQuery('/address-watches', {
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

  async getAddressWatch(request: T.GetAddressWatchRequest): Promise<T.GetAddressWatchResponse> {
    const path = buildPathAndQuery('/address-watches/:addressWatchId', {
      path: request ?? {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async getAddressWatchAssets(request: T.GetAddressWatchAssetsRequest): Promise<T.GetAddressWatchAssetsResponse> {
    const path = buildPathAndQuery('/address-watches/:addressWatchId/assets', {
      path: request ?? {},
      query: request.query ?? {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async getAddressWatchBlockchainEvents(request: T.GetAddressWatchBlockchainEventsRequest): Promise<T.GetAddressWatchBlockchainEventsResponse> {
    const path = buildPathAndQuery('/address-watches/:addressWatchId/blockchain-events', {
      path: request ?? {},
      query: request.query ?? {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async getAddressWatchHistory(request: T.GetAddressWatchHistoryRequest): Promise<T.GetAddressWatchHistoryResponse> {
    const path = buildPathAndQuery('/address-watches/:addressWatchId/history', {
      path: request ?? {},
      query: request.query ?? {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listAddressWatches(request?: T.ListAddressWatchesRequest): Promise<T.ListAddressWatchesResponse> {
    const path = buildPathAndQuery('/address-watches', {
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
