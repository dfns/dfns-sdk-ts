import {
  BadRequestError,
  EntityNotFoundError,
  ForbiddenError,
  UnauthorizedError,
} from '../Foundations'
import {
  AccessTokenInfoWithPublicKey,
  AppInfoWithPublicKey,
  AvailableOrg,
  CredentialInfo,
  GenericSuccessMessage,
  UserAccessTokenInformation,
  UserActionSignature,
  UserCredentialChallenge,
  UserInfo,
  UserLogin,
  UserLoginChallenge,
  UserRecoveryChallenge,
  UserRegistration,
  UserRegistrationChallenge,
} from './types'

// Response for CreateDelegatedUserRegistration

export type CreateDelegatedUserRegistrationSuccess = UserRegistrationChallenge

export type CreateDelegatedUserRegistrationError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type CreateDelegatedUserRegistrationResponse =
  | CreateDelegatedUserRegistrationSuccess
  | CreateDelegatedUserRegistrationError

// Response for CreateUserRegistrationChallenge

export type CreateUserRegistrationChallengeSuccess = UserRegistrationChallenge

export type CreateUserRegistrationChallengeError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type CreateUserRegistrationChallengeResponse =
  | CreateUserRegistrationChallengeSuccess
  | CreateUserRegistrationChallengeError

// Response for CreateUserRegistration

export type CreateUserRegistrationSuccess = UserRegistration

export type CreateUserRegistrationError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type CreateUserRegistrationResponse =
  | CreateUserRegistrationSuccess
  | CreateUserRegistrationError

// Response for CreateUserLoginChallenge

export type CreateUserLoginChallengeSuccess = UserLoginChallenge

export type CreateUserLoginChallengeError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type CreateUserLoginChallengeResponse =
  | CreateUserLoginChallengeSuccess
  | CreateUserLoginChallengeError

// Response for CreateUserLogin

export type CreateUserLoginSuccess = UserLogin

export type CreateUserLoginError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type CreateUserLoginResponse =
  | CreateUserLoginSuccess
  | CreateUserLoginError

// Response for CreateDelegatedUserLogin

export type CreateDelegatedUserLoginSuccess = UserLogin

export type CreateDelegatedUserLoginError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type CreateDelegatedUserLoginResponse =
  | CreateDelegatedUserLoginSuccess
  | CreateDelegatedUserLoginError

// Response for CreateUserActionSignatureChallenge

export type CreateUserActionSignatureChallengeSuccess = UserLoginChallenge

export type CreateUserActionSignatureChallengeError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type CreateUserActionSignatureChallengeResponse =
  | CreateUserActionSignatureChallengeSuccess
  | CreateUserActionSignatureChallengeError

// Response for CreateUserActionSignature

export type CreateUserActionSignatureSuccess = UserActionSignature

export type CreateUserActionSignatureError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type CreateUserActionSignatureResponse =
  | CreateUserActionSignatureSuccess
  | CreateUserActionSignatureError

// Response for ResendUserRegistrationEmail

export type ResendUserRegistrationEmailSuccess = GenericSuccessMessage

export type ResendUserRegistrationEmailError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type ResendUserRegistrationEmailResponse =
  | ResendUserRegistrationEmailSuccess
  | ResendUserRegistrationEmailError

// Response for CreateUserCredentialChallenge

export type CreateUserCredentialChallengeSuccess = UserCredentialChallenge

export type CreateUserCredentialChallengeError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type CreateUserCredentialChallengeResponse =
  | CreateUserCredentialChallengeSuccess
  | CreateUserCredentialChallengeError

// Response for CreateUserCredential

export type CreateUserCredentialSuccess = CredentialInfo

export type CreateUserCredentialError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type CreateUserCredentialResponse =
  | CreateUserCredentialSuccess
  | CreateUserCredentialError

// Response for ActivateCredential

export type ActivateCredentialSuccess = GenericSuccessMessage

