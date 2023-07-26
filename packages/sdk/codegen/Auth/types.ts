import * as Auth from '../datamodel/Auth'
import * as Foundations from '../datamodel/Foundations'

export type CreateDelegatedUserRegistrationRequest = {
  body: Auth.CreateUserInput
}

export type CreateDelegatedUserRegistrationResponse =
  Auth.UserRegistrationChallenge

export type CreateUserRegistrationRequest = {
  body: Auth.CreateUserRegistrationInput
}

export type CreateUserRegistrationResponse = Auth.UserRegistration

export type CreateDelegatedUserLoginRequest = {
  body: Auth.CreateDelegatedUserLoginInput
}

export type CreateDelegatedUserLoginResponse = Auth.UserLogin

export type CreateUserActionSignatureChallengeRequest = {
  body: Auth.CreateUserActionSignatureChallengeInput
}

export type CreateUserActionSignatureChallengeResponse = Auth.UserLoginChallenge

export type CreateUserActionSignatureRequest = {
  body: Auth.CreateUserLoginInput
}

export type CreateUserActionSignatureResponse = Auth.UserActionSignature

export type CreateUserCredentialChallengeRequest = {
  body: Auth.CreateUserCredentialChallengeInput
}

export type CreateUserCredentialChallengeResponse = Auth.UserCredentialChallenge

export type CreateUserCredentialRequest = {
  body: Auth.CreateUserCredentialInput
}

export type CreateUserCredentialResponse = Auth.CredentialInfo

export type ActivateCredentialRequest = {
  body: Auth.ActivateCredentialInput
}

export type ActivateCredentialResponse = Auth.GenericSuccessMessage

export type DeactivateCredentialRequest = {
  body: Auth.ActivateCredentialInput
}

export type DeactivateCredentialResponse = Auth.GenericSuccessMessage

export type ListUserCredentialsResponse = { items: Auth.CredentialInfo[] }

export type CreateUserActionSignatureFromCodeRequest = {
  body: Auth.CreateUserLoginFromCodeInput
}

export type CreateUserActionSignatureFromCodeResponse = Auth.UserActionSignature

export type CreateCodeUserActionSignatureChallengeRequest = {
  body: Auth.CreateCodeLoginChallengeInput
}

export type CreateCodeUserActionSignatureChallengeResponse =
  Auth.UserLoginChallenge

export type CreateCodeUserActionSignatureRequest = {
  body: Auth.CreateUserLoginInput
}

export type CreateCodeUserActionSignatureResponse = Auth.GenericSuccessMessage

export type ListPersonalAccessTokensResponse = {
  items: Auth.AccessTokenInfoWithPublicKey[]
}

export type CreatePersonalAccessTokenRequest = {
  body: Auth.CreateAccessTokenInput
}

export type CreatePersonalAccessTokenResponse =
  Auth.AccessTokenInfoWithPublicKey

export type GetPersonalAccessTokensRequest = {
  tokenId: Foundations.EntityId
}

export type GetPersonalAccessTokensResponse = Auth.AccessTokenInfoWithPublicKey

export type UpdatePersonalAccessTokenRequest = {
  tokenId: Foundations.EntityId
  body: Auth.UpdateAccessTokenInput
}

export type UpdatePersonalAccessTokenResponse =
  Auth.AccessTokenInfoWithPublicKey

export type ArchivePersonalAccessTokenRequest = {
  tokenId: Foundations.EntityId
}

export type ArchivePersonalAccessTokenResponse =
  Auth.AccessTokenInfoWithPublicKey

export type ActivatePersonalAccessTokenRequest = {
  tokenId: Foundations.EntityId
}

export type ActivatePersonalAccessTokenResponse =
  Auth.AccessTokenInfoWithPublicKey

export type DeactivatePersonalAccessTokenRequest = {
  tokenId: Foundations.EntityId
}

export type DeactivatePersonalAccessTokenResponse =
  Auth.AccessTokenInfoWithPublicKey

export type ListServiceAccountsResponse = {
  items: Auth.UserAccessTokenInformation[]
}

export type CreateServiceAccountRequest = {
  body: Auth.CreateAccessTokenInput
}

export type CreateServiceAccountResponse = Auth.UserAccessTokenInformation

export type GetServiceAccountRequest = {
  serviceAccountId: Foundations.EntityId
}

export type GetServiceAccountResponse = Auth.UserAccessTokenInformation

export type UpdateServiceAccountRequest = {
  serviceAccountId: Foundations.EntityId
  body: Auth.UpdateAccessTokenInput
}

export type UpdateServiceAccountResponse = Auth.UserAccessTokenInformation

export type ArchiveServiceAccountRequest = {
  serviceAccountId: Foundations.EntityId
}

export type ArchiveServiceAccountResponse = Auth.UserAccessTokenInformation

export type ActivateServiceAccountRequest = {
  serviceAccountId: Foundations.EntityId
}

export type ActivateServiceAccountResponse = Auth.UserAccessTokenInformation

export type DeactivateServiceAccountRequest = {
  serviceAccountId: Foundations.EntityId
}

export type DeactivateServiceAccountResponse = Auth.UserAccessTokenInformation

export type ListUsersResponse = { items: Auth.UserInfo[] }

export type CreateUserRequest = {
  body: Auth.CreateUserInput
}

export type CreateUserResponse = Auth.UserInfo

export type GetUserRequest = {
  userId: Foundations.EntityId
}

export type GetUserResponse = Auth.UserInfo

export type UpdateUserRequest = {
  userId: Foundations.EntityId
  body: Auth.UpdateUserInput
}

export type UpdateUserResponse = Auth.UserInfo

export type ArchiveUserRequest = {
  userId: Foundations.EntityId
}

export type ArchiveUserResponse = Auth.UserInfo

export type ActivateUserRequest = {
  userId: Foundations.EntityId
}

export type ActivateUserResponse = Auth.UserInfo

export type DeactivateUserRequest = {
  userId: Foundations.EntityId
}

export type DeactivateUserResponse = Auth.UserInfo

export type ListApplicationsResponse = { items: Auth.AppInfoWithPublicKey[] }

export type CreateApplicationRequest = {
  body: Auth.CreateApplicationInput
}

export type CreateApplicationResponse = Auth.AppInfoWithPublicKey

export type GetApplicationRequest = {
  appId: Foundations.EntityId
}

export type GetApplicationResponse = Auth.AppInfoWithPublicKey

export type UpdateApplicationRequest = {
  appId: Foundations.EntityId
  body: Auth.UpdateApplicationInput
}

export type UpdateApplicationResponse = Auth.AppInfoWithPublicKey

export type ArchiveApplicationRequest = {
  appId: Foundations.EntityId
}

export type ArchiveApplicationResponse = Auth.AppInfoWithPublicKey

export type ActivateApplicationRequest = {
  appId: Foundations.EntityId
}

export type ActivateApplicationResponse = Auth.AppInfoWithPublicKey

export type DeactivateApplicationRequest = {
  appId: Foundations.EntityId
}

export type DeactivateApplicationResponse = Auth.AppInfoWithPublicKey

export type CreateUserRecoveryRequest = {
  body: Auth.CreateUserLoginChallengeInput
}

export type CreateUserRecoveryResponse = Auth.UserRegistration

export type RestartDelegatedUserRegistrationRequest = {
  body: Auth.CreateUserInput
}

export type RestartDelegatedUserRegistrationResponse =
  Auth.UserRegistrationChallenge
