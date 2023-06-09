import {
  BaseAuthApi,
  SignUserActionChallengeRequest,
  UserActionChallengeResponse,
} from '../../baseAuthApi'
import { DfnsDelegatedApiClientOptions } from '../../dfnsDelegatedApiClient'
import { Fetch, preflightFetch } from '../../utils/fetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class DelegatedAssetsClient {
  private fetch: Fetch
  private authApi: BaseAuthApi

  constructor(private apiOptions: DfnsDelegatedApiClientOptions) {
    this.fetch = preflightFetch
    this.authApi = new BaseAuthApi(apiOptions)
  }

  async initiatePaymentInit(
    request: T.InitiatePaymentRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery(
      '/assets/asset-accounts/:assetAccountId/payments',
      {
        path: { assetAccountId: request.assetAccountId },
        query: {},
      }
    )

    const challenge = await this.authApi.createUserActionChallenge({
      userActionHttpMethod: 'POST',
      userActionHttpPath: path,
      userActionPayload: JSON.stringify(request.body),
      userActionServerKind: 'Api',
    })

    return challenge
  }

  async initiatePaymentComplete(
    request: T.InitiatePaymentRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.InitiatePaymentResponse> {
    const path = buildPathAndQuery(
      '/assets/asset-accounts/:assetAccountId/payments',
      {
        path: { assetAccountId: request.assetAccountId },
        query: {},
      }
    )

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

    const response = await this.fetch(path, {
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

    const response = await this.fetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async createAssetAccountInit(
    request: T.CreateAssetAccountRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/assets/asset-accounts', {
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

  async createAssetAccountComplete(
    request: T.CreateAssetAccountRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreateAssetAccountResponse> {
    const path = buildPathAndQuery('/assets/asset-accounts', {
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

  async getAssetAccountById(
    request: T.GetAssetAccountByIdRequest
  ): Promise<T.GetAssetAccountByIdResponse> {
    const path = buildPathAndQuery('/assets/asset-accounts/:assetAccountId', {
      path: { assetAccountId: request.assetAccountId },
      query: {},
    })

    const response = await this.fetch(path, {
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

    const response = await this.fetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async archiveAssetAccountInit(
    request: T.ArchiveAssetAccountRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/assets/asset-accounts/:assetAccountId', {
      path: { assetAccountId: request.assetAccountId },
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

  async archiveAssetAccountComplete(
    request: T.ArchiveAssetAccountRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.ArchiveAssetAccountResponse> {
    const path = buildPathAndQuery('/assets/asset-accounts/:assetAccountId', {
      path: { assetAccountId: request.assetAccountId },
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

    const response = await this.fetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }
}