export type ActivateCredentialError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type ActivateCredentialResponse =
  | ActivateCredentialSuccess
  | ActivateCredentialError

// Response for DeactivateCredential

export type DeactivateCredentialSuccess = GenericSuccessMessage

export type DeactivateCredentialError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type DeactivateCredentialResponse =
  | DeactivateCredentialSuccess
  | DeactivateCredentialError

// Response for ListUserCredentials

export type ListUserCredentialsSuccess = {
  items: CredentialInfo[]
}

export type ListUserCredentialsError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type ListUserCredentialsResponse =
  | ListUserCredentialsSuccess
  | ListUserCredentialsError

// Response for CreateCodeLoginChallenge

export type CreateCodeLoginChallengeSuccess = UserLoginChallenge

export type CreateCodeLoginChallengeError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type CreateCodeLoginChallengeResponse =
  | CreateCodeLoginChallengeSuccess
  | CreateCodeLoginChallengeError

// Response for CreateCodeLogin

export type CreateCodeLoginSuccess = GenericSuccessMessage

export type CreateCodeLoginError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type CreateCodeLoginResponse =
  | CreateCodeLoginSuccess
  | CreateCodeLoginError

// Response for CreateUserLoginFromCode

export type CreateUserLoginFromCodeSuccess = UserLogin

export type CreateUserLoginFromCodeError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type CreateUserLoginFromCodeResponse =
  | CreateUserLoginFromCodeSuccess
  | CreateUserLoginFromCodeError

// Response for CreateUserActionSignatureFromCode

export type CreateUserActionSignatureFromCodeSuccess = UserActionSignature

export type CreateUserActionSignatureFromCodeError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type CreateUserActionSignatureFromCodeResponse =
  | CreateUserActionSignatureFromCodeSuccess
  | CreateUserActionSignatureFromCodeError

// Response for CreateCodeUserActionSignatureChallenge

export type CreateCodeUserActionSignatureChallengeSuccess = UserLoginChallenge

export type CreateCodeUserActionSignatureChallengeError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type CreateCodeUserActionSignatureChallengeResponse =
  | CreateCodeUserActionSignatureChallengeSuccess
  | CreateCodeUserActionSignatureChallengeError

// Response for CreateCodeUserActionSignature

export type CreateCodeUserActionSignatureSuccess = GenericSuccessMessage

export type CreateCodeUserActionSignatureError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type CreateCodeUserActionSignatureResponse =
  | CreateCodeUserActionSignatureSuccess
  | CreateCodeUserActionSignatureError

// Response for CreateAvailableOrgList

export type CreateAvailableOrgListSuccess = {
  items: AvailableOrg[]
}

export type CreateAvailableOrgListError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type CreateAvailableOrgListResponse =
  | CreateAvailableOrgListSuccess
  | CreateAvailableOrgListError

// Response for ListPersonalAccessTokens

export type ListPersonalAccessTokensSuccess = {
  items: AccessTokenInfoWithPublicKey[]
}

export type ListPersonalAccessTokensError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type ListPersonalAccessTokensResponse =
  | ListPersonalAccessTokensSuccess
  | ListPersonalAccessTokensError

// Response for CreatePersonalAccessToken

export type CreatePersonalAccessTokenSuccess = AccessTokenInfoWithPublicKey

export type CreatePersonalAccessTokenError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type CreatePersonalAccessTokenResponse =
  | CreatePersonalAccessTokenSuccess
  | CreatePersonalAccessTokenError

// Response for GetPersonalAccessTokens

export type GetPersonalAccessTokensSuccess = AccessTokenInfoWithPublicKey

export type GetPersonalAccessTokensError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type GetPersonalAccessTokensResponse =
  | GetPersonalAccessTokensSuccess
  | GetPersonalAccessTokensError

// Response for UpdatePersonalAccessToken

export type UpdatePersonalAccessTokenSuccess = AccessTokenInfoWithPublicKey

