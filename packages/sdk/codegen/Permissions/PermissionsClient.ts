import { DfnsApiClientOptions } from '../../dfnsApiClient'
import { simpleFetch, userActionFetch } from '../../utils/fetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class PermissionsClient {
  constructor(private apiOptions: DfnsApiClientOptions) {}

  async createPermission(
    request: T.CreatePermissionRequest
  ): Promise<T.CreatePermissionResponse> {
    const path = buildPathAndQuery('/permissions', {
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

  async updatePermission(
    request: T.UpdatePermissionRequest
  ): Promise<T.UpdatePermissionResponse> {
    const path = buildPathAndQuery('/permissions/:permissionId', {
      path: { permissionId: request.permissionId },
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'PUT',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async archivePermission(
    request: T.ArchivePermissionRequest
  ): Promise<T.ArchivePermissionResponse> {
    const path = buildPathAndQuery('/permissions/:permissionId/archive', {
      path: { permissionId: request.permissionId },
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'PUT',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async getPermissionById(
    request: T.GetPermissionByIdRequest
  ): Promise<T.GetPermissionByIdResponse> {
    const path = buildPathAndQuery('/permissions/:permissionId', {
      path: { permissionId: request.permissionId },
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listPermissions(): Promise<T.ListPermissionsResponse> {
    const path = buildPathAndQuery('/permissions', {
      path: {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async createPermissionPredicate(
    request: T.CreatePermissionPredicateRequest
  ): Promise<T.CreatePermissionPredicateResponse> {
    const path = buildPathAndQuery(
      '/dev-permissions/:permissionId/predicates',
      {
        path: { permissionId: request.permissionId },
        query: {},
      }
    )

    const response = await userActionFetch(path, {
      method: 'POST',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async updatePermissionPredicate(
    request: T.UpdatePermissionPredicateRequest
  ): Promise<T.UpdatePermissionPredicateResponse> {
    const path = buildPathAndQuery(
      '/dev-permissions/:permissionId/predicates/:predicateId',
      {
        path: {
          permissionId: request.permissionId,
          predicateId: request.predicateId,
        },
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

  async archivePermissionPredicate(
    request: T.ArchivePermissionPredicateRequest
  ): Promise<T.ArchivePermissionPredicateResponse> {
    const path = buildPathAndQuery(
      '/dev-permissions/:permissionId/predicates/:predicateId/archive',
      {
        path: {
          permissionId: request.permissionId,
          predicateId: request.predicateId,
        },
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

  async listPermissionPredicates(
    request: T.ListPermissionPredicatesRequest
  ): Promise<T.ListPermissionPredicatesResponse> {
    const path = buildPathAndQuery(
      '/dev-permissions/:permissionId/predicates',
      {
        path: { permissionId: request.permissionId },
        query: {},
      }
    )

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async createPermissionAssignment(
    request: T.CreatePermissionAssignmentRequest
  ): Promise<T.CreatePermissionAssignmentResponse> {
    const path = buildPathAndQuery('/permissions/assignments', {
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

  async revokePermissionAssignment(
    request: T.RevokePermissionAssignmentRequest
  ): Promise<T.RevokePermissionAssignmentResponse> {
    const path = buildPathAndQuery('/permissions/assignments/:assignmentId', {
      path: { assignmentId: request.assignmentId },
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'DELETE',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listPermissionAssignments(
    request: T.ListPermissionAssignmentsRequest
  ): Promise<T.ListPermissionAssignmentsResponse> {
    const path = buildPathAndQuery('/permissions/assignments', {
      path: {},
      query: request.query ?? {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listPermissionsHistorical(
    request: T.ListPermissionsHistoricalRequest
  ): Promise<T.ListPermissionsHistoricalResponse> {
    const path = buildPathAndQuery('/audit/permissions', {
      path: {},
      query: request.query ?? {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }
}
