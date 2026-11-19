import { BaseAuthApi, SignUserActionChallengeRequest, UserActionChallengeResponse } from '../../baseAuthApi'
import { DfnsDelegatedApiClientOptions } from '../../dfnsDelegatedApiClient'
import { simpleFetch } from '../../utils/fetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class DelegatedCustodiansClient {
  constructor(private apiOptions: DfnsDelegatedApiClientOptions) {}

  async createCustodianInit(request: T.CreateCustodianRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/custodians', {
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

  async createCustodianComplete(
    request: T.CreateCustodianRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreateCustodianResponse> {
    const path = buildPathAndQuery('/custodians', {
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

  async deleteCustodianInit(request: T.DeleteCustodianRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/custodians/:custodianId', {
      path: request ?? {},
      query: {},
    })
    const userActionHttpPath = new URL(path, 'https://dfns.invalid').pathname

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'DELETE',
        userActionHttpPath,
        userActionPayload: JSON.stringify({}),
      },
      this.apiOptions
    )

    return challenge
  }

  async deleteCustodianComplete(
    request: T.DeleteCustodianRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.DeleteCustodianResponse> {
    const path = buildPathAndQuery('/custodians/:custodianId', {
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

  async getCustodian(request: T.GetCustodianRequest): Promise<T.GetCustodianResponse> {
    const path = buildPathAndQuery('/custodians/:custodianId', {
      path: request ?? {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listCustodians(request?: T.ListCustodiansRequest): Promise<T.ListCustodiansResponse> {
    const path = buildPathAndQuery('/custodians', {
      path: request ?? {},
      query: request?.query ?? {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listCustodianWalletAssets(request: T.ListCustodianWalletAssetsRequest): Promise<T.ListCustodianWalletAssetsResponse> {
    const path = buildPathAndQuery('/custodians/:custodianId/wallets/:walletId/assets', {
      path: request ?? {},
      query: request.query ?? {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listCustodianWallets(request: T.ListCustodianWalletsRequest): Promise<T.ListCustodianWalletsResponse> {
    const path = buildPathAndQuery('/custodians/:custodianId/wallets', {
      path: request ?? {},
      query: request.query ?? {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }
}
