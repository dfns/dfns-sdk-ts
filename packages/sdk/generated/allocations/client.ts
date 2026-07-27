/* eslint @typescript-eslint/no-unused-vars: 0 */

import { DfnsApiClientOptions } from '../../types/generic'
import { simpleFetch } from '../../utils/fetch'
import { userActionFetch } from '../../utils/userActionFetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class AllocationsClient {
  constructor(private apiOptions: DfnsApiClientOptions) {}

  async createAllocation(request: T.CreateAllocationRequest): Promise<T.CreateAllocationResponse> {
    const path = buildPathAndQuery('/allocations', {
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

  async createAllocationAction(request: T.CreateAllocationActionRequest): Promise<T.CreateAllocationActionResponse> {
    const path = buildPathAndQuery('/allocations/:allocationId/actions', {
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

  async getAllocation(request: T.GetAllocationRequest): Promise<T.GetAllocationResponse> {
    const path = buildPathAndQuery('/allocations/:allocationId', {
      path: request ?? {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async getAllocationsInfo(): Promise<T.GetAllocationsInfoResponse> {
    const path = buildPathAndQuery('/allocations/info', {
      path: {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listAllocationActions(request: T.ListAllocationActionsRequest): Promise<T.ListAllocationActionsResponse> {
    const path = buildPathAndQuery('/allocations/:allocationId/actions', {
      path: request ?? {},
      query: request.query ?? {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listAllocations(request?: T.ListAllocationsRequest): Promise<T.ListAllocationsResponse> {
    const path = buildPathAndQuery('/allocations', {
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
