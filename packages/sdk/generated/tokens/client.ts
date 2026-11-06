/* eslint @typescript-eslint/no-unused-vars: 0 */

import { DfnsApiClientOptions } from '../../types/generic'
import { simpleFetch } from '../../utils/fetch'
import { userActionFetch } from '../../utils/userActionFetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class TokensClient {
  constructor(private apiOptions: DfnsApiClientOptions) {}

  async addTokenAgent(request: T.AddTokenAgentRequest): Promise<T.AddTokenAgentResponse> {
    const path = buildPathAndQuery('/tokens/:tokenId/add-agent', {
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

  async burnToken(request: T.BurnTokenRequest): Promise<T.BurnTokenResponse> {
    const path = buildPathAndQuery('/tokens/:tokenId/burn', {
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

  async createToken(request: T.CreateTokenRequest): Promise<T.CreateTokenResponse> {
    const path = buildPathAndQuery('/tokens', {
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

  async forceTransferToken(request: T.ForceTransferTokenRequest): Promise<T.ForceTransferTokenResponse> {
    const path = buildPathAndQuery('/tokens/:tokenId/force-transfer', {
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

  async freezeTokenAccount(request: T.FreezeTokenAccountRequest): Promise<T.FreezeTokenAccountResponse> {
    const path = buildPathAndQuery('/tokens/:tokenId/freeze-account', {
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

  async getToken(request: T.GetTokenRequest): Promise<T.GetTokenResponse> {
    const path = buildPathAndQuery('/tokens/:tokenId', {
      path: request ?? {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async getTokenAction(request: T.GetTokenActionRequest): Promise<T.GetTokenActionResponse> {
    const path = buildPathAndQuery('/tokens/:tokenId/actions/:tokenActionId', {
      path: request ?? {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listTokenActions(request: T.ListTokenActionsRequest): Promise<T.ListTokenActionsResponse> {
    const path = buildPathAndQuery('/tokens/:tokenId/actions', {
      path: request ?? {},
      query: request.query ?? {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listTokens(request?: T.ListTokensRequest): Promise<T.ListTokensResponse> {
    const path = buildPathAndQuery('/tokens', {
      path: request ?? {},
      query: request?.query ?? {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async mintToken(request: T.MintTokenRequest): Promise<T.MintTokenResponse> {
    const path = buildPathAndQuery('/tokens/:tokenId/mint', {
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

  async pauseToken(request: T.PauseTokenRequest): Promise<T.PauseTokenResponse> {
    const path = buildPathAndQuery('/tokens/:tokenId/pause', {
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

  async removeTokenAgent(request: T.RemoveTokenAgentRequest): Promise<T.RemoveTokenAgentResponse> {
    const path = buildPathAndQuery('/tokens/:tokenId/remove-agent', {
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

  async unfreezeTokenAccount(request: T.UnfreezeTokenAccountRequest): Promise<T.UnfreezeTokenAccountResponse> {
    const path = buildPathAndQuery('/tokens/:tokenId/unfreeze-account', {
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

  async unpauseToken(request: T.UnpauseTokenRequest): Promise<T.UnpauseTokenResponse> {
    const path = buildPathAndQuery('/tokens/:tokenId/unpause', {
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
}
