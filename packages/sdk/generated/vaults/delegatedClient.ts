import { BaseAuthApi, SignUserActionChallengeRequest, UserActionChallengeResponse } from '../../baseAuthApi'
import { DfnsDelegatedApiClientOptions } from '../../dfnsDelegatedApiClient'
import { simpleFetch } from '../../utils/fetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class DelegatedVaultsClient {
  constructor(private apiOptions: DfnsDelegatedApiClientOptions) {}

  async createVaultInit(request: T.CreateVaultRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/vaults', {
      path: request ?? {},
      query: {},
    })
    const userActionHttpPath = new URL(path, 'https://dfns.invalid').pathname

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'POST',
        userActionHttpPath,
        userActionPayload: JSON.stringify(request.body),
        userActionServerKind: 'Api',
      },
      this.apiOptions
    )

    return challenge
  }

  async createVaultComplete(
    request: T.CreateVaultRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreateVaultResponse> {
    const path = buildPathAndQuery('/vaults', {
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

  async createVaultAddressInit(request: T.CreateVaultAddressRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/vaults/:vaultId/addresses', {
      path: request ?? {},
      query: {},
    })
    const userActionHttpPath = new URL(path, 'https://dfns.invalid').pathname

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'POST',
        userActionHttpPath,
        userActionPayload: JSON.stringify(request.body),
        userActionServerKind: 'Api',
      },
      this.apiOptions
    )

    return challenge
  }

  async createVaultAddressComplete(
    request: T.CreateVaultAddressRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreateVaultAddressResponse> {
    const path = buildPathAndQuery('/vaults/:vaultId/addresses', {
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

  async createVaultLockInit(request: T.CreateVaultLockRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/vaults/:vaultId/locks', {
      path: request ?? {},
      query: {},
    })
    const userActionHttpPath = new URL(path, 'https://dfns.invalid').pathname

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'POST',
        userActionHttpPath,
        userActionPayload: JSON.stringify(request.body),
        userActionServerKind: 'Api',
      },
      this.apiOptions
    )

    return challenge
  }

  async createVaultLockComplete(
    request: T.CreateVaultLockRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreateVaultLockResponse> {
    const path = buildPathAndQuery('/vaults/:vaultId/locks', {
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

  async createVaultTransferInit(request: T.CreateVaultTransferRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/vaults/:vaultId/transfers', {
      path: request ?? {},
      query: {},
    })
    const userActionHttpPath = new URL(path, 'https://dfns.invalid').pathname

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'POST',
        userActionHttpPath,
        userActionPayload: JSON.stringify(request.body),
        userActionServerKind: 'Api',
      },
      this.apiOptions
    )

    return challenge
  }

  async createVaultTransferComplete(
    request: T.CreateVaultTransferRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreateVaultTransferResponse> {
    const path = buildPathAndQuery('/vaults/:vaultId/transfers', {
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

  async getVaultLock(request: T.GetVaultLockRequest): Promise<T.GetVaultLockResponse> {
    const path = buildPathAndQuery('/vaults/:vaultId/locks/:lockId', {
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

  async listVaultLocks(request: T.ListVaultLocksRequest): Promise<T.ListVaultLocksResponse> {
    const path = buildPathAndQuery('/vaults/:vaultId/locks', {
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

  async releaseQuarantineInit(request: T.ReleaseQuarantineRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/vaults/:vaultId/quarantines/:quarantineId/release', {
      path: request ?? {},
      query: {},
    })
    const userActionHttpPath = new URL(path, 'https://dfns.invalid').pathname

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'POST',
        userActionHttpPath,
        userActionPayload: JSON.stringify(request.body),
        userActionServerKind: 'Api',
      },
      this.apiOptions
    )

    return challenge
  }

  async releaseQuarantineComplete(
    request: T.ReleaseQuarantineRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.ReleaseQuarantineResponse> {
    const path = buildPathAndQuery('/vaults/:vaultId/quarantines/:quarantineId/release', {
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

  async releaseVaultLockInit(request: T.ReleaseVaultLockRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/vaults/:vaultId/locks/:lockId/release', {
      path: request ?? {},
      query: {},
    })
    const userActionHttpPath = new URL(path, 'https://dfns.invalid').pathname

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'POST',
        userActionHttpPath,
        userActionPayload: JSON.stringify({}),
        userActionServerKind: 'Api',
      },
      this.apiOptions
    )

    return challenge
  }

  async releaseVaultLockComplete(
    request: T.ReleaseVaultLockRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.ReleaseVaultLockResponse> {
    const path = buildPathAndQuery('/vaults/:vaultId/locks/:lockId/release', {
      path: request ?? {},
      query: {},
    })

    const { userAction } = await BaseAuthApi.signUserActionChallenge(
      signedChallenge,
      this.apiOptions
    )

    const response = await simpleFetch(path, {
      method: 'POST',
      body: {},
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async replaceVaultLockInit(request: T.ReplaceVaultLockRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/vaults/:vaultId/locks/:lockId/replace', {
      path: request ?? {},
      query: {},
    })
    const userActionHttpPath = new URL(path, 'https://dfns.invalid').pathname

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'POST',
        userActionHttpPath,
        userActionPayload: JSON.stringify(request.body),
        userActionServerKind: 'Api',
      },
      this.apiOptions
    )

    return challenge
  }

  async replaceVaultLockComplete(
    request: T.ReplaceVaultLockRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.ReplaceVaultLockResponse> {
    const path = buildPathAndQuery('/vaults/:vaultId/locks/:lockId/replace', {
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

  async tagVaultInit(request: T.TagVaultRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/vaults/:vaultId/tags', {
      path: request ?? {},
      query: {},
    })
    const userActionHttpPath = new URL(path, 'https://dfns.invalid').pathname

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'PUT',
        userActionHttpPath,
        userActionPayload: JSON.stringify(request.body),
        userActionServerKind: 'Api',
      },
      this.apiOptions
    )

    return challenge
  }

  async tagVaultComplete(
    request: T.TagVaultRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.TagVaultResponse> {
    const path = buildPathAndQuery('/vaults/:vaultId/tags', {
      path: request ?? {},
      query: {},
    })

    const { userAction } = await BaseAuthApi.signUserActionChallenge(
      signedChallenge,
      this.apiOptions
    )

    const response = await simpleFetch(path, {
      method: 'PUT',
      body: request.body,
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async untagVaultInit(request: T.UntagVaultRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/vaults/:vaultId/tags', {
      path: request ?? {},
      query: {},
    })
    const userActionHttpPath = new URL(path, 'https://dfns.invalid').pathname

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'DELETE',
        userActionHttpPath,
        userActionPayload: JSON.stringify(request.body),
        userActionServerKind: 'Api',
      },
      this.apiOptions
    )

    return challenge
  }

  async untagVaultComplete(
    request: T.UntagVaultRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.UntagVaultResponse> {
    const path = buildPathAndQuery('/vaults/:vaultId/tags', {
      path: request ?? {},
      query: {},
    })

    const { userAction } = await BaseAuthApi.signUserActionChallenge(
      signedChallenge,
      this.apiOptions
    )

    const response = await simpleFetch(path, {
      method: 'DELETE',
      body: request.body,
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async updateVaultInit(request: T.UpdateVaultRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/vaults/:vaultId', {
      path: request ?? {},
      query: {},
    })
    const userActionHttpPath = new URL(path, 'https://dfns.invalid').pathname

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'PUT',
        userActionHttpPath,
        userActionPayload: JSON.stringify(request.body),
        userActionServerKind: 'Api',
      },
      this.apiOptions
    )

    return challenge
  }

  async updateVaultComplete(
    request: T.UpdateVaultRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.UpdateVaultResponse> {
    const path = buildPathAndQuery('/vaults/:vaultId', {
      path: request ?? {},
      query: {},
    })

    const { userAction } = await BaseAuthApi.signUserActionChallenge(
      signedChallenge,
      this.apiOptions
    )

    const response = await simpleFetch(path, {
      method: 'PUT',
      body: request.body,
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }
}
