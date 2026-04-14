import { BaseAuthApi, SignUserActionChallengeRequest, UserActionChallengeResponse } from '../../baseAuthApi'
import { DfnsDelegatedApiClientOptions } from '../../dfnsDelegatedApiClient'
import { simpleFetch } from '../../utils/fetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class DelegatedFeeSponsorsClient {
  constructor(private apiOptions: DfnsDelegatedApiClientOptions) {}

  async activateFeeSponsorInit(request: T.ActivateFeeSponsorRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/fee-sponsors/:feeSponsorId/activate', {
      path: request ?? {},
      query: {},
    })

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'PUT',
        userActionHttpPath: path,
        userActionPayload: JSON.stringify({}),
        userActionServerKind: 'Api',
      },
      this.apiOptions
    )

    return challenge
  }

  async activateFeeSponsorComplete(
    request: T.ActivateFeeSponsorRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.ActivateFeeSponsorResponse> {
    const path = buildPathAndQuery('/fee-sponsors/:feeSponsorId/activate', {
      path: request ?? {},
      query: {},
    })

    const { userAction } = await BaseAuthApi.signUserActionChallenge(
      signedChallenge,
      this.apiOptions
    )

    const response = await simpleFetch(path, {
      method: 'PUT',
      body: {},
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async createFeeSponsorInit(request: T.CreateFeeSponsorRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/fee-sponsors', {
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

  async createFeeSponsorComplete(
    request: T.CreateFeeSponsorRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreateFeeSponsorResponse> {
    const path = buildPathAndQuery('/fee-sponsors', {
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

  async deactivateFeeSponsorInit(request: T.DeactivateFeeSponsorRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/fee-sponsors/:feeSponsorId/deactivate', {
      path: request ?? {},
      query: {},
    })

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'PUT',
        userActionHttpPath: path,
        userActionPayload: JSON.stringify({}),
        userActionServerKind: 'Api',
      },
      this.apiOptions
    )

    return challenge
  }

  async deactivateFeeSponsorComplete(
    request: T.DeactivateFeeSponsorRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.DeactivateFeeSponsorResponse> {
    const path = buildPathAndQuery('/fee-sponsors/:feeSponsorId/deactivate', {
      path: request ?? {},
      query: {},
    })

    const { userAction } = await BaseAuthApi.signUserActionChallenge(
      signedChallenge,
      this.apiOptions
    )

    const response = await simpleFetch(path, {
      method: 'PUT',
      body: {},
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async deleteFeeSponsorInit(request: T.DeleteFeeSponsorRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/fee-sponsors/:feeSponsorId', {
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

  async deleteFeeSponsorComplete(
    request: T.DeleteFeeSponsorRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.DeleteFeeSponsorResponse> {
    const path = buildPathAndQuery('/fee-sponsors/:feeSponsorId', {
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

  async getFeeSponsor(request: T.GetFeeSponsorRequest): Promise<T.GetFeeSponsorResponse> {
    const path = buildPathAndQuery('/fee-sponsors/:feeSponsorId', {
      path: request ?? {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listFeeSponsors(request?: T.ListFeeSponsorsRequest): Promise<T.ListFeeSponsorsResponse> {
    const path = buildPathAndQuery('/fee-sponsors', {
      path: request ?? {},
      query: request?.query ?? {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listSponsoredFees(request: T.ListSponsoredFeesRequest): Promise<T.ListSponsoredFeesResponse> {
    const path = buildPathAndQuery('/fee-sponsors/:feeSponsorId/fees', {
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
