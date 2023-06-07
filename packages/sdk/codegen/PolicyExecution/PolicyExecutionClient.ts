import { DfnsApiOptions } from '../../dfnsApiClient'
import { Fetch, userActionFetch } from '../../utils/fetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class PolicyExecutionClient {
  private fetch: Fetch

  constructor(private apiOptions: DfnsApiOptions) {
    this.fetch = userActionFetch
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

  async updatePolicyControlExecution(
    request: T.UpdatePolicyControlExecutionRequest
  ): Promise<T.UpdatePolicyControlExecutionResponse> {
    const path = buildPathAndQuery(
      '/policies/policy-control-executions/:policyControlExecutionId',
      {
        path: { policyControlExecutionId: request.policyControlExecutionId },
        query: {},
      }
    )

    const response = await this.fetch(path, {
      method: 'PUT',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }
}
