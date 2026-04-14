import { BaseAuthApi, SignUserActionChallengeRequest, UserActionChallengeResponse } from '../../baseAuthApi'
import { DfnsDelegatedApiClientOptions } from '../../dfnsDelegatedApiClient'
import { simpleFetch } from '../../utils/fetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class DelegatedNetworksClient {
  constructor(private apiOptions: DfnsDelegatedApiClientOptions) {}

  async callFunction(request: T.CallFunctionRequest): Promise<T.CallFunctionResponse> {
    const path = buildPathAndQuery('/networks/:network/call-function', {
      path: request ?? {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'POST',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async createCantonValidatorInit(request: T.CreateCantonValidatorRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/networks/:network/validators', {
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

  async createCantonValidatorComplete(
    request: T.CreateCantonValidatorRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreateCantonValidatorResponse> {
    const path = buildPathAndQuery('/networks/:network/validators', {
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

  async deleteCantonValidatorInit(request: T.DeleteCantonValidatorRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/networks/:network/validators/:validatorId', {
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

  async deleteCantonValidatorComplete(
    request: T.DeleteCantonValidatorRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.DeleteCantonValidatorResponse> {
    const path = buildPathAndQuery('/networks/:network/validators/:validatorId', {
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

  async getCantonValidator(request: T.GetCantonValidatorRequest): Promise<T.GetCantonValidatorResponse> {
    const path = buildPathAndQuery('/networks/:network/validators/:validatorId', {
      path: request ?? {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async getFees(request?: T.GetFeesRequest): Promise<T.GetFeesResponse> {
    const path = buildPathAndQuery('/networks/fees', {
      path: request ?? {},
      query: request?.query ?? {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listCantonValidators(request: T.ListCantonValidatorsRequest): Promise<T.ListCantonValidatorsResponse> {
    const path = buildPathAndQuery('/networks/:network/validators', {
      path: request ?? {},
      query: request.query ?? {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async updateCantonValidatorInit(request: T.UpdateCantonValidatorRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/networks/:network/validators/:validatorId', {
      path: request ?? {},
      query: {},
    })

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'PUT',
        userActionHttpPath: path,
        userActionPayload: JSON.stringify(request.body),
        userActionServerKind: 'Api',
      },
      this.apiOptions
    )

    return challenge
  }

  async updateCantonValidatorComplete(
    request: T.UpdateCantonValidatorRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.UpdateCantonValidatorResponse> {
    const path = buildPathAndQuery('/networks/:network/validators/:validatorId', {
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
