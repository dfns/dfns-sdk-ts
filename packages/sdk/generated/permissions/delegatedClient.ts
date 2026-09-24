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
    const userActionHttpPath = new URL(path, 'https://dfns.invalid').pathname

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'PUT',
        userActionHttpPath,
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

  async assignPermissionInit(request: T.AssignPermissionRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/permissions/:permissionId/assignments', {
      path: request ?? {},
      query: {},
    })
    const userActionHttpPath = new URL(path, 'https://dfns.invalid').pathname

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'POST',
        userActionHttpPath,
        userActionPayload: JSON.stringify(request.body),
        userActionServerKind: 'Api',
      },
      this.apiOptions
    )

    return challenge
  }

  async assignPermissionComplete(
    request: T.AssignPermissionRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.AssignPermissionResponse> {
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
    const userActionHttpPath = new URL(path, 'https://dfns.invalid').pathname

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'POST',
        userActionHttpPath,
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
      query: request.query ?? {},
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

  async revokePermissionInit(request: T.RevokePermissionRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/permissions/:permissionId/assignments/:assignmentId', {
      path: request ?? {},
      query: request.query ?? {},
    })
    const userActionHttpPath = new URL(path, 'https://dfns.invalid').pathname

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'DELETE',
        userActionHttpPath,
        userActionPayload: JSON.stringify({}),
        userActionServerKind: 'Api',
      },
      this.apiOptions
    )

    return challenge
  }

  async revokePermissionComplete(
    request: T.RevokePermissionRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.RevokePermissionResponse> {
    const path = buildPathAndQuery('/permissions/:permissionId/assignments/:assignmentId', {
      path: request ?? {},
      query: request.query ?? {},
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

    
  }

  async updatePermissionInit(request: T.UpdatePermissionRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/permissions/:permissionId', {
      path: request ?? {},
      query: {},
    })
    const userActionHttpPath = new URL(path, 'https://dfns.invalid').pathname

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'PUT',
        userActionHttpPath,
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
