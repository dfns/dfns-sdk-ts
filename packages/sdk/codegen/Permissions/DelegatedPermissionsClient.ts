import {
  BaseAuthApi,
  SignUserActionChallengeRequest,
  UserActionChallengeResponse,
} from '../../baseAuthApi'
import { DfnsDelegatedApiClientOptions } from '../../dfnsDelegatedApiClient'
import { simpleFetch } from '../../utils/fetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class DelegatedPermissionsClient {
  constructor(private apiOptions: DfnsDelegatedApiClientOptions) {}

  async createPermissionInit(
    request: T.CreatePermissionRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/permissions', {
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

  async createPermissionComplete(
    request: T.CreatePermissionRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreatePermissionResponse> {
    const path = buildPathAndQuery('/permissions', {
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

  async updatePermissionInit(
    request: T.UpdatePermissionRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/permissions/:permissionId', {
      path: { permissionId: request.permissionId },
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

  async updatePermissionComplete(
    request: T.UpdatePermissionRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.UpdatePermissionResponse> {
    const path = buildPathAndQuery('/permissions/:permissionId', {
      path: { permissionId: request.permissionId },
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

  async archivePermissionInit(
    request: T.ArchivePermissionRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/permissions/:permissionId/archive', {
      path: { permissionId: request.permissionId },
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

  async archivePermissionComplete(
    request: T.ArchivePermissionRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.ArchivePermissionResponse> {
    const path = buildPathAndQuery('/permissions/:permissionId/archive', {
      path: { permissionId: request.permissionId },
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

  async createPermissionPredicateInit(
    request: T.CreatePermissionPredicateRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery(
      '/dev-permissions/:permissionId/predicates',
      {
        path: { permissionId: request.permissionId },
        query: {},
      }
    )

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

  async createPermissionPredicateComplete(
    request: T.CreatePermissionPredicateRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreatePermissionPredicateResponse> {
    const path = buildPathAndQuery(
      '/dev-permissions/:permissionId/predicates',
      {
        path: { permissionId: request.permissionId },
        query: {},
      }
    )

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

  async updatePermissionPredicateInit(
    request: T.UpdatePermissionPredicateRequest
  ): Promise<UserActionChallengeResponse> {
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

  async updatePermissionPredicateComplete(
    request: T.UpdatePermissionPredicateRequest,
    signedChallenge: SignUserActionChallengeRequest
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

  async archivePermissionPredicateInit(
    request: T.ArchivePermissionPredicateRequest
  ): Promise<UserActionChallengeResponse> {
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

  async archivePermissionPredicateComplete(
    request: T.ArchivePermissionPredicateRequest,
    signedChallenge: SignUserActionChallengeRequest
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

  async createPermissionAssignmentInit(
    request: T.CreatePermissionAssignmentRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/permissions/assignments', {
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

  async createPermissionAssignmentComplete(
    request: T.CreatePermissionAssignmentRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreatePermissionAssignmentResponse> {
    const path = buildPathAndQuery('/permissions/assignments', {
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

  async revokePermissionAssignmentInit(
    request: T.RevokePermissionAssignmentRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/permissions/assignments/:assignmentId', {
      path: { assignmentId: request.assignmentId },
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

  async revokePermissionAssignmentComplete(
    request: T.RevokePermissionAssignmentRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.RevokePermissionAssignmentResponse> {
    const path = buildPathAndQuery('/permissions/assignments/:assignmentId', {
      path: { assignmentId: request.assignmentId },
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
}