export type UpdatePersonalAccessTokenError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type UpdatePersonalAccessTokenResponse =
  | UpdatePersonalAccessTokenSuccess
  | UpdatePersonalAccessTokenError

// Response for ArchivePersonalAccessToken

export type ArchivePersonalAccessTokenSuccess = AccessTokenInfoWithPublicKey

export type ArchivePersonalAccessTokenError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type ArchivePersonalAccessTokenResponse =
  | ArchivePersonalAccessTokenSuccess
  | ArchivePersonalAccessTokenError

// Response for ActivatePersonalAccessToken

export type ActivatePersonalAccessTokenSuccess = AccessTokenInfoWithPublicKey

export type ActivatePersonalAccessTokenError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type ActivatePersonalAccessTokenResponse =
  | ActivatePersonalAccessTokenSuccess
  | ActivatePersonalAccessTokenError

// Response for DeactivatePersonalAccessToken

export type DeactivatePersonalAccessTokenSuccess = AccessTokenInfoWithPublicKey

export type DeactivatePersonalAccessTokenError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type DeactivatePersonalAccessTokenResponse =
  | DeactivatePersonalAccessTokenSuccess
  | DeactivatePersonalAccessTokenError

// Response for ListServiceAccounts

export type ListServiceAccountsSuccess = {
  items: UserAccessTokenInformation[]
}

export type ListServiceAccountsError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type ListServiceAccountsResponse =
  | ListServiceAccountsSuccess
  | ListServiceAccountsError

// Response for CreateServiceAccount

export type CreateServiceAccountSuccess = UserAccessTokenInformation

export type CreateServiceAccountError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type CreateServiceAccountResponse =
  | CreateServiceAccountSuccess
  | CreateServiceAccountError

// Response for GetServiceAccount

export type GetServiceAccountSuccess = UserAccessTokenInformation

export type GetServiceAccountError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type GetServiceAccountResponse =
  | GetServiceAccountSuccess
  | GetServiceAccountError

// Response for UpdateServiceAccount

export type UpdateServiceAccountSuccess = UserAccessTokenInformation

export type UpdateServiceAccountError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type UpdateServiceAccountResponse =
  | UpdateServiceAccountSuccess
  | UpdateServiceAccountError

// Response for ArchiveServiceAccount

export type ArchiveServiceAccountSuccess = UserAccessTokenInformation

export type ArchiveServiceAccountError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type ArchiveServiceAccountResponse =
  | ArchiveServiceAccountSuccess
  | ArchiveServiceAccountError

// Response for ActivateServiceAccount

export type ActivateServiceAccountSuccess = UserAccessTokenInformation

export type ActivateServiceAccountError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type ActivateServiceAccountResponse =
  | ActivateServiceAccountSuccess
  | ActivateServiceAccountError

// Response for DeactivateServiceAccount

export type DeactivateServiceAccountSuccess = UserAccessTokenInformation

export type DeactivateServiceAccountError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type DeactivateServiceAccountResponse =
  | DeactivateServiceAccountSuccess
  | DeactivateServiceAccountError

// Response for ListServiceAccountTokens

export type ListServiceAccountTokensSuccess = {
  items: AccessTokenInfoWithPublicKey[]
}

export type ListServiceAccountTokensError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type ListServiceAccountTokensResponse =
  | ListServiceAccountTokensSuccess
  | ListServiceAccountTokensError

// Response for CreateServiceAccountToken

export type CreateServiceAccountTokenSuccess = AccessTokenInfoWithPublicKey

export type CreateServiceAccountTokenError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type CreateServiceAccountTokenResponse =
  | CreateServiceAccountTokenSuccess
  | CreateServiceAccountTokenError

// Response for GetServiceAccountToken

export type GetServiceAccountTokenSuccess = AccessTokenInfoWithPublicKey

