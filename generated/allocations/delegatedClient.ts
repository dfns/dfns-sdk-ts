import { BaseAuthApi, SignUserActionChallengeRequest, UserActionChallengeResponse } from '../../baseAuthApi'
import { DfnsDelegatedApiClientOptions } from '../../dfnsDelegatedApiClient'
import { simpleFetch } from '../../utils/fetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class DelegatedAllocationsClient {
  constructor(private apiOptions: DfnsDelegatedApiClientOptions) {}

  async createAllocationInit(request: T.CreateAllocationRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/allocations', {
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

  async createAllocationComplete(
    request: T.CreateAllocationRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreateAllocationResponse> {
    const path = buildPathAndQuery('/allocations', {
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

  async createAllocationActionInit(request: T.CreateAllocationActionRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/allocations/:allocationId/actions', {
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

  async createAllocationActionComplete(
    request: T.CreateAllocationActionRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreateAllocationActionResponse> {
    const path = buildPathAndQuery('/allocations/:allocationId/actions', {
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
