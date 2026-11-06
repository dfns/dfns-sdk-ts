import { BaseAuthApi, SignUserActionChallengeRequest, UserActionChallengeResponse } from '../../baseAuthApi'
import { DfnsDelegatedApiClientOptions } from '../../dfnsDelegatedApiClient'
import { simpleFetch } from '../../utils/fetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class DelegatedTokensClient {
  constructor(private apiOptions: DfnsDelegatedApiClientOptions) {}

  async addTokenAgentInit(request: T.AddTokenAgentRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/tokens/:tokenId/add-agent', {
      path: request ?? {},
      query: {},
    })
    const userActionHttpPath = new URL(path, 'https://dfns.invalid').pathname

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'POST',
        userActionHttpPath,
        userActionPayload: JSON.stringify(request.body),
      },
      this.apiOptions
    )

    return challenge
  }

  async addTokenAgentComplete(
    request: T.AddTokenAgentRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.AddTokenAgentResponse> {
    const path = buildPathAndQuery('/tokens/:tokenId/add-agent', {
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

  async burnTokenInit(request: T.BurnTokenRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/tokens/:tokenId/burn', {
      path: request ?? {},
      query: {},
    })
    const userActionHttpPath = new URL(path, 'https://dfns.invalid').pathname

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'POST',
        userActionHttpPath,
        userActionPayload: JSON.stringify(request.body),
      },
      this.apiOptions
    )

    return challenge
  }

  async burnTokenComplete(
    request: T.BurnTokenRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.BurnTokenResponse> {
    const path = buildPathAndQuery('/tokens/:tokenId/burn', {
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

  async createTokenInit(request: T.CreateTokenRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/tokens', {
      path: request ?? {},
      query: {},
    })
    const userActionHttpPath = new URL(path, 'https://dfns.invalid').pathname

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'POST',
        userActionHttpPath,
        userActionPayload: JSON.stringify(request.body),
      },
      this.apiOptions
    )

    return challenge
  }

  async createTokenComplete(
    request: T.CreateTokenRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreateTokenResponse> {
    const path = buildPathAndQuery('/tokens', {
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

  async forceTransferTokenInit(request: T.ForceTransferTokenRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/tokens/:tokenId/force-transfer', {
      path: request ?? {},
      query: {},
    })
    const userActionHttpPath = new URL(path, 'https://dfns.invalid').pathname

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'POST',
        userActionHttpPath,
        userActionPayload: JSON.stringify(request.body),
      },
      this.apiOptions
    )

    return challenge
  }

  async forceTransferTokenComplete(
    request: T.ForceTransferTokenRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.ForceTransferTokenResponse> {
    const path = buildPathAndQuery('/tokens/:tokenId/force-transfer', {
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

  async freezeTokenAccountInit(request: T.FreezeTokenAccountRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/tokens/:tokenId/freeze-account', {
      path: request ?? {},
      query: {},
    })
    const userActionHttpPath = new URL(path, 'https://dfns.invalid').pathname

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'POST',
        userActionHttpPath,
        userActionPayload: JSON.stringify(request.body),
      },
      this.apiOptions
    )

    return challenge
  }

  async freezeTokenAccountComplete(
    request: T.FreezeTokenAccountRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.FreezeTokenAccountResponse> {
    const path = buildPathAndQuery('/tokens/:tokenId/freeze-account', {
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

  async mintTokenInit(request: T.MintTokenRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/tokens/:tokenId/mint', {
      path: request ?? {},
      query: {},
    })
    const userActionHttpPath = new URL(path, 'https://dfns.invalid').pathname

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'POST',
        userActionHttpPath,
        userActionPayload: JSON.stringify(request.body),
      },
      this.apiOptions
    )

    return challenge
  }

  async mintTokenComplete(
    request: T.MintTokenRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.MintTokenResponse> {
    const path = buildPathAndQuery('/tokens/:tokenId/mint', {
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

  async pauseTokenInit(request: T.PauseTokenRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/tokens/:tokenId/pause', {
      path: request ?? {},
      query: {},
    })
    const userActionHttpPath = new URL(path, 'https://dfns.invalid').pathname

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'POST',
        userActionHttpPath,
        userActionPayload: JSON.stringify(request.body),
      },
      this.apiOptions
    )

    return challenge
  }

  async pauseTokenComplete(
    request: T.PauseTokenRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.PauseTokenResponse> {
    const path = buildPathAndQuery('/tokens/:tokenId/pause', {
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

  async removeTokenAgentInit(request: T.RemoveTokenAgentRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/tokens/:tokenId/remove-agent', {
      path: request ?? {},
      query: {},
    })
    const userActionHttpPath = new URL(path, 'https://dfns.invalid').pathname

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'POST',
        userActionHttpPath,
        userActionPayload: JSON.stringify(request.body),
      },
      this.apiOptions
    )

    return challenge
  }

  async removeTokenAgentComplete(
    request: T.RemoveTokenAgentRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.RemoveTokenAgentResponse> {
    const path = buildPathAndQuery('/tokens/:tokenId/remove-agent', {
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

  async unfreezeTokenAccountInit(request: T.UnfreezeTokenAccountRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/tokens/:tokenId/unfreeze-account', {
      path: request ?? {},
      query: {},
    })
    const userActionHttpPath = new URL(path, 'https://dfns.invalid').pathname

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'POST',
        userActionHttpPath,
        userActionPayload: JSON.stringify(request.body),
      },
      this.apiOptions
    )

    return challenge
  }

  async unfreezeTokenAccountComplete(
    request: T.UnfreezeTokenAccountRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.UnfreezeTokenAccountResponse> {
    const path = buildPathAndQuery('/tokens/:tokenId/unfreeze-account', {
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

  async unpauseTokenInit(request: T.UnpauseTokenRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/tokens/:tokenId/unpause', {
      path: request ?? {},
      query: {},
    })
    const userActionHttpPath = new URL(path, 'https://dfns.invalid').pathname

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'POST',
        userActionHttpPath,
        userActionPayload: JSON.stringify(request.body),
      },
      this.apiOptions
    )

    return challenge
  }

  async unpauseTokenComplete(
    request: T.UnpauseTokenRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.UnpauseTokenResponse> {
    const path = buildPathAndQuery('/tokens/:tokenId/unpause', {
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
}
