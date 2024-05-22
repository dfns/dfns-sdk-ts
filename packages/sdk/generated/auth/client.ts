import { DfnsApiClientOptions } from '../../dfnsApiClient'
import { simpleFetch, userActionFetch } from '../../utils/fetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class AuthClient {
  constructor(private apiOptions: DfnsApiClientOptions) {}

  async activateApplication(request: T.ActivateApplicationRequest): Promise<T.ActivateApplicationResponse> {
    const path = buildPathAndQuery('/auth/apps/:appId/activate', {
      path: request ?? {},
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'PUT',
      body: {},
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async activateCredential(request: T.ActivateCredentialRequest): Promise<T.ActivateCredentialResponse> {
    const path = buildPathAndQuery('/auth/credentials/activate', {
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

  async activatePersonalAccessToken(request: T.ActivatePersonalAccessTokenRequest): Promise<T.ActivatePersonalAccessTokenResponse> {
    const path = buildPathAndQuery('/auth/pats/:tokenId/activate', {
      path: request ?? {},
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'PUT',
      body: {},
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async activateServiceAccount(request: T.ActivateServiceAccountRequest): Promise<T.ActivateServiceAccountResponse> {
    const path = buildPathAndQuery('/auth/service-accounts/:serviceAccountId/activate', {
      path: request ?? {},
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'PUT',
      body: {},
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async activateUser(request: T.ActivateUserRequest): Promise<T.ActivateUserResponse> {
    const path = buildPathAndQuery('/auth/users/:userId/activate', {
      path: request ?? {},
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'PUT',
      body: {},
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async archiveApplication(request: T.ArchiveApplicationRequest): Promise<T.ArchiveApplicationResponse> {
    const path = buildPathAndQuery('/auth/apps/:appId', {
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

  async archivePersonalAccessToken(request: T.ArchivePersonalAccessTokenRequest): Promise<T.ArchivePersonalAccessTokenResponse> {
    const path = buildPathAndQuery('/auth/pats/:tokenId', {
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

  async archiveServiceAccount(request: T.ArchiveServiceAccountRequest): Promise<T.ArchiveServiceAccountResponse> {
    const path = buildPathAndQuery('/auth/service-accounts/:serviceAccountId', {
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

  async archiveUser(request: T.ArchiveUserRequest): Promise<T.ArchiveUserResponse> {
    const path = buildPathAndQuery('/auth/users/:userId', {
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

  async createApplication(request: T.CreateApplicationRequest): Promise<T.CreateApplicationResponse> {
    const path = buildPathAndQuery('/auth/apps', {
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

  async createCredential(request: T.CreateCredentialRequest): Promise<T.CreateCredentialResponse> {
    const path = buildPathAndQuery('/auth/credentials', {
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
  
  /** @deprecated, use createCredential instead */
  async createUserCredential(request: T.CreateCredentialRequest): Promise<T.CreateCredentialResponse> {
    return this.createCredential(request)
  }

  async createCredentialChallenge(request: T.CreateCredentialChallengeRequest): Promise<T.CreateCredentialChallengeResponse> {
    const path = buildPathAndQuery('/auth/credentials/init', {
      path: request ?? {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'POST',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }
  
  /** @deprecated, use createCredentialChallenge instead */
  async createUserCredentialChallenge(request: T.CreateCredentialChallengeRequest): Promise<T.CreateCredentialChallengeResponse> {
    return this.createCredentialChallenge(request)
  }

  async createCredentialChallengeWithCode(request: T.CreateCredentialChallengeWithCodeRequest): Promise<T.CreateCredentialChallengeWithCodeResponse> {
    const path = buildPathAndQuery('/auth/credentials/code/init', {
      path: request ?? {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'POST',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async createCredentialCode(request: T.CreateCredentialCodeRequest): Promise<T.CreateCredentialCodeResponse> {
    const path = buildPathAndQuery('/auth/credentials/code', {
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

  async createCredentialWithCode(request: T.CreateCredentialWithCodeRequest): Promise<T.CreateCredentialWithCodeResponse> {
    const path = buildPathAndQuery('/auth/credentials/code/verify', {
      path: request ?? {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'POST',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async createDelegatedRecoveryChallenge(request: T.CreateDelegatedRecoveryChallengeRequest): Promise<T.CreateDelegatedRecoveryChallengeResponse> {
    const path = buildPathAndQuery('/auth/recover/user/delegated', {
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
  
  /** @deprecated, use createDelegatedRecoveryChallenge instead */
  async createDelegatedUserRecovery(request: T.CreateDelegatedRecoveryChallengeRequest): Promise<T.CreateDelegatedRecoveryChallengeResponse> {
    return this.createDelegatedRecoveryChallenge(request)
  }

  async createDelegatedRegistrationChallenge(request: T.CreateDelegatedRegistrationChallengeRequest): Promise<T.CreateDelegatedRegistrationChallengeResponse> {
    const path = buildPathAndQuery('/auth/registration/delegated', {
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
  
  /** @deprecated, use createDelegatedRegistrationChallenge instead */
  async createDelegatedUserRegistration(request: T.CreateDelegatedRegistrationChallengeRequest): Promise<T.CreateDelegatedRegistrationChallengeResponse> {
    return this.createDelegatedRegistrationChallenge(request)
  }

  async createLoginChallenge(request: T.CreateLoginChallengeRequest): Promise<T.CreateLoginChallengeResponse> {
    const path = buildPathAndQuery('/auth/login/init', {
      path: request ?? {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'POST',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async createPersonalAccessToken(request: T.CreatePersonalAccessTokenRequest): Promise<T.CreatePersonalAccessTokenResponse> {
    const path = buildPathAndQuery('/auth/pats', {
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

  async createRecoveryChallenge(request: T.CreateRecoveryChallengeRequest): Promise<T.CreateRecoveryChallengeResponse> {
    const path = buildPathAndQuery('/auth/recover/user/init', {
      path: request ?? {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'POST',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async createRegistrationChallenge(request: T.CreateRegistrationChallengeRequest): Promise<T.CreateRegistrationChallengeResponse> {
    const path = buildPathAndQuery('/auth/registration/init', {
      path: request ?? {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'POST',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async createServiceAccount(request: T.CreateServiceAccountRequest): Promise<T.CreateServiceAccountResponse> {
    const path = buildPathAndQuery('/auth/service-accounts', {
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

  async createSocialRegistrationChallenge(request: T.CreateSocialRegistrationChallengeRequest): Promise<T.CreateSocialRegistrationChallengeResponse> {
    const path = buildPathAndQuery('/auth/registration/social', {
      path: request ?? {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'POST',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async createUser(request: T.CreateUserRequest): Promise<T.CreateUserResponse> {
    const path = buildPathAndQuery('/auth/users', {
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

  async createUserActionChallenge(request: T.CreateUserActionChallengeRequest): Promise<T.CreateUserActionChallengeResponse> {
    const path = buildPathAndQuery('/auth/action/init', {
      path: request ?? {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'POST',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }
  
  /** @deprecated, use createUserActionChallenge instead */
  async createUserActionSignatureChallenge(request: T.CreateUserActionChallengeRequest): Promise<T.CreateUserActionChallengeResponse> {
    return this.createUserActionChallenge(request)
  }

  async createUserActionSignature(request: T.CreateUserActionSignatureRequest): Promise<T.CreateUserActionSignatureResponse> {
    const path = buildPathAndQuery('/auth/action', {
      path: request ?? {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'POST',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async deactivateApplication(request: T.DeactivateApplicationRequest): Promise<T.DeactivateApplicationResponse> {
    const path = buildPathAndQuery('/auth/apps/:appId/deactivate', {
      path: request ?? {},
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'PUT',
      body: {},
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async deactivateCredential(request: T.DeactivateCredentialRequest): Promise<T.DeactivateCredentialResponse> {
    const path = buildPathAndQuery('/auth/credentials/deactivate', {
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

  async deactivatePersonalAccessToken(request: T.DeactivatePersonalAccessTokenRequest): Promise<T.DeactivatePersonalAccessTokenResponse> {
    const path = buildPathAndQuery('/auth/pats/:tokenId/deactivate', {
      path: request ?? {},
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'PUT',
      body: {},
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async deactivateServiceAccount(request: T.DeactivateServiceAccountRequest): Promise<T.DeactivateServiceAccountResponse> {
    const path = buildPathAndQuery('/auth/service-accounts/:serviceAccountId/deactivate', {
      path: request ?? {},
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'PUT',
      body: {},
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async deactivateUser(request: T.DeactivateUserRequest): Promise<T.DeactivateUserResponse> {
    const path = buildPathAndQuery('/auth/users/:userId/deactivate', {
      path: request ?? {},
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'PUT',
      body: {},
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async delegatedLogin(request: T.DelegatedLoginRequest): Promise<T.DelegatedLoginResponse> {
    const path = buildPathAndQuery('/auth/login/delegated', {
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
  
  /** @deprecated, use delegatedLogin instead */
  async createDelegatedUserLogin(request: T.DelegatedLoginRequest): Promise<T.DelegatedLoginResponse> {
    return this.delegatedLogin(request)
  }

  async getApplication(request: T.GetApplicationRequest): Promise<T.GetApplicationResponse> {
    const path = buildPathAndQuery('/auth/apps/:appId', {
      path: request ?? {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async getPersonalAccessToken(request: T.GetPersonalAccessTokenRequest): Promise<T.GetPersonalAccessTokenResponse> {
    const path = buildPathAndQuery('/auth/pats/:tokenId', {
      path: request ?? {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async getServiceAccount(request: T.GetServiceAccountRequest): Promise<T.GetServiceAccountResponse> {
    const path = buildPathAndQuery('/auth/service-accounts/:serviceAccountId', {
      path: request ?? {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async getUser(request: T.GetUserRequest): Promise<T.GetUserResponse> {
    const path = buildPathAndQuery('/auth/users/:userId', {
      path: request ?? {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
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

  async listAvailableOrgs(request: T.ListAvailableOrgsRequest): Promise<T.ListAvailableOrgsResponse> {
    const path = buildPathAndQuery('/auth/login/orgs', {
      path: request ?? {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'POST',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listCredentials(): Promise<T.ListCredentialsResponse> {
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
  
  /** @deprecated, use listCredentials instead */
  async listUserCredentials(): Promise<T.ListCredentialsResponse> {
    return this.listCredentials()
  }

  async listOrgSettings(): Promise<T.ListOrgSettingsResponse> {
    const path = buildPathAndQuery('/org/settings', {
      path: {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
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

  async listUsers(request?: T.ListUsersRequest): Promise<T.ListUsersResponse> {
    const path = buildPathAndQuery('/auth/users', {
      path: request ?? {},
      query: request?.query ?? {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async login(request: T.LoginRequest): Promise<T.LoginResponse> {
    const path = buildPathAndQuery('/auth/login', {
      path: request ?? {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'POST',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async logout(): Promise<T.LogoutResponse> {
    const path = buildPathAndQuery('/auth/logout', {
      path: {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'POST',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async recover(request: T.RecoverRequest): Promise<T.RecoverResponse> {
    const path = buildPathAndQuery('/auth/recover/user', {
      path: request ?? {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'POST',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }
  
  /** @deprecated, use recover instead */
  async createUserRecovery(request: T.RecoverRequest): Promise<T.RecoverResponse> {
    return this.recover(request)
  }

  async recreateDelegatedRegistrationChallenge(request: T.RecreateDelegatedRegistrationChallengeRequest): Promise<T.RecreateDelegatedRegistrationChallengeResponse> {
    const path = buildPathAndQuery('/auth/registration/delegated/restart', {
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
  
  /** @deprecated, use recreateDelegatedRegistrationChallenge instead */
  async restartDelegatedUserRegistration(request: T.RecreateDelegatedRegistrationChallengeRequest): Promise<T.RecreateDelegatedRegistrationChallengeResponse> {
    return this.recreateDelegatedRegistrationChallenge(request)
  }

  async register(request: T.RegisterRequest): Promise<T.RegisterResponse> {
    const path = buildPathAndQuery('/auth/registration', {
      path: request ?? {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'POST',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }
  
  /** @deprecated, use register instead */
  async createUserRegistration(request: T.RegisterRequest): Promise<T.RegisterResponse> {
    return this.register(request)
  }

  async registerEndUser(request: T.RegisterEndUserRequest): Promise<T.RegisterEndUserResponse> {
    const path = buildPathAndQuery('/auth/registration/enduser', {
      path: request ?? {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'POST',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async resendRegistrationCode(request: T.ResendRegistrationCodeRequest): Promise<T.ResendRegistrationCodeResponse> {
    const path = buildPathAndQuery('/auth/registration/code', {
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

  async sendRecoveryCode(request: T.SendRecoveryCodeRequest): Promise<T.SendRecoveryCodeResponse> {
    const path = buildPathAndQuery('/auth/recover/user/code', {
      path: request ?? {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'POST',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async updateApplication(request: T.UpdateApplicationRequest): Promise<T.UpdateApplicationResponse> {
    const path = buildPathAndQuery('/auth/apps/:appId', {
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

  async updateOrgSettings(request: T.UpdateOrgSettingsRequest): Promise<T.UpdateOrgSettingsResponse> {
    const path = buildPathAndQuery('/org/settings', {
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

  async updatePersonalAccessToken(request: T.UpdatePersonalAccessTokenRequest): Promise<T.UpdatePersonalAccessTokenResponse> {
    const path = buildPathAndQuery('/auth/pats/:tokenId', {
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

  async updateServiceAccount(request: T.UpdateServiceAccountRequest): Promise<T.UpdateServiceAccountResponse> {
    const path = buildPathAndQuery('/auth/service-accounts/:serviceAccountId', {
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

  async updateUser(request: T.UpdateUserRequest): Promise<T.UpdateUserResponse> {
    const path = buildPathAndQuery('/auth/users/:userId', {
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
