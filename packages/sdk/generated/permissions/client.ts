import { DfnsApiClientOptions } from '../../dfnsApiClient'
import { simpleFetch, userActionFetch } from '../../utils/fetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class PermissionsClient {
  constructor(private apiOptions: DfnsApiClientOptions) {}

  async archivePermission(request: T.ArchivePermissionRequest): Promise<T.ArchivePermissionResponse> {
    const path = buildPathAndQuery('/permissions/:permissionId/archive', {
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

  async createAssignment(request: T.CreateAssignmentRequest): Promise<T.CreateAssignmentResponse> {
    const path = buildPathAndQuery('/permissions/:permissionId/assignments', {
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

  async createPermission(request: T.CreatePermissionRequest): Promise<T.CreatePermissionResponse> {
    const path = buildPathAndQuery('/permissions', {
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

  async deleteAssignment(request: T.DeleteAssignmentRequest): Promise<T.DeleteAssignmentResponse> {
    const path = buildPathAndQuery('/permissions/:permissionId/assignments/:assignmentId', {
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

  async getPermission(request: T.GetPermissionRequest): Promise<T.GetPermissionResponse> {
    const path = buildPathAndQuery('/permissions/:permissionId', {
      path: request ?? {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listAssignments(request: T.ListAssignmentsRequest): Promise<T.ListAssignmentsResponse> {
    const path = buildPathAndQuery('/permissions/:permissionId/assignments', {
      path: request ?? {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listPermissions(request?: T.ListPermissionsRequest): Promise<T.ListPermissionsResponse> {
    const path = buildPathAndQuery('/permissions', {
      path: request ?? {},
      query: request?.query ?? {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async updatePermission(request: T.UpdatePermissionRequest): Promise<T.UpdatePermissionResponse> {
    const path = buildPathAndQuery('/permissions/:permissionId', {
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
