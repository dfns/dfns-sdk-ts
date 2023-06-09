import {
  BaseAuthApi,
  SignUserActionChallengeRequest,
  UserActionChallengeResponse,
} from '../../baseAuthApi'
import { DfnsDelegatedApiClientOptions } from '../../dfnsDelegatedApiClient'
import { Fetch, preflightFetch } from '../../utils/fetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class DelegatedApiKeysClient {
  private fetch: Fetch
  private authApi: BaseAuthApi

  constructor(private apiOptions: DfnsDelegatedApiClientOptions) {
    this.fetch = preflightFetch
    this.authApi = new BaseAuthApi(apiOptions)
  }

  async createApiKeyInit(
    request: T.CreateApiKeyRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/api-keys', {
      path: {},
      query: {},
    })

    const challenge = await this.authApi.createUserActionChallenge({
      userActionHttpMethod: 'POST',
      userActionHttpPath: path,
      userActionPayload: JSON.stringify(request.body),
      userActionServerKind: 'Api',
    })

    return challenge
  }

  async createApiKeyComplete(
    request: T.CreateApiKeyRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreateApiKeyResponse> {
    const path = buildPathAndQuery('/api-keys', {
      path: {},
      query: {},
    })

    const { userAction } = await this.authApi.signUserActionChallenge(
      signedChallenge
    )

    const response = await this.fetch(path, {
      method: 'POST',
      body: request.body,
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listApiKeys(): Promise<T.ListApiKeysResponse> {
    const path = buildPathAndQuery('/api-keys', {
      path: {},
      query: {},
    })

    const response = await this.fetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async revokeApiKeyInit(
    request: T.RevokeApiKeyRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/api-keys/:apiKeyId', {
      path: { apiKeyId: request.apiKeyId },
      query: {},
    })

    const challenge = await this.authApi.createUserActionChallenge({
      userActionHttpMethod: 'DELETE',
      userActionHttpPath: path,
      userActionPayload: JSON.stringify({}),
      userActionServerKind: 'Api',
    })

    return challenge
  }

  async revokeApiKeyComplete(
    request: T.RevokeApiKeyRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.RevokeApiKeyResponse> {
    const path = buildPathAndQuery('/api-keys/:apiKeyId', {
      path: { apiKeyId: request.apiKeyId },
      query: {},
    })

    const { userAction } = await this.authApi.signUserActionChallenge(
      signedChallenge
    )

    const response = await this.fetch(path, {
      method: 'DELETE',
      body: {},
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async getApiKeyById(
    request: T.GetApiKeyByIdRequest
  ): Promise<T.GetApiKeyByIdResponse> {
    const path = buildPathAndQuery('/api-keys/:apiKeyId', {
      path: { apiKeyId: request.apiKeyId },
      query: {},
    })

    const response = await this.fetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }
}
