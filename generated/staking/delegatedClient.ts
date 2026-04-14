import { BaseAuthApi, SignUserActionChallengeRequest, UserActionChallengeResponse } from '../../baseAuthApi'
import { DfnsDelegatedApiClientOptions } from '../../dfnsDelegatedApiClient'
import { simpleFetch } from '../../utils/fetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class DelegatedStakingClient {
  constructor(private apiOptions: DfnsDelegatedApiClientOptions) {}

  async createStakeInit(request: T.CreateStakeRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/staking/stakes', {
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

  async createStakeComplete(
    request: T.CreateStakeRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreateStakeResponse> {
    const path = buildPathAndQuery('/staking/stakes', {
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

  async createStakeActionInit(request: T.CreateStakeActionRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/staking/stakes/:stakeId/actions', {
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

  async createStakeActionComplete(
    request: T.CreateStakeActionRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreateStakeActionResponse> {
    const path = buildPathAndQuery('/staking/stakes/:stakeId/actions', {
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

  async getStakeRewards(request: T.GetStakeRewardsRequest): Promise<T.GetStakeRewardsResponse> {
    const path = buildPathAndQuery('/staking/stakes/:stakeId/rewards', {
      path: request ?? {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async getStakes(request: T.GetStakesRequest): Promise<T.GetStakesResponse> {
    const path = buildPathAndQuery('/staking/stakes/:stakeId', {
      path: request ?? {},
      query: request.query ?? {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listStakeActions(request: T.ListStakeActionsRequest): Promise<T.ListStakeActionsResponse> {
    const path = buildPathAndQuery('/staking/stakes/:stakeId/actions', {
      path: request ?? {},
      query: request.query ?? {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listStakes(request?: T.ListStakesRequest): Promise<T.ListStakesResponse> {
    const path = buildPathAndQuery('/staking/stakes', {
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
