import { BaseAuthApi, SignUserActionChallengeRequest, UserActionChallengeResponse } from '../../baseAuthApi'
import { DfnsDelegatedApiClientOptions } from '../../dfnsDelegatedApiClient'
import { simpleFetch } from '../../utils/fetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class DelegatedAddressWatchesClient {
  constructor(private apiOptions: DfnsDelegatedApiClientOptions) {}

  async createAddressWatchInit(request: T.CreateAddressWatchRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/address-watches', {
      path: request ?? {},
      query: {},
    })
    const userActionHttpPath = new URL(path, 'https://dfns.invalid').pathname

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'POST',
        userActionHttpPath,
        userActionPayload: JSON.stringify(request.body),
        userActionServerKind: 'Api',
      },
      this.apiOptions
    )

    return challenge
  }

  async createAddressWatchComplete(
    request: T.CreateAddressWatchRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreateAddressWatchResponse> {
    const path = buildPathAndQuery('/address-watches', {
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

  async deleteAddressWatchInit(request: T.DeleteAddressWatchRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/address-watches/:addressWatchId', {
      path: request ?? {},
      query: {},
    })
    const userActionHttpPath = new URL(path, 'https://dfns.invalid').pathname

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'DELETE',
        userActionHttpPath,
        userActionPayload: JSON.stringify({}),
        userActionServerKind: 'Api',
      },
      this.apiOptions
    )

    return challenge
  }

  async deleteAddressWatchComplete(
    request: T.DeleteAddressWatchRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.DeleteAddressWatchResponse> {
    const path = buildPathAndQuery('/address-watches/:addressWatchId', {
      path: request ?? {},
      query: {},
    })

    const { userAction } = await BaseAuthApi.signUserActionChallenge(
      signedChallenge,
      this.apiOptions
    )

    const response = await simpleFetch(path, {
      method: 'DELETE',
      body: {},
      headers: { 'x-dfns-useraction': userAction },
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