export type GetServiceAccountTokenError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type GetServiceAccountTokenResponse =
  | GetServiceAccountTokenSuccess
  | GetServiceAccountTokenError

// Response for UpdateServiceAccountToken

export type UpdateServiceAccountTokenSuccess = AccessTokenInfoWithPublicKey

export type UpdateServiceAccountTokenError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type UpdateServiceAccountTokenResponse =
  | UpdateServiceAccountTokenSuccess
  | UpdateServiceAccountTokenError

// Response for ArchiveServiceAccountToken

export type ArchiveServiceAccountTokenSuccess = AccessTokenInfoWithPublicKey

export type ArchiveServiceAccountTokenError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type ArchiveServiceAccountTokenResponse =
  | ArchiveServiceAccountTokenSuccess
  | ArchiveServiceAccountTokenError

// Response for ActivateServiceAccountToken

export type ActivateServiceAccountTokenSuccess = AccessTokenInfoWithPublicKey

export type ActivateServiceAccountTokenError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type ActivateServiceAccountTokenResponse =
  | ActivateServiceAccountTokenSuccess
  | ActivateServiceAccountTokenError

// Response for DeactivateServiceAccountToken

export type DeactivateServiceAccountTokenSuccess = AccessTokenInfoWithPublicKey

export type DeactivateServiceAccountTokenError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type DeactivateServiceAccountTokenResponse =
  | DeactivateServiceAccountTokenSuccess
  | DeactivateServiceAccountTokenError

// Response for ListUsers

export type ListUsersSuccess = {
  items: UserInfo[]
}

export type ListUsersError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type ListUsersResponse = ListUsersSuccess | ListUsersError

// Response for CreateUser

export type CreateUserSuccess = UserInfo

export type CreateUserError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type CreateUserResponse = CreateUserSuccess | CreateUserError

// Response for GetUser

export type GetUserSuccess = UserInfo

export type GetUserError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type GetUserResponse = GetUserSuccess | GetUserError

// Response for UpdateUser

export type UpdateUserSuccess = UserInfo

export type UpdateUserError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type UpdateUserResponse = UpdateUserSuccess | UpdateUserError

// Response for ArchiveUser

export type ArchiveUserSuccess = UserInfo

export type ArchiveUserError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type ArchiveUserResponse = ArchiveUserSuccess | ArchiveUserError

// Response for ActivateUser

export type ActivateUserSuccess = UserInfo

export type ActivateUserError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type ActivateUserResponse = ActivateUserSuccess | ActivateUserError

// Response for DeactivateUser

export type DeactivateUserSuccess = UserInfo

export type DeactivateUserError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type DeactivateUserResponse = DeactivateUserSuccess | DeactivateUserError

// Response for ListApplications

export type ListApplicationsSuccess = {
  items: AppInfoWithPublicKey[]
}

export type ListApplicationsError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type ListApplicationsResponse =
  | ListApplicationsSuccess
  | ListApplicationsError

// Response for CreateApplication

export type CreateApplicationSuccess = AppInfoWithPublicKey

export type CreateApplicationError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type CreateApplicationResponse =
  | CreateApplicationSuccess
  | CreateApplicationError

// Response for GetApplication

export type GetApplicationSuccess = AppInfoWithPublicKey

export type GetApplicationError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type GetApplicationResponse = GetApplicationSuccess | GetApplicationError

// Response for UpdateApplication

export type UpdateApplicationSuccess = AppInfoWithPublicKey

export type UpdateApplicationError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type UpdateApplicationResponse =
  | UpdateApplicationSuccess
  | UpdateApplicationError

// Response for ArchiveApplication

export type ArchiveApplicationSuccess = AppInfoWithPublicKey

export type ArchiveApplicationError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type ArchiveApplicationResponse =
  | ArchiveApplicationSuccess
  | ArchiveApplicationError

// Response for ActivateApplication

export type ActivateApplicationSuccess = AppInfoWithPublicKey

