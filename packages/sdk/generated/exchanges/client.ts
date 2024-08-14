import { DfnsApiClientOptions } from '../../dfnsApiClient'
import { simpleFetch, userActionFetch } from '../../utils/fetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class ExchangesClient {
  constructor(private apiOptions: DfnsApiClientOptions) {}

  async createDeposit(request: T.CreateDepositRequest): Promise<T.CreateDepositResponse> {
    const path = buildPathAndQuery('/exchanges/:exchangeId/accounts/:accountId/deposits', {
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

  async createExchange(request: T.CreateExchangeRequest): Promise<T.CreateExchangeResponse> {
    const path = buildPathAndQuery('/exchanges', {
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

  async createWithdrawal(request: T.CreateWithdrawalRequest): Promise<T.CreateWithdrawalResponse> {
    const path = buildPathAndQuery('/exchanges/:exchangeId/accounts/:accountId/withdrawals', {
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

  async deleteExchange(request: T.DeleteExchangeRequest): Promise<T.DeleteExchangeResponse> {
    const path = buildPathAndQuery('/exchanges/:exchangeId', {
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
