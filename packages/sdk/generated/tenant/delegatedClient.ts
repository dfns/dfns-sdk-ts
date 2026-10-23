import { BaseAuthApi, SignUserActionChallengeRequest, UserActionChallengeResponse } from '../../baseAuthApi'
import { DfnsDelegatedApiClientOptions } from '../../dfnsDelegatedApiClient'
import { simpleFetch } from '../../utils/fetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class DelegatedTenantClient {
  constructor(private apiOptions: DfnsDelegatedApiClientOptions) {}

  async addTenantUserGroupMembersInit(request: T.AddTenantUserGroupMembersRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/tenant/user-groups/:userGroupId/members', {
      path: request ?? {},
      query: {},
    })
    const userActionHttpPath = new URL(path, 'https://dfns.invalid').pathname

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'POST',
        userActionHttpPath,
        userActionPayload: JSON.stringify(request.body),
      },
      this.apiOptions
    )

    return challenge
  }

  async addTenantUserGroupMembersComplete(
    request: T.AddTenantUserGroupMembersRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.AddTenantUserGroupMembersResponse> {
    const path = buildPathAndQuery('/tenant/user-groups/:userGroupId/members', {
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

  async assignTenantPermissionInit(request: T.AssignTenantPermissionRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/tenant/permissions/:permissionId/assign', {
      path: request ?? {},
      query: {},
    })
    const userActionHttpPath = new URL(path, 'https://dfns.invalid').pathname

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'POST',
        userActionHttpPath,
        userActionPayload: JSON.stringify(request.body),
      },
      this.apiOptions
    )

    return challenge
  }

  async assignTenantPermissionComplete(
    request: T.AssignTenantPermissionRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.AssignTenantPermissionResponse> {
    const path = buildPathAndQuery('/tenant/permissions/:permissionId/assign', {
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

    
  }

  async createOrgInit(request: T.CreateOrgRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/tenant/orgs', {
      path: request ?? {},
      query: {},
    })
    const userActionHttpPath = new URL(path, 'https://dfns.invalid').pathname

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'POST',
        userActionHttpPath,
        userActionPayload: JSON.stringify(request.body),
      },
      this.apiOptions
    )

    return challenge
  }

  async createOrgComplete(
    request: T.CreateOrgRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreateOrgResponse> {
    const path = buildPathAndQuery('/tenant/orgs', {
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

  async createTenantUserInit(request: T.CreateTenantUserRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/tenant/users', {
      path: request ?? {},
      query: {},
    })
    const userActionHttpPath = new URL(path, 'https://dfns.invalid').pathname

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'POST',
        userActionHttpPath,
        userActionPayload: JSON.stringify(request.body),
      },
      this.apiOptions
    )

    return challenge
  }

  async createTenantUserComplete(
    request: T.CreateTenantUserRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreateTenantUserResponse> {
    const path = buildPathAndQuery('/tenant/users', {
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

  async createTenantUserGroupInit(request: T.CreateTenantUserGroupRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/tenant/user-groups', {
      path: request ?? {},
      query: {},
    })
    const userActionHttpPath = new URL(path, 'https://dfns.invalid').pathname

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'POST',
        userActionHttpPath,
        userActionPayload: JSON.stringify(request.body),
      },
      this.apiOptions
    )

    return challenge
  }

  async createTenantUserGroupComplete(
    request: T.CreateTenantUserGroupRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreateTenantUserGroupResponse> {
    const path = buildPathAndQuery('/tenant/user-groups', {
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

  async deleteTenantUserInit(request: T.DeleteTenantUserRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/tenant/users/:userId', {
      path: request ?? {},
      query: {},
    })
    const userActionHttpPath = new URL(path, 'https://dfns.invalid').pathname

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'DELETE',
        userActionHttpPath,
        userActionPayload: JSON.stringify({}),
      },
      this.apiOptions
    )

    return challenge
  }

  async deleteTenantUserComplete(
    request: T.DeleteTenantUserRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.DeleteTenantUserResponse> {
    const path = buildPathAndQuery('/tenant/users/:userId', {
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

  async deleteTenantUserGroupInit(request: T.DeleteTenantUserGroupRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/tenant/user-groups/:userGroupId', {
      path: request ?? {},
      query: {},
    })
    const userActionHttpPath = new URL(path, 'https://dfns.invalid').pathname

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'DELETE',
        userActionHttpPath,
        userActionPayload: JSON.stringify({}),
      },
      this.apiOptions
    )

    return challenge
  }

  async deleteTenantUserGroupComplete(
    request: T.DeleteTenantUserGroupRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.DeleteTenantUserGroupResponse> {
    const path = buildPathAndQuery('/tenant/user-groups/:userGroupId', {
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

  async getOrg(request: T.GetOrgRequest): Promise<T.GetOrgResponse> {
    const path = buildPathAndQuery('/tenant/orgs/:orgId', {
      path: request ?? {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async getTenantPermission(request: T.GetTenantPermissionRequest): Promise<T.GetTenantPermissionResponse> {
    const path = buildPathAndQuery('/tenant/permissions/:permissionId', {
      path: request ?? {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async getTenantUser(request: T.GetTenantUserRequest): Promise<T.GetTenantUserResponse> {
    const path = buildPathAndQuery('/tenant/users/:userId', {
      path: request ?? {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async getTenantUserGroup(request: T.GetTenantUserGroupRequest): Promise<T.GetTenantUserGroupResponse> {
    const path = buildPathAndQuery('/tenant/user-groups/:userGroupId', {
      path: request ?? {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listOrgs(request?: T.ListOrgsRequest): Promise<T.ListOrgsResponse> {
    const path = buildPathAndQuery('/tenant/orgs', {
      path: request ?? {},
      query: request?.query ?? {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listTenantPermissions(request?: T.ListTenantPermissionsRequest): Promise<T.ListTenantPermissionsResponse> {
    const path = buildPathAndQuery('/tenant/permissions', {
      path: request ?? {},
      query: request?.query ?? {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listTenantUserGroupMembers(request: T.ListTenantUserGroupMembersRequest): Promise<T.ListTenantUserGroupMembersResponse> {
    const path = buildPathAndQuery('/tenant/user-groups/:userGroupId/members', {
      path: request ?? {},
      query: request.query ?? {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listTenantUserGroups(request?: T.ListTenantUserGroupsRequest): Promise<T.ListTenantUserGroupsResponse> {
    const path = buildPathAndQuery('/tenant/user-groups', {
      path: request ?? {},
      query: request?.query ?? {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listTenantUsers(request?: T.ListTenantUsersRequest): Promise<T.ListTenantUsersResponse> {
    const path = buildPathAndQuery('/tenant/users', {
      path: request ?? {},
      query: request?.query ?? {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async removeTenantUserGroupMembersInit(request: T.RemoveTenantUserGroupMembersRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/tenant/user-groups/:userGroupId/members', {
      path: request ?? {},
      query: {},
    })
    const userActionHttpPath = new URL(path, 'https://dfns.invalid').pathname

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'DELETE',
        userActionHttpPath,
        userActionPayload: JSON.stringify(request.body),
      },
      this.apiOptions
    )

    return challenge
  }

  async removeTenantUserGroupMembersComplete(
    request: T.RemoveTenantUserGroupMembersRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.RemoveTenantUserGroupMembersResponse> {
    const path = buildPathAndQuery('/tenant/user-groups/:userGroupId/members', {
      path: request ?? {},
      query: {},
    })

    const { userAction } = await BaseAuthApi.signUserActionChallenge(
      signedChallenge,
      this.apiOptions
    )

    const response = await simpleFetch(path, {
      method: 'DELETE',
      body: request.body,
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async revokeTenantPermissionInit(request: T.RevokeTenantPermissionRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/tenant/permissions/:permissionId/revoke', {
      path: request ?? {},
      query: {},
    })
    const userActionHttpPath = new URL(path, 'https://dfns.invalid').pathname

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'POST',
        userActionHttpPath,
        userActionPayload: JSON.stringify(request.body),
      },
      this.apiOptions
    )

    return challenge
  }

  async revokeTenantPermissionComplete(
    request: T.RevokeTenantPermissionRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.RevokeTenantPermissionResponse> {
    const path = buildPathAndQuery('/tenant/permissions/:permissionId/revoke', {
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

    
  }

  async updateOrgInit(request: T.UpdateOrgRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/tenant/orgs/:orgId', {
      path: request ?? {},
      query: {},
    })
    const userActionHttpPath = new URL(path, 'https://dfns.invalid').pathname

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'PUT',
        userActionHttpPath,
        userActionPayload: JSON.stringify(request.body),
      },
      this.apiOptions
    )

    return challenge
  }

  async updateOrgComplete(
    request: T.UpdateOrgRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.UpdateOrgResponse> {
    const path = buildPathAndQuery('/tenant/orgs/:orgId', {
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

  async updateOrgStatusInit(request: T.UpdateOrgStatusRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/tenant/orgs/:orgId/status', {
      path: request ?? {},
      query: {},
    })
    const userActionHttpPath = new URL(path, 'https://dfns.invalid').pathname

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'PUT',
        userActionHttpPath,
        userActionPayload: JSON.stringify(request.body),
      },
      this.apiOptions
    )

    return challenge
  }

  async updateOrgStatusComplete(
    request: T.UpdateOrgStatusRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.UpdateOrgStatusResponse> {
    const path = buildPathAndQuery('/tenant/orgs/:orgId/status', {
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

  async updateTenantUserInit(request: T.UpdateTenantUserRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/tenant/users/:userId', {
      path: request ?? {},
      query: {},
    })
    const userActionHttpPath = new URL(path, 'https://dfns.invalid').pathname

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'PUT',
        userActionHttpPath,
        userActionPayload: JSON.stringify(request.body),
      },
      this.apiOptions
    )

    return challenge
  }

  async updateTenantUserComplete(
    request: T.UpdateTenantUserRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.UpdateTenantUserResponse> {
    const path = buildPathAndQuery('/tenant/users/:userId', {
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

  async updateTenantUserGroupInit(request: T.UpdateTenantUserGroupRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/tenant/user-groups/:userGroupId', {
      path: request ?? {},
      query: {},
    })
    const userActionHttpPath = new URL(path, 'https://dfns.invalid').pathname

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'PUT',
        userActionHttpPath,
        userActionPayload: JSON.stringify(request.body),
      },
      this.apiOptions
    )

    return challenge
  }

  async updateTenantUserGroupComplete(
    request: T.UpdateTenantUserGroupRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.UpdateTenantUserGroupResponse> {
    const path = buildPathAndQuery('/tenant/user-groups/:userGroupId', {
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
