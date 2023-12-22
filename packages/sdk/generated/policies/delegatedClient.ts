import { BaseAuthApi, SignUserActionChallengeRequest, UserActionChallengeResponse } from '../../baseAuthApi'
import { DfnsDelegatedApiClientOptions } from '../../dfnsDelegatedApiClient'
import { simpleFetch } from '../../utils/fetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class DelegatedPoliciesClient {
  constructor(private apiOptions: DfnsDelegatedApiClientOptions) {}

  async archivePolicyInit(request: T.ArchivePolicyRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/v2/policies/:policyId', {
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

  async archivePolicyComplete(
    request: T.ArchivePolicyRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.ArchivePolicyResponse> {
    const path = buildPathAndQuery('/v2/policies/:policyId', {
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

  async createApprovalDecisionInit(request: T.CreateApprovalDecisionRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/v2/policy-approvals/:approvalId/decisions', {
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

  async createApprovalDecisionComplete(
    request: T.CreateApprovalDecisionRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreateApprovalDecisionResponse> {
    const path = buildPathAndQuery('/v2/policy-approvals/:approvalId/decisions', {
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

  async createPolicyInit(request: T.CreatePolicyRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/v2/policies', {
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

  async createPolicyComplete(
    request: T.CreatePolicyRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreatePolicyResponse> {
    const path = buildPathAndQuery('/v2/policies', {
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

  async updatePolicyInit(request: T.UpdatePolicyRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/v2/policies/:policyId', {
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

  async updatePolicyComplete(
    request: T.UpdatePolicyRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.UpdatePolicyResponse> {
    const path = buildPathAndQuery('/v2/policies/:policyId', {
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
