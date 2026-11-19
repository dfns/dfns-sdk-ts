/* eslint @typescript-eslint/no-unused-vars: 0 */

import { DfnsApiClientOptions } from '../../types/generic'
import { simpleFetch } from '../../utils/fetch'
import { userActionFetch } from '../../utils/userActionFetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class CustodiansClient {
  constructor(private apiOptions: DfnsApiClientOptions) {}

  async createCustodian(request: T.CreateCustodianRequest): Promise<T.CreateCustodianResponse> {
    const path = buildPathAndQuery('/custodians', {
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

  async deleteCustodian(request: T.DeleteCustodianRequest): Promise<T.DeleteCustodianResponse> {
    const path = buildPathAndQuery('/custodians/:custodianId', {
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
