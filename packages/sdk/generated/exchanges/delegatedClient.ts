import { BaseAuthApi, SignUserActionChallengeRequest, UserActionChallengeResponse } from '../../baseAuthApi'
import { DfnsDelegatedApiClientOptions } from '../../dfnsDelegatedApiClient'
import { simpleFetch } from '../../utils/fetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class DelegatedExchangesClient {
  constructor(private apiOptions: DfnsDelegatedApiClientOptions) {}

  async createDepositInit(request: T.CreateDepositRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/exchanges/:exchangeId/accounts/:accountId/deposits', {
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

  async createDepositComplete(
    request: T.CreateDepositRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreateDepositResponse> {
    const path = buildPathAndQuery('/exchanges/:exchangeId/accounts/:accountId/deposits', {
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

  async createExchangeInit(request: T.CreateExchangeRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/exchanges', {
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

  async createExchangeComplete(
    request: T.CreateExchangeRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreateExchangeResponse> {
    const path = buildPathAndQuery('/exchanges', {
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

  async createWithdrawalInit(request: T.CreateWithdrawalRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/exchanges/:exchangeId/accounts/:accountId/withdrawals', {
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

  async createWithdrawalComplete(
    request: T.CreateWithdrawalRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreateWithdrawalResponse> {
    const path = buildPathAndQuery('/exchanges/:exchangeId/accounts/:accountId/withdrawals', {
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

  async deleteExchangeInit(request: T.DeleteExchangeRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/exchanges/:exchangeId', {
      path: request ?? {},
      query: {},
    })

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'DELETE',
        userActionHttpPath: path,
        userActionPayload: JSON.stringify({}),
        userActionServerKind: 'Api',
      },
      this.apiOptions
    )

    return challenge
  }

  async deleteExchangeComplete(
    request: T.DeleteExchangeRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.DeleteExchangeResponse> {
    const path = buildPathAndQuery('/exchanges/:exchangeId', {
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

  async getExchange(request: T.GetExchangeRequest): Promise<T.GetExchangeResponse> {
    const path = buildPathAndQuery('/exchanges/:exchangeId', {
      path: request ?? {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listAccountAssets(request: T.ListAccountAssetsRequest): Promise<T.ListAccountAssetsResponse> {
    const path = buildPathAndQuery('/exchanges/:exchangeId/accounts/:accountId/assets', {
      path: request ?? {},
      query: request.query ?? {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listAccounts(request: T.ListAccountsRequest): Promise<T.ListAccountsResponse> {
    const path = buildPathAndQuery('/exchanges/:exchangeId/accounts', {
      path: request ?? {},
      query: request.query ?? {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listExchanges(request?: T.ListExchangesRequest): Promise<T.ListExchangesResponse> {
    const path = buildPathAndQuery('/exchanges', {
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
