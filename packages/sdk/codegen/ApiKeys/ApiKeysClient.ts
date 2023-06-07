import { DfnsApiOptions } from '../../dfnsApiClient'
import { Fetch, userActionFetch } from '../../utils/fetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class ApiKeysClient {
  private fetch: Fetch

  constructor(private apiOptions: DfnsApiOptions) {
    this.fetch = userActionFetch
  }

  async createApiKey(
    request: T.CreateApiKeyRequest
  ): Promise<T.CreateApiKeyResponse> {
    const path = buildPathAndQuery('/api-keys', {
      path: {},
      query: {},
    })

    const response = await this.fetch(path, {
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

    const response = await this.fetch(path, {
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

    const response = await this.fetch(path, {
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

    const response = await this.fetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }
}
