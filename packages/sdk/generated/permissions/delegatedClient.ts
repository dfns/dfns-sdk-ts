import { BaseAuthApi, SignUserActionChallengeRequest, UserActionChallengeResponse } from '../../baseAuthApi'
import { DfnsDelegatedApiClientOptions } from '../../dfnsDelegatedApiClient'
import { simpleFetch } from '../../utils/fetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class DelegatedPermissionsClient {
  constructor(private apiOptions: DfnsDelegatedApiClientOptions) {}

  async archivePermissionInit(request: T.ArchivePermissionRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/permissions/:permissionId/archive', {
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

  async archivePermissionComplete(
    request: T.ArchivePermissionRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.ArchivePermissionResponse> {
    const path = buildPathAndQuery('/permissions/:permissionId/archive', {
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

  async createAssignmentInit(request: T.CreateAssignmentRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/permissions/:permissionId/assignments', {
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

  async createAssignmentComplete(
    request: T.CreateAssignmentRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreateAssignmentResponse> {
    const path = buildPathAndQuery('/permissions/:permissionId/assignments', {
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

  async createPermissionInit(request: T.CreatePermissionRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/permissions', {
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

  async createPermissionComplete(
    request: T.CreatePermissionRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreatePermissionResponse> {
    const path = buildPathAndQuery('/permissions', {
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

  async deleteAssignmentInit(request: T.DeleteAssignmentRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/permissions/:permissionId/assignments/:assignmentId', {
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

  async deleteAssignmentComplete(
    request: T.DeleteAssignmentRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.DeleteAssignmentResponse> {
    const path = buildPathAndQuery('/permissions/:permissionId/assignments/:assignmentId', {
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

  async updatePermissionInit(request: T.UpdatePermissionRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/permissions/:permissionId', {
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

  async updatePermissionComplete(
    request: T.UpdatePermissionRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.UpdatePermissionResponse> {
    const path = buildPathAndQuery('/permissions/:permissionId', {
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
