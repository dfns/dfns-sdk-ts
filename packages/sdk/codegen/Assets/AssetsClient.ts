import { DfnsApiClientOptions } from '../../dfnsApiClient'
import { simpleFetch, userActionFetch } from '../../utils/fetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class AssetsClient {
  constructor(private apiOptions: DfnsApiClientOptions) {}

  async initiatePayment(
    request: T.InitiatePaymentRequest
  ): Promise<T.InitiatePaymentResponse> {
    const path = buildPathAndQuery(
      '/assets/asset-accounts/:assetAccountId/payments',
      {
        path: { assetAccountId: request.assetAccountId },
        query: {},
      }
    )

    const response = await userActionFetch(path, {
      method: 'POST',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async getPaymentById(
    request: T.GetPaymentByIdRequest
  ): Promise<T.GetPaymentByIdResponse> {
    const path = buildPathAndQuery(
      '/assets/asset-accounts/:assetAccountId/payments/:paymentId',
      {
        path: {
          assetAccountId: request.assetAccountId,
          paymentId: request.paymentId,
        },
        query: {},
      }
    )

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listPayments(
    request: T.ListPaymentsRequest
  ): Promise<T.ListPaymentsResponse> {
    const path = buildPathAndQuery(
      '/assets/asset-accounts/:assetAccountId/payments',
      {
        path: { assetAccountId: request.assetAccountId },
        query: {},
      }
    )

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async createAssetAccount(
    request: T.CreateAssetAccountRequest
  ): Promise<T.CreateAssetAccountResponse> {
    const path = buildPathAndQuery('/assets/asset-accounts', {
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

  async getAssetAccountById(
    request: T.GetAssetAccountByIdRequest
  ): Promise<T.GetAssetAccountByIdResponse> {
    const path = buildPathAndQuery('/assets/asset-accounts/:assetAccountId', {
      path: { assetAccountId: request.assetAccountId },
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listAssetAccounts(
    request: T.ListAssetAccountsRequest
  ): Promise<T.ListAssetAccountsResponse> {
    const path = buildPathAndQuery('/assets/asset-accounts', {
      path: {},
      query: request.query ?? {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async getAssetAccountBalanceById(
    request: T.GetAssetAccountBalanceByIdRequest
  ): Promise<T.GetAssetAccountBalanceByIdResponse> {
    const path = buildPathAndQuery(
      '/assets/asset-accounts/:assetAccountId/balance',
      {
        path: { assetAccountId: request.assetAccountId },
        query: {},
      }
    )

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }
}
