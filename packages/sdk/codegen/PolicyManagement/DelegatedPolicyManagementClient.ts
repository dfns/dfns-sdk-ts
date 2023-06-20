import {
  BaseAuthApi,
  SignUserActionChallengeRequest,
  UserActionChallengeResponse,
} from '../../baseAuthApi'
import { DfnsDelegatedApiClientOptions } from '../../dfnsDelegatedApiClient'
import { simpleFetch } from '../../utils/fetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class DelegatedPolicyManagementClient {
  constructor(private apiOptions: DfnsDelegatedApiClientOptions) {}

  async createPolicyInit(
    request: T.CreatePolicyRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/policies', {
      path: {},
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
    const path = buildPathAndQuery('/policies', {
      path: {},
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

  async archivePolicyInit(
    request: T.ArchivePolicyRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/policies/:policyId', {
      path: { policyId: request.policyId },
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
    const path = buildPathAndQuery('/policies/:policyId', {
      path: { policyId: request.policyId },
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

  async createPolicyControlInit(
    request: T.CreatePolicyControlRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/policies/policy-controls', {
      path: {},
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

  async createPolicyControlComplete(
    request: T.CreatePolicyControlRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreatePolicyControlResponse> {
    const path = buildPathAndQuery('/policies/policy-controls', {
      path: {},
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

  async archivePolicyControlInit(
    request: T.ArchivePolicyControlRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery(
      '/policies/policy-controls/:policyControlId',
      {
        path: { policyControlId: request.policyControlId },
        query: {},
      }
    )

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

  async archivePolicyControlComplete(
    request: T.ArchivePolicyControlRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.ArchivePolicyControlResponse> {
    const path = buildPathAndQuery(
      '/policies/policy-controls/:policyControlId',
      {
        path: { policyControlId: request.policyControlId },
        query: {},
      }
    )

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

  async createPolicyRuleInit(
    request: T.CreatePolicyRuleRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/policies/policy-rules', {
      path: {},
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

  async createPolicyRuleComplete(
    request: T.CreatePolicyRuleRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreatePolicyRuleResponse> {
    const path = buildPathAndQuery('/policies/policy-rules', {
      path: {},
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

  async archivePolicyRuleInit(
    request: T.ArchivePolicyRuleRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/policies/policy-rules/:policyRuleId', {
      path: { policyRuleId: request.policyRuleId },
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

  async archivePolicyRuleComplete(
    request: T.ArchivePolicyRuleRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.ArchivePolicyRuleResponse> {
    const path = buildPathAndQuery('/policies/policy-rules/:policyRuleId', {
      path: { policyRuleId: request.policyRuleId },
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
}
