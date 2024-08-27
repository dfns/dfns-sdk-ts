import { DfnsApiClientOptions } from '../../types/generic'
import { simpleFetch } from '../../utils/fetch'
import { userActionFetch } from '../../utils/userActionFetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class PoliciesClient {
  constructor(private apiOptions: DfnsApiClientOptions) {}

  async archivePolicy(request: T.ArchivePolicyRequest): Promise<T.ArchivePolicyResponse> {
    const path = buildPathAndQuery('/v2/policies/:policyId', {
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

  async createApprovalDecision(request: T.CreateApprovalDecisionRequest): Promise<T.CreateApprovalDecisionResponse> {
    const path = buildPathAndQuery('/v2/policy-approvals/:approvalId/decisions', {
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

  async createPolicy(request: T.CreatePolicyRequest): Promise<T.CreatePolicyResponse> {
    const path = buildPathAndQuery('/v2/policies', {
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

  async getApproval(request: T.GetApprovalRequest): Promise<T.GetApprovalResponse> {
    const path = buildPathAndQuery('/v2/policy-approvals/:approvalId', {
      path: request ?? {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async getPolicy(request: T.GetPolicyRequest): Promise<T.GetPolicyResponse> {
    const path = buildPathAndQuery('/v2/policies/:policyId', {
      path: request ?? {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listApprovals(request?: T.ListApprovalsRequest): Promise<T.ListApprovalsResponse> {
    const path = buildPathAndQuery('/v2/policy-approvals', {
      path: request ?? {},
      query: request?.query ?? {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listPolicies(request?: T.ListPoliciesRequest): Promise<T.ListPoliciesResponse> {
    const path = buildPathAndQuery('/v2/policies', {
      path: request ?? {},
      query: request?.query ?? {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async updatePolicy(request: T.UpdatePolicyRequest): Promise<T.UpdatePolicyResponse> {
    const path = buildPathAndQuery('/v2/policies/:policyId', {
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
