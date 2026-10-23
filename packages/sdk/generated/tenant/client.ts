/* eslint @typescript-eslint/no-unused-vars: 0 */

import { DfnsApiClientOptions } from '../../types/generic'
import { simpleFetch } from '../../utils/fetch'
import { userActionFetch } from '../../utils/userActionFetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class TenantClient {
  constructor(private apiOptions: DfnsApiClientOptions) {}

  async addTenantUserGroupMembers(request: T.AddTenantUserGroupMembersRequest): Promise<T.AddTenantUserGroupMembersResponse> {
    const path = buildPathAndQuery('/tenant/user-groups/:userGroupId/members', {
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

  async assignTenantPermission(request: T.AssignTenantPermissionRequest): Promise<T.AssignTenantPermissionResponse> {
    const path = buildPathAndQuery('/tenant/permissions/:permissionId/assign', {
      path: request ?? {},
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'POST',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    
  }

  async createOrg(request: T.CreateOrgRequest): Promise<T.CreateOrgResponse> {
    const path = buildPathAndQuery('/tenant/orgs', {
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

  async createTenantUser(request: T.CreateTenantUserRequest): Promise<T.CreateTenantUserResponse> {
    const path = buildPathAndQuery('/tenant/users', {
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

  async createTenantUserGroup(request: T.CreateTenantUserGroupRequest): Promise<T.CreateTenantUserGroupResponse> {
    const path = buildPathAndQuery('/tenant/user-groups', {
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

  async deleteTenantUser(request: T.DeleteTenantUserRequest): Promise<T.DeleteTenantUserResponse> {
    const path = buildPathAndQuery('/tenant/users/:userId', {
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

  async deleteTenantUserGroup(request: T.DeleteTenantUserGroupRequest): Promise<T.DeleteTenantUserGroupResponse> {
    const path = buildPathAndQuery('/tenant/user-groups/:userGroupId', {
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

  async removeTenantUserGroupMembers(request: T.RemoveTenantUserGroupMembersRequest): Promise<T.RemoveTenantUserGroupMembersResponse> {
    const path = buildPathAndQuery('/tenant/user-groups/:userGroupId/members', {
      path: request ?? {},
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'DELETE',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async revokeTenantPermission(request: T.RevokeTenantPermissionRequest): Promise<T.RevokeTenantPermissionResponse> {
    const path = buildPathAndQuery('/tenant/permissions/:permissionId/revoke', {
      path: request ?? {},
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'POST',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    
  }

  async updateOrg(request: T.UpdateOrgRequest): Promise<T.UpdateOrgResponse> {
    const path = buildPathAndQuery('/tenant/orgs/:orgId', {
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

  async updateOrgStatus(request: T.UpdateOrgStatusRequest): Promise<T.UpdateOrgStatusResponse> {
    const path = buildPathAndQuery('/tenant/orgs/:orgId/status', {
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

  async updateTenantUser(request: T.UpdateTenantUserRequest): Promise<T.UpdateTenantUserResponse> {
    const path = buildPathAndQuery('/tenant/users/:userId', {
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

  async updateTenantUserGroup(request: T.UpdateTenantUserGroupRequest): Promise<T.UpdateTenantUserGroupResponse> {
    const path = buildPathAndQuery('/tenant/user-groups/:userGroupId', {
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
