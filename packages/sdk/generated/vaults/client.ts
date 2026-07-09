/* eslint @typescript-eslint/no-unused-vars: 0 */

import { DfnsApiClientOptions } from '../../types/generic'
import { simpleFetch } from '../../utils/fetch'
import { userActionFetch } from '../../utils/userActionFetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class VaultsClient {
  constructor(private apiOptions: DfnsApiClientOptions) {}

  async createVault(request: T.CreateVaultRequest): Promise<T.CreateVaultResponse> {
    const path = buildPathAndQuery('/vaults', {
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

  async createVaultAddress(request: T.CreateVaultAddressRequest): Promise<T.CreateVaultAddressResponse> {
    const path = buildPathAndQuery('/vaults/:vaultId/addresses', {
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

  async createVaultTransfer(request: T.CreateVaultTransferRequest): Promise<T.CreateVaultTransferResponse> {
    const path = buildPathAndQuery('/vaults/:vaultId/transfers', {
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

  async getVault(request: T.GetVaultRequest): Promise<T.GetVaultResponse> {
    const path = buildPathAndQuery('/vaults/:vaultId', {
      path: request ?? {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listVaultAssets(request: T.ListVaultAssetsRequest): Promise<T.ListVaultAssetsResponse> {
    const path = buildPathAndQuery('/vaults/:vaultId/assets', {
      path: request ?? {},
      query: request.query ?? {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listVaultBalances(request: T.ListVaultBalancesRequest): Promise<T.ListVaultBalancesResponse> {
    const path = buildPathAndQuery('/vaults/:vaultId/balances', {
      path: request ?? {},
      query: request.query ?? {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listVaults(request?: T.ListVaultsRequest): Promise<T.ListVaultsResponse> {
    const path = buildPathAndQuery('/vaults', {
      path: request ?? {},
      query: request?.query ?? {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async tagVault(request: T.TagVaultRequest): Promise<T.TagVaultResponse> {
    const path = buildPathAndQuery('/vaults/:vaultId/tags', {
      path: request ?? {},
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'PUT',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async unquarantine(request: T.UnquarantineRequest): Promise<T.UnquarantineResponse> {
    const path = buildPathAndQuery('/vaults/:vaultId/quarantines/:quarantineId', {
      path: request ?? {},
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'DELETE',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async untagVault(request: T.UntagVaultRequest): Promise<T.UntagVaultResponse> {
    const path = buildPathAndQuery('/vaults/:vaultId/tags', {
      path: request ?? {},
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'DELETE',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async updateVault(request: T.UpdateVaultRequest): Promise<T.UpdateVaultResponse> {
    const path = buildPathAndQuery('/vaults/:vaultId', {
      path: request ?? {},
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'PUT',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }
}
