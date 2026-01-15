/* eslint @typescript-eslint/no-unused-vars: 0 */

import { DfnsApiClientOptions } from '../../types/generic'
import { simpleFetch } from '../../utils/fetch'
import { userActionFetch } from '../../utils/userActionFetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class NetworksClient {
  constructor(private apiOptions: DfnsApiClientOptions) {}

  async callFunction(request: T.CallFunctionRequest): Promise<T.CallFunctionResponse> {
    const path = buildPathAndQuery('/networks/:network/call-function', {
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

  async createCantonValidator(request: T.CreateCantonValidatorRequest): Promise<T.CreateCantonValidatorResponse> {
    const path = buildPathAndQuery('/networks/:network/validators', {
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

  async deleteCantonValidator(request: T.DeleteCantonValidatorRequest): Promise<T.DeleteCantonValidatorResponse> {
    const path = buildPathAndQuery('/networks/:network/validators/:validatorId', {
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

  async getCantonValidator(request: T.GetCantonValidatorRequest): Promise<T.GetCantonValidatorResponse> {
    const path = buildPathAndQuery('/networks/:network/validators/:validatorId', {
      path: request ?? {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async getFees(request?: T.GetFeesRequest): Promise<T.GetFeesResponse> {
    const path = buildPathAndQuery('/networks/fees', {
      path: request ?? {},
      query: request?.query ?? {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listCantonValidators(request: T.ListCantonValidatorsRequest): Promise<T.ListCantonValidatorsResponse> {
    const path = buildPathAndQuery('/networks/:network/validators', {
      path: request ?? {},
      query: request.query ?? {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async updateCantonValidator(request: T.UpdateCantonValidatorRequest): Promise<T.UpdateCantonValidatorResponse> {
    const path = buildPathAndQuery('/networks/:network/validators/:validatorId', {
      path: request ?? {},
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'PUT',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }
}
