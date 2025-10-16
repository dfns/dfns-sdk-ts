import { BaseAuthApi, SignUserActionChallengeRequest, UserActionChallengeResponse } from '../../baseAuthApi'
import { DfnsDelegatedApiClientOptions } from '../../dfnsDelegatedApiClient'
import { simpleFetch } from '../../utils/fetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class DelegatedYieldsClient {
  constructor(private apiOptions: DfnsDelegatedApiClientOptions) {}

  async createYieldInit(request: T.CreateYieldRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/yields', {
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

  async createYieldComplete(
    request: T.CreateYieldRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreateYieldResponse> {
    const path = buildPathAndQuery('/yields', {
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

  async createYieldActionInit(request: T.CreateYieldActionRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/yields/:yieldId/actions', {
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

  async createYieldActionComplete(
    request: T.CreateYieldActionRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreateYieldActionResponse> {
    const path = buildPathAndQuery('/yields/:yieldId/actions', {
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
