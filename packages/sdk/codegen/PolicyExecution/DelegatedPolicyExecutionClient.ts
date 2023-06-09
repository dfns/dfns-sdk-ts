import {
  BaseAuthApi,
  SignUserActionChallengeRequest,
  UserActionChallengeResponse,
} from '../../baseAuthApi'
import { DfnsDelegatedApiClientOptions } from '../../dfnsDelegatedApiClient'
import { simpleFetch } from '../../utils/fetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class DelegatedPolicyExecutionClient {
  constructor(private apiOptions: DfnsDelegatedApiClientOptions) {}

  async listPolicyControlExecutions(
    request: T.ListPolicyControlExecutionsRequest
  ): Promise<T.ListPolicyControlExecutionsResponse> {
    const path = buildPathAndQuery('/policies/policy-control-executions', {
      path: {},
      query: request.query ?? {},
    })

    const response = await simpleFetch(path, {
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

    const response = await simpleFetch(path, {
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
