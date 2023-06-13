import { DfnsApiClientOptions } from '../../dfnsApiClient'
import { simpleFetch, userActionFetch } from '../../utils/fetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class ApiKeysClient {
  constructor(private apiOptions: DfnsApiClientOptions) {}

  async createApiKey(
    request: T.CreateApiKeyRequest
  ): Promise<T.CreateApiKeyResponse> {
    const path = buildPathAndQuery('/api-keys', {
      path: {},
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'POST',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listApiKeys(): Promise<T.ListApiKeysResponse> {
    const path = buildPathAndQuery('/api-keys', {
      path: {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async revokeApiKey(
    request: T.RevokeApiKeyRequest
  ): Promise<T.RevokeApiKeyResponse> {
    const path = buildPathAndQuery('/api-keys/:apiKeyId', {
      path: { apiKeyId: request.apiKeyId },
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'DELETE',
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

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }
}
