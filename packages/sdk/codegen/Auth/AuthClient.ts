import { DfnsApiClientOptions } from '../../dfnsApiClient'
import { simpleFetch, userActionFetch } from '../../utils/fetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class AuthClient {
  constructor(private apiOptions: DfnsApiClientOptions) {}

  async createDelegatedUserRegistration(
    request: T.CreateDelegatedUserRegistrationRequest
  ): Promise<T.CreateDelegatedUserRegistrationResponse> {
    const path = buildPathAndQuery('/auth/registration/delegated', {
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

  async createUserRegistration(
    request: T.CreateUserRegistrationRequest
  ): Promise<T.CreateUserRegistrationResponse> {
    const path = buildPathAndQuery('/auth/registration', {
      path: {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'POST',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async createDelegatedUserLogin(
    request: T.CreateDelegatedUserLoginRequest
  ): Promise<T.CreateDelegatedUserLoginResponse> {
    const path = buildPathAndQuery('/auth/login/delegated', {
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

  async createUserActionSignatureChallenge(
    request: T.CreateUserActionSignatureChallengeRequest
  ): Promise<T.CreateUserActionSignatureChallengeResponse> {
    const path = buildPathAndQuery('/auth/action/init', {
      path: {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'POST',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async createUserActionSignature(
    request: T.CreateUserActionSignatureRequest
  ): Promise<T.CreateUserActionSignatureResponse> {
    const path = buildPathAndQuery('/auth/action', {
      path: {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'POST',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async createUserCredentialChallenge(
    request: T.CreateUserCredentialChallengeRequest
  ): Promise<T.CreateUserCredentialChallengeResponse> {
    const path = buildPathAndQuery('/auth/credentials/init', {
      path: {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'POST',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async createUserCredential(
    request: T.CreateUserCredentialRequest
  ): Promise<T.CreateUserCredentialResponse> {
    const path = buildPathAndQuery('/auth/credentials', {
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

  async activateCredential(
    request: T.ActivateCredentialRequest
  ): Promise<T.ActivateCredentialResponse> {
    const path = buildPathAndQuery('/auth/credentials/activate', {
      path: {},
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'PUT',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async deactivateCredential(
    request: T.DeactivateCredentialRequest
  ): Promise<T.DeactivateCredentialResponse> {
    const path = buildPathAndQuery('/auth/credentials/deactivate', {
      path: {},
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'PUT',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listUserCredentials(): Promise<T.ListUserCredentialsResponse> {
    const path = buildPathAndQuery('/auth/credentials', {
      path: {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async createUserActionSignatureFromCode(
    request: T.CreateUserActionSignatureFromCodeRequest
  ): Promise<T.CreateUserActionSignatureFromCodeResponse> {
    const path = buildPathAndQuery('/auth/action/code/verify', {
      path: {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'POST',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async createCodeUserActionSignatureChallenge(
    request: T.CreateCodeUserActionSignatureChallengeRequest
  ): Promise<T.CreateCodeUserActionSignatureChallengeResponse> {
    const path = buildPathAndQuery('/auth/action/code/init', {
      path: {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'POST',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async createCodeUserActionSignature(
    request: T.CreateCodeUserActionSignatureRequest
  ): Promise<T.CreateCodeUserActionSignatureResponse> {
    const path = buildPathAndQuery('/auth/action/code', {
      path: {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'POST',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listPersonalAccessTokens(): Promise<T.ListPersonalAccessTokensResponse> {
    const path = buildPathAndQuery('/auth/pats', {
      path: {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async createPersonalAccessToken(
    request: T.CreatePersonalAccessTokenRequest
  ): Promise<T.CreatePersonalAccessTokenResponse> {
    const path = buildPathAndQuery('/auth/pats', {
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

  async getPersonalAccessTokens(
    request: T.GetPersonalAccessTokensRequest
  ): Promise<T.GetPersonalAccessTokensResponse> {
    const path = buildPathAndQuery('/auth/pats/:tokenId', {
      path: { tokenId: request.tokenId },
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async updatePersonalAccessToken(
    request: T.UpdatePersonalAccessTokenRequest
  ): Promise<T.UpdatePersonalAccessTokenResponse> {
    const path = buildPathAndQuery('/auth/pats/:tokenId', {
      path: { tokenId: request.tokenId },
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'PUT',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async archivePersonalAccessToken(
    request: T.ArchivePersonalAccessTokenRequest
  ): Promise<T.ArchivePersonalAccessTokenResponse> {
    const path = buildPathAndQuery('/auth/pats/:tokenId', {
      path: { tokenId: request.tokenId },
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'DELETE',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async activatePersonalAccessToken(
    request: T.ActivatePersonalAccessTokenRequest
  ): Promise<T.ActivatePersonalAccessTokenResponse> {
    const path = buildPathAndQuery('/auth/pats/:tokenId/activate', {
      path: { tokenId: request.tokenId },
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'PUT',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async deactivatePersonalAccessToken(
    request: T.DeactivatePersonalAccessTokenRequest
  ): Promise<T.DeactivatePersonalAccessTokenResponse> {
    const path = buildPathAndQuery('/auth/pats/:tokenId/deactivate', {
      path: { tokenId: request.tokenId },
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'PUT',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listServiceAccounts(): Promise<T.ListServiceAccountsResponse> {
    const path = buildPathAndQuery('/auth/service-accounts', {
      path: {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async createServiceAccount(
    request: T.CreateServiceAccountRequest
  ): Promise<T.CreateServiceAccountResponse> {
    const path = buildPathAndQuery('/auth/service-accounts', {
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

  async getServiceAccount(
    request: T.GetServiceAccountRequest
  ): Promise<T.GetServiceAccountResponse> {
    const path = buildPathAndQuery('/auth/service-accounts/:serviceAccountId', {
      path: { serviceAccountId: request.serviceAccountId },
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async updateServiceAccount(
    request: T.UpdateServiceAccountRequest
  ): Promise<T.UpdateServiceAccountResponse> {
    const path = buildPathAndQuery('/auth/service-accounts/:serviceAccountId', {
      path: { serviceAccountId: request.serviceAccountId },
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'PUT',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async archiveServiceAccount(
    request: T.ArchiveServiceAccountRequest
  ): Promise<T.ArchiveServiceAccountResponse> {
    const path = buildPathAndQuery('/auth/service-accounts/:serviceAccountId', {
      path: { serviceAccountId: request.serviceAccountId },
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'DELETE',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async activateServiceAccount(
    request: T.ActivateServiceAccountRequest
  ): Promise<T.ActivateServiceAccountResponse> {
    const path = buildPathAndQuery(
      '/auth/service-accounts/:serviceAccountId/activate',
      {
        path: { serviceAccountId: request.serviceAccountId },
        query: {},
      }
    )

    const response = await userActionFetch(path, {
      method: 'PUT',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async deactivateServiceAccount(
    request: T.DeactivateServiceAccountRequest
  ): Promise<T.DeactivateServiceAccountResponse> {
    const path = buildPathAndQuery(
      '/auth/service-accounts/:serviceAccountId/deactivate',
      {
        path: { serviceAccountId: request.serviceAccountId },
        query: {},
      }
    )

    const response = await userActionFetch(path, {
      method: 'PUT',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listUsers(): Promise<T.ListUsersResponse> {
    const path = buildPathAndQuery('/auth/users', {
      path: {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async createUser(
    request: T.CreateUserRequest
  ): Promise<T.CreateUserResponse> {
    const path = buildPathAndQuery('/auth/users', {
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

  async getUser(request: T.GetUserRequest): Promise<T.GetUserResponse> {
    const path = buildPathAndQuery('/auth/users/:userId', {
      path: { userId: request.userId },
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async updateUser(
    request: T.UpdateUserRequest
  ): Promise<T.UpdateUserResponse> {
    const path = buildPathAndQuery('/auth/users/:userId', {
      path: { userId: request.userId },
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'PUT',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async archiveUser(
    request: T.ArchiveUserRequest
  ): Promise<T.ArchiveUserResponse> {
    const path = buildPathAndQuery('/auth/users/:userId', {
      path: { userId: request.userId },
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'DELETE',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async activateUser(
    request: T.ActivateUserRequest
  ): Promise<T.ActivateUserResponse> {
    const path = buildPathAndQuery('/auth/users/:userId/activate', {
      path: { userId: request.userId },
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'PUT',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async deactivateUser(
    request: T.DeactivateUserRequest
  ): Promise<T.DeactivateUserResponse> {
    const path = buildPathAndQuery('/auth/users/:userId/deactivate', {
      path: { userId: request.userId },
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'PUT',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listApplications(): Promise<T.ListApplicationsResponse> {
    const path = buildPathAndQuery('/auth/apps', {
      path: {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async createApplication(
    request: T.CreateApplicationRequest
  ): Promise<T.CreateApplicationResponse> {
    const path = buildPathAndQuery('/auth/apps', {
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

  async getApplication(
    request: T.GetApplicationRequest
  ): Promise<T.GetApplicationResponse> {
    const path = buildPathAndQuery('/auth/apps/:appId', {
      path: { appId: request.appId },
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async updateApplication(
    request: T.UpdateApplicationRequest
  ): Promise<T.UpdateApplicationResponse> {
    const path = buildPathAndQuery('/auth/apps/:appId', {
      path: { appId: request.appId },
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'PUT',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async archiveApplication(
    request: T.ArchiveApplicationRequest
  ): Promise<T.ArchiveApplicationResponse> {
    const path = buildPathAndQuery('/auth/apps/:appId', {
      path: { appId: request.appId },
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'DELETE',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async activateApplication(
    request: T.ActivateApplicationRequest
  ): Promise<T.ActivateApplicationResponse> {
    const path = buildPathAndQuery('/auth/apps/:appId/activate', {
      path: { appId: request.appId },
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'PUT',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async deactivateApplication(
    request: T.DeactivateApplicationRequest
  ): Promise<T.DeactivateApplicationResponse> {
    const path = buildPathAndQuery('/auth/apps/:appId/deactivate', {
      path: { appId: request.appId },
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'PUT',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async createUserRecovery(
    request: T.CreateUserRecoveryRequest
  ): Promise<T.CreateUserRecoveryResponse> {
    const path = buildPathAndQuery('/auth/recover/user', {
      path: {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'POST',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }
}
