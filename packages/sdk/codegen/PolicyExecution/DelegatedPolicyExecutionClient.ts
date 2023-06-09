import {
  BaseAuthApi,
  SignUserActionChallengeRequest,
  UserActionChallengeResponse,
} from '../../baseAuthApi'
import { DfnsDelegatedApiClientOptions } from '../../dfnsDelegatedApiClient'
import { Fetch, preflightFetch } from '../../utils/fetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class DelegatedPolicyExecutionClient {
  private fetch: Fetch
  private authApi: BaseAuthApi

  constructor(private apiOptions: DfnsDelegatedApiClientOptions) {
    this.fetch = preflightFetch
    this.authApi = new BaseAuthApi(apiOptions)
  }

  async listPolicyControlExecutions(
    request: T.ListPolicyControlExecutionsRequest
  ): Promise<T.ListPolicyControlExecutionsResponse> {
    const path = buildPathAndQuery('/policies/policy-control-executions', {
      path: {},
      query: request.query ?? {},
    })

    const response = await this.fetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async getPolicyControlExecutionById(
    request: T.GetPolicyControlExecutionByIdRequest
  ): Promise<T.GetPolicyControlExecutionByIdResponse> {
    const path = buildPathAndQuery(
      '/policies/policy-control-executions/:policyControlExecutionId',
      {
        path: { policyControlExecutionId: request.policyControlExecutionId },
        query: {},
      }
    )

    const response = await this.fetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async updatePolicyControlExecutionInit(
    request: T.UpdatePolicyControlExecutionRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery(
      '/policies/policy-control-executions/:policyControlExecutionId',
      {
        path: { policyControlExecutionId: request.policyControlExecutionId },
        query: {},
      }
    )

    const challenge = await this.authApi.createUserActionChallenge({
      userActionHttpMethod: 'PUT',
      userActionHttpPath: path,
      userActionPayload: JSON.stringify(request.body),
      userActionServerKind: 'Api',
    })

    return challenge
  }

  async updatePolicyControlExecutionComplete(
    request: T.UpdatePolicyControlExecutionRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.UpdatePolicyControlExecutionResponse> {
    const path = buildPathAndQuery(
      '/policies/policy-control-executions/:policyControlExecutionId',
      {
        path: { policyControlExecutionId: request.policyControlExecutionId },
        query: {},
      }
    )

    const { userAction } = await this.authApi.signUserActionChallenge(
      signedChallenge
    )

    const response = await this.fetch(path, {
      method: 'PUT',
      body: request.body,
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }
}