export type ActivateApplicationError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type ActivateApplicationResponse =
  | ActivateApplicationSuccess
  | ActivateApplicationError

// Response for DeactivateApplication

export type DeactivateApplicationSuccess = AppInfoWithPublicKey

export type DeactivateApplicationError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type DeactivateApplicationResponse =
  | DeactivateApplicationSuccess
  | DeactivateApplicationError

// Response for ListApplicationTokens

export type ListApplicationTokensSuccess = {
  items: AccessTokenInfoWithPublicKey[]
}

export type ListApplicationTokensError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type ListApplicationTokensResponse =
  | ListApplicationTokensSuccess
  | ListApplicationTokensError

// Response for CreateApplicationToken

export type CreateApplicationTokenSuccess = AccessTokenInfoWithPublicKey

export type CreateApplicationTokenError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type CreateApplicationTokenResponse =
  | CreateApplicationTokenSuccess
  | CreateApplicationTokenError

// Response for GetApplicationToken

export type GetApplicationTokenSuccess = AccessTokenInfoWithPublicKey

export type GetApplicationTokenError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type GetApplicationTokenResponse =
  | GetApplicationTokenSuccess
  | GetApplicationTokenError

// Response for UpdateApplicationToken

export type UpdateApplicationTokenSuccess = AccessTokenInfoWithPublicKey

export type UpdateApplicationTokenError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type UpdateApplicationTokenResponse =
  | UpdateApplicationTokenSuccess
  | UpdateApplicationTokenError

// Response for ArchiveApplicationToken

export type ArchiveApplicationTokenSuccess = AccessTokenInfoWithPublicKey

export type ArchiveApplicationTokenError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type ArchiveApplicationTokenResponse =
  | ArchiveApplicationTokenSuccess
  | ArchiveApplicationTokenError

// Response for ActivateApplicationToken

export type ActivateApplicationTokenSuccess = AccessTokenInfoWithPublicKey

export type ActivateApplicationTokenError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type ActivateApplicationTokenResponse =
  | ActivateApplicationTokenSuccess
  | ActivateApplicationTokenError

// Response for DeactivateApplicationToken

export type DeactivateApplicationTokenSuccess = AccessTokenInfoWithPublicKey

export type DeactivateApplicationTokenError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type DeactivateApplicationTokenResponse =
  | DeactivateApplicationTokenSuccess
  | DeactivateApplicationTokenError

// Response for CreateUserRecoveryChallenge

export type CreateUserRecoveryChallengeSuccess = UserRecoveryChallenge

export type CreateUserRecoveryChallengeError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type CreateUserRecoveryChallengeResponse =
  | CreateUserRecoveryChallengeSuccess
  | CreateUserRecoveryChallengeError

// Response for CreateUserRecoveryCode

export type CreateUserRecoveryCodeSuccess = GenericSuccessMessage

export type CreateUserRecoveryCodeError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type CreateUserRecoveryCodeResponse =
  | CreateUserRecoveryCodeSuccess
  | CreateUserRecoveryCodeError

// Response for CreateUserRecovery

export type CreateUserRecoverySuccess = UserRegistration

export type CreateUserRecoveryError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type CreateUserRecoveryResponse =
  | CreateUserRecoverySuccess
  | CreateUserRecoveryError

// Response for RestartDelegatedUserRegistration

export type RestartDelegatedUserRegistrationSuccess = UserRegistrationChallenge

export type RestartDelegatedUserRegistrationError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type RestartDelegatedUserRegistrationResponse =
  | RestartDelegatedUserRegistrationSuccess
  | RestartDelegatedUserRegistrationError

// Response for CreateDelegatedUserRecovery

export type CreateDelegatedUserRecoverySuccess = UserRecoveryChallenge

export type CreateDelegatedUserRecoveryError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type CreateDelegatedUserRecoveryResponse =
  | CreateDelegatedUserRecoverySuccess
  | CreateDelegatedUserRecoveryError
