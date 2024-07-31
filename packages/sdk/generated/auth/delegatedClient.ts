import { BaseAuthApi, SignUserActionChallengeRequest, UserActionChallengeResponse } from '../../baseAuthApi'
import { DfnsDelegatedApiClientOptions } from '../../dfnsDelegatedApiClient'
import { simpleFetch } from '../../utils/fetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class DelegatedAuthClient {
  constructor(private apiOptions: DfnsDelegatedApiClientOptions) {}

  async activateApplicationInit(request: T.ActivateApplicationRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/auth/apps/:appId/activate', {
      path: request ?? {},
      query: {},
    })

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'PUT',
        userActionHttpPath: path,
        userActionPayload: JSON.stringify({}),
        userActionServerKind: 'Api',
      },
      this.apiOptions
    )

    return challenge
  }

  async activateApplicationComplete(
    request: T.ActivateApplicationRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.ActivateApplicationResponse> {
    const path = buildPathAndQuery('/auth/apps/:appId/activate', {
      path: request ?? {},
      query: {},
    })

    const { userAction } = await BaseAuthApi.signUserActionChallenge(
      signedChallenge,
      this.apiOptions
    )

    const response = await simpleFetch(path, {
      method: 'PUT',
      body: {},
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async activateCredentialInit(request: T.ActivateCredentialRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/auth/credentials/activate', {
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

  async activateCredentialComplete(
    request: T.ActivateCredentialRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.ActivateCredentialResponse> {
    const path = buildPathAndQuery('/auth/credentials/activate', {
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

  async activatePersonalAccessTokenInit(request: T.ActivatePersonalAccessTokenRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/auth/pats/:tokenId/activate', {
      path: request ?? {},
      query: {},
    })

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'PUT',
        userActionHttpPath: path,
        userActionPayload: JSON.stringify({}),
        userActionServerKind: 'Api',
      },
      this.apiOptions
    )

    return challenge
  }

  async activatePersonalAccessTokenComplete(
    request: T.ActivatePersonalAccessTokenRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.ActivatePersonalAccessTokenResponse> {
    const path = buildPathAndQuery('/auth/pats/:tokenId/activate', {
      path: request ?? {},
      query: {},
    })

    const { userAction } = await BaseAuthApi.signUserActionChallenge(
      signedChallenge,
      this.apiOptions
    )

    const response = await simpleFetch(path, {
      method: 'PUT',
      body: {},
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async activateServiceAccountInit(request: T.ActivateServiceAccountRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/auth/service-accounts/:serviceAccountId/activate', {
      path: request ?? {},
      query: {},
    })

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'PUT',
        userActionHttpPath: path,
        userActionPayload: JSON.stringify({}),
        userActionServerKind: 'Api',
      },
      this.apiOptions
    )

    return challenge
  }

  async activateServiceAccountComplete(
    request: T.ActivateServiceAccountRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.ActivateServiceAccountResponse> {
    const path = buildPathAndQuery('/auth/service-accounts/:serviceAccountId/activate', {
      path: request ?? {},
      query: {},
    })

    const { userAction } = await BaseAuthApi.signUserActionChallenge(
      signedChallenge,
      this.apiOptions
    )

    const response = await simpleFetch(path, {
      method: 'PUT',
      body: {},
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async activateUserInit(request: T.ActivateUserRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/auth/users/:userId/activate', {
      path: request ?? {},
      query: {},
    })

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'PUT',
        userActionHttpPath: path,
        userActionPayload: JSON.stringify({}),
        userActionServerKind: 'Api',
      },
      this.apiOptions
    )

    return challenge
  }

  async activateUserComplete(
    request: T.ActivateUserRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.ActivateUserResponse> {
    const path = buildPathAndQuery('/auth/users/:userId/activate', {
      path: request ?? {},
      query: {},
    })

    const { userAction } = await BaseAuthApi.signUserActionChallenge(
      signedChallenge,
      this.apiOptions
    )

    const response = await simpleFetch(path, {
      method: 'PUT',
      body: {},
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async archiveApplicationInit(request: T.ArchiveApplicationRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/auth/apps/:appId', {
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

  async archiveApplicationComplete(
    request: T.ArchiveApplicationRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.ArchiveApplicationResponse> {
    const path = buildPathAndQuery('/auth/apps/:appId', {
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

  async archivePersonalAccessTokenInit(request: T.ArchivePersonalAccessTokenRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/auth/pats/:tokenId', {
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

  async archivePersonalAccessTokenComplete(
    request: T.ArchivePersonalAccessTokenRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.ArchivePersonalAccessTokenResponse> {
    const path = buildPathAndQuery('/auth/pats/:tokenId', {
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

  async archiveServiceAccountInit(request: T.ArchiveServiceAccountRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/auth/service-accounts/:serviceAccountId', {
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

  async archiveServiceAccountComplete(
    request: T.ArchiveServiceAccountRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.ArchiveServiceAccountResponse> {
    const path = buildPathAndQuery('/auth/service-accounts/:serviceAccountId', {
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

  async archiveUserInit(request: T.ArchiveUserRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/auth/users/:userId', {
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

  async archiveUserComplete(
    request: T.ArchiveUserRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.ArchiveUserResponse> {
    const path = buildPathAndQuery('/auth/users/:userId', {
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

  async createApplicationInit(request: T.CreateApplicationRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/auth/apps', {
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

  async createApplicationComplete(
    request: T.CreateApplicationRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreateApplicationResponse> {
    const path = buildPathAndQuery('/auth/apps', {
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

  async createCredentialInit(request: T.CreateCredentialRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/auth/credentials', {
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

  async createCredentialComplete(
    request: T.CreateCredentialRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreateCredentialResponse> {
    const path = buildPathAndQuery('/auth/credentials', {
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

  async createCredentialCodeInit(request: T.CreateCredentialCodeRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/auth/credentials/code', {
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

  async createCredentialCodeComplete(
    request: T.CreateCredentialCodeRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreateCredentialCodeResponse> {
    const path = buildPathAndQuery('/auth/credentials/code', {
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

  async createDelegatedRecoveryChallengeInit(request: T.CreateDelegatedRecoveryChallengeRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/auth/recover/user/delegated', {
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

  async createDelegatedRecoveryChallengeComplete(
    request: T.CreateDelegatedRecoveryChallengeRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreateDelegatedRecoveryChallengeResponse> {
    const path = buildPathAndQuery('/auth/recover/user/delegated', {
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

  async createDelegatedRegistrationChallengeInit(request: T.CreateDelegatedRegistrationChallengeRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/auth/registration/delegated', {
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

  async createDelegatedRegistrationChallengeComplete(
    request: T.CreateDelegatedRegistrationChallengeRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreateDelegatedRegistrationChallengeResponse> {
    const path = buildPathAndQuery('/auth/registration/delegated', {
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

  async createPersonalAccessTokenInit(request: T.CreatePersonalAccessTokenRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/auth/pats', {
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

  async createPersonalAccessTokenComplete(
    request: T.CreatePersonalAccessTokenRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreatePersonalAccessTokenResponse> {
    const path = buildPathAndQuery('/auth/pats', {
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

  async createServiceAccountInit(request: T.CreateServiceAccountRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/auth/service-accounts', {
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

  async createServiceAccountComplete(
    request: T.CreateServiceAccountRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreateServiceAccountResponse> {
    const path = buildPathAndQuery('/auth/service-accounts', {
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

  async createUserInit(request: T.CreateUserRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/auth/users', {
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

  async createUserComplete(
    request: T.CreateUserRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreateUserResponse> {
    const path = buildPathAndQuery('/auth/users', {
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

  async deactivateApplicationInit(request: T.DeactivateApplicationRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/auth/apps/:appId/deactivate', {
      path: request ?? {},
      query: {},
    })

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'PUT',
        userActionHttpPath: path,
        userActionPayload: JSON.stringify({}),
        userActionServerKind: 'Api',
      },
      this.apiOptions
    )

    return challenge
  }

  async deactivateApplicationComplete(
    request: T.DeactivateApplicationRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.DeactivateApplicationResponse> {
    const path = buildPathAndQuery('/auth/apps/:appId/deactivate', {
      path: request ?? {},
      query: {},
    })

    const { userAction } = await BaseAuthApi.signUserActionChallenge(
      signedChallenge,
      this.apiOptions
    )

    const response = await simpleFetch(path, {
      method: 'PUT',
      body: {},
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async deactivateCredentialInit(request: T.DeactivateCredentialRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/auth/credentials/deactivate', {
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

  async deactivateCredentialComplete(
    request: T.DeactivateCredentialRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.DeactivateCredentialResponse> {
    const path = buildPathAndQuery('/auth/credentials/deactivate', {
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

  async deactivatePersonalAccessTokenInit(request: T.DeactivatePersonalAccessTokenRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/auth/pats/:tokenId/deactivate', {
      path: request ?? {},
      query: {},
    })

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'PUT',
        userActionHttpPath: path,
        userActionPayload: JSON.stringify({}),
        userActionServerKind: 'Api',
      },
      this.apiOptions
    )

    return challenge
  }

  async deactivatePersonalAccessTokenComplete(
    request: T.DeactivatePersonalAccessTokenRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.DeactivatePersonalAccessTokenResponse> {
    const path = buildPathAndQuery('/auth/pats/:tokenId/deactivate', {
      path: request ?? {},
      query: {},
    })

    const { userAction } = await BaseAuthApi.signUserActionChallenge(
      signedChallenge,
      this.apiOptions
    )

    const response = await simpleFetch(path, {
      method: 'PUT',
      body: {},
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async deactivateServiceAccountInit(request: T.DeactivateServiceAccountRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/auth/service-accounts/:serviceAccountId/deactivate', {
      path: request ?? {},
      query: {},
    })

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'PUT',
        userActionHttpPath: path,
        userActionPayload: JSON.stringify({}),
        userActionServerKind: 'Api',
      },
      this.apiOptions
    )

    return challenge
  }

  async deactivateServiceAccountComplete(
    request: T.DeactivateServiceAccountRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.DeactivateServiceAccountResponse> {
    const path = buildPathAndQuery('/auth/service-accounts/:serviceAccountId/deactivate', {
      path: request ?? {},
      query: {},
    })

    const { userAction } = await BaseAuthApi.signUserActionChallenge(
      signedChallenge,
      this.apiOptions
    )

    const response = await simpleFetch(path, {
      method: 'PUT',
      body: {},
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async deactivateUserInit(request: T.DeactivateUserRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/auth/users/:userId/deactivate', {
      path: request ?? {},
      query: {},
    })

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'PUT',
        userActionHttpPath: path,
        userActionPayload: JSON.stringify({}),
        userActionServerKind: 'Api',
      },
      this.apiOptions
    )

    return challenge
  }

  async deactivateUserComplete(
    request: T.DeactivateUserRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.DeactivateUserResponse> {
    const path = buildPathAndQuery('/auth/users/:userId/deactivate', {
      path: request ?? {},
      query: {},
    })

    const { userAction } = await BaseAuthApi.signUserActionChallenge(
      signedChallenge,
      this.apiOptions
    )

    const response = await simpleFetch(path, {
      method: 'PUT',
      body: {},
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async delegatedLoginInit(request: T.DelegatedLoginRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/auth/login/delegated', {
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

  async delegatedLoginComplete(
    request: T.DelegatedLoginRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.DelegatedLoginResponse> {
    const path = buildPathAndQuery('/auth/login/delegated', {
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

  async recreateDelegatedRegistrationChallengeInit(request: T.RecreateDelegatedRegistrationChallengeRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/auth/registration/delegated/restart', {
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

  async recreateDelegatedRegistrationChallengeComplete(
    request: T.RecreateDelegatedRegistrationChallengeRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.RecreateDelegatedRegistrationChallengeResponse> {
    const path = buildPathAndQuery('/auth/registration/delegated/restart', {
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

  async resendRegistrationCodeInit(request: T.ResendRegistrationCodeRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/auth/registration/code', {
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

  async resendRegistrationCodeComplete(
    request: T.ResendRegistrationCodeRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.ResendRegistrationCodeResponse> {
    const path = buildPathAndQuery('/auth/registration/code', {
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

  async sendLoginCode(request: T.SendLoginCodeRequest): Promise<T.SendLoginCodeResponse> {
    const path = buildPathAndQuery('/auth/login/code', {
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

  async socialLogin(request: T.SocialLoginRequest): Promise<T.SocialLoginResponse> {
    const path = buildPathAndQuery('/auth/login/social', {
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

  async updateApplicationInit(request: T.UpdateApplicationRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/auth/apps/:appId', {
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

  async updateApplicationComplete(
    request: T.UpdateApplicationRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.UpdateApplicationResponse> {
    const path = buildPathAndQuery('/auth/apps/:appId', {
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

  async updatePersonalAccessTokenInit(request: T.UpdatePersonalAccessTokenRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/auth/pats/:tokenId', {
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

  async updatePersonalAccessTokenComplete(
    request: T.UpdatePersonalAccessTokenRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.UpdatePersonalAccessTokenResponse> {
    const path = buildPathAndQuery('/auth/pats/:tokenId', {
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

  async updateServiceAccountInit(request: T.UpdateServiceAccountRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/auth/service-accounts/:serviceAccountId', {
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

  async updateServiceAccountComplete(
    request: T.UpdateServiceAccountRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.UpdateServiceAccountResponse> {
    const path = buildPathAndQuery('/auth/service-accounts/:serviceAccountId', {
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
