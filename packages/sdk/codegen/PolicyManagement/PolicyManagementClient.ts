import { DfnsApiClientOptions } from '../../dfnsApiClient'
import { simpleFetch, userActionFetch } from '../../utils/fetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class PolicyManagementClient {
  constructor(private apiOptions: DfnsApiClientOptions) {}

  async createPolicy(
    request: T.CreatePolicyRequest
  ): Promise<T.CreatePolicyResponse> {
    const path = buildPathAndQuery('/policies', {
      path: {},
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'POST',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async updatePolicy(
    request: T.UpdatePolicyRequest
  ): Promise<T.UpdatePolicyResponse> {
    const path = buildPathAndQuery('/policies/:policyId', {
      path: { policyId: request.policyId },
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'PUT',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async getPolicyById(
    request: T.GetPolicyByIdRequest
  ): Promise<T.GetPolicyByIdResponse> {
    const path = buildPathAndQuery('/policies/:policyId', {
      path: { policyId: request.policyId },
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listPolicies(
    request: T.ListPoliciesRequest
  ): Promise<T.ListPoliciesResponse> {
    const path = buildPathAndQuery('/policies', {
      path: {},
      query: request.query ?? {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async archivePolicy(
    request: T.ArchivePolicyRequest
  ): Promise<T.ArchivePolicyResponse> {
    const path = buildPathAndQuery('/policies/:policyId', {
      path: { policyId: request.policyId },
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'DELETE',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async createPolicyControl(
    request: T.CreatePolicyControlRequest
  ): Promise<T.CreatePolicyControlResponse> {
    const path = buildPathAndQuery('/policies/policy-controls', {
      path: {},
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'POST',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async updatePolicyControl(
    request: T.UpdatePolicyControlRequest
  ): Promise<T.UpdatePolicyControlResponse> {
    const path = buildPathAndQuery(
      '/policies/policy-controls/:policyControlId',
      {
        path: { policyControlId: request.policyControlId },
        query: {},
      }
    )

    const response = await userActionFetch(path, {
      method: 'PUT',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async getPolicyControlById(
    request: T.GetPolicyControlByIdRequest
  ): Promise<T.GetPolicyControlByIdResponse> {
    const path = buildPathAndQuery(
      '/policies/policy-controls/:policyControlId',
      {
        path: { policyControlId: request.policyControlId },
        query: {},
      }
    )

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listPolicyControls(
    request: T.ListPolicyControlsRequest
  ): Promise<T.ListPolicyControlsResponse> {
    const path = buildPathAndQuery('/policies/policy-controls', {
      path: {},
      query: request.query ?? {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async archivePolicyControl(
    request: T.ArchivePolicyControlRequest
  ): Promise<T.ArchivePolicyControlResponse> {
    const path = buildPathAndQuery(
      '/policies/policy-controls/:policyControlId',
      {
        path: { policyControlId: request.policyControlId },
        query: {},
      }
    )

    const response = await userActionFetch(path, {
      method: 'DELETE',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async createPolicyRule(
    request: T.CreatePolicyRuleRequest
  ): Promise<T.CreatePolicyRuleResponse> {
    const path = buildPathAndQuery('/policies/policy-rules', {
      path: {},
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'POST',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async updatePolicyRule(
    request: T.UpdatePolicyRuleRequest
  ): Promise<T.UpdatePolicyRuleResponse> {
    const path = buildPathAndQuery('/policies/policy-rules/:policyRuleId', {
      path: { policyRuleId: request.policyRuleId },
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'PUT',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async getPolicyRuleById(
    request: T.GetPolicyRuleByIdRequest
  ): Promise<T.GetPolicyRuleByIdResponse> {
    const path = buildPathAndQuery('/policies/policy-rules/:policyRuleId', {
      path: { policyRuleId: request.policyRuleId },
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listPolicyRules(
    request: T.ListPolicyRulesRequest
  ): Promise<T.ListPolicyRulesResponse> {
    const path = buildPathAndQuery('/policies/policy-rules', {
      path: {},
      query: request.query ?? {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async archivePolicyRule(
    request: T.ArchivePolicyRuleRequest
  ): Promise<T.ArchivePolicyRuleResponse> {
    const path = buildPathAndQuery('/policies/policy-rules/:policyRuleId', {
      path: { policyRuleId: request.policyRuleId },
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'DELETE',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }
}
