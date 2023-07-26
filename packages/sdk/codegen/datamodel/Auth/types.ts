import {
  Email,
  EntityId,
  IntegerPositiveStrict,
  IsoDatetime,
  Username,
} from '../Foundations'

// FIXME: Missing documentation for Application
export type Application = {
  // FIXME: Missing documentation for appId
  appId: EntityId

  // FIXME: Missing documentation for apiToken
  apiToken?: Jwt
}

// FIXME: Missing documentation for GenericSuccessMessage
export type GenericSuccessMessage = {
  // FIXME: Missing documentation for message
  message: string
}

// FIXME: Missing documentation for UserRegistration
export type UserRegistration = {
  // FIXME: Missing documentation for credential
  credential: UserCredentialInformation

  // FIXME: Missing documentation for user
  user: UserRegistrationInformation
}

// FIXME: Missing documentation for UserRegistrationChallenge
export type UserRegistrationChallenge = {
  // FIXME: Missing documentation for temporaryAuthenticationToken
  temporaryAuthenticationToken: Jwt

  // FIXME: Missing documentation for rp
  rp: RelyingParty

  // FIXME: Missing documentation for user
  user: AuthenticationUserInformation

  // FIXME: Missing documentation for supportedCredentialKinds
  supportedCredentialKinds: SupportedCredentialKinds

  // FIXME: Missing documentation for otpUrl
  otpUrl: string

  // FIXME: Missing documentation for challenge
  challenge: string

  // FIXME: Missing documentation for authenticatorSelection
  authenticatorSelection: AuthenticatorSelection

  // FIXME: Missing documentation for attestation
  attestation: AuthenticatorAttestationOptions

  // FIXME: Missing documentation for pubKeyCredParams
  pubKeyCredParams: PubKeyCredParams[]

  // FIXME: Missing documentation for excludeCredentials
  excludeCredentials: AllowCredential[]
}

// FIXME: Missing documentation for UserLoginChallenge
export type UserLoginChallenge = {
  // FIXME: Missing documentation for supportedCredentialKinds
  supportedCredentialKinds: SupportedCredentials[]

  // FIXME: Missing documentation for challenge
  challenge: string

  // FIXME: Missing documentation for challengeIdentifier
  challengeIdentifier: Jwt

  // FIXME: Missing documentation for externalAuthenticationUrl
  externalAuthenticationUrl: string

  // FIXME: Missing documentation for allowCredentials
  allowCredentials: AllowCredentials
}

// FIXME: Missing documentation for UserLogin
export type UserLogin = {
  // FIXME: Missing documentation for token
  token: Jwt
}

// FIXME: Missing documentation for UserActionSignature
export type UserActionSignature = {
  // FIXME: Missing documentation for userAction
  userAction: string
}

// FIXME: Missing documentation for AccessTokenInfoWithPublicKey
export type AccessTokenInfoWithPublicKey = {
  // FIXME: Missing documentation for accessToken
  accessToken?: Jwt

  // FIXME: Missing documentation for dateCreated
  dateCreated: IsoDatetime

  // FIXME: Missing documentation for credId
  credId: string

  // FIXME: Missing documentation for isActive
  isActive: boolean

  // FIXME: Missing documentation for kind
  kind: AccessTokenKind

  // FIXME: Missing documentation for linkedUserId
  linkedUserId: EntityId

  // FIXME: Missing documentation for linkedAppId
  linkedAppId: string

  // FIXME: Missing documentation for name
  name: string

  // FIXME: Missing documentation for orgId
  orgId: EntityId

  // FIXME: Missing documentation for permissionAssignments
  permissionAssignments: PermissionAssignmentInfo[]

  // FIXME: Missing documentation for publicKey
  publicKey: string

  // FIXME: Missing documentation for tokenId
  tokenId: EntityId
}

// FIXME: Missing documentation for UserInfo
export type UserInfo = {
  // FIXME: Missing documentation for username
  username: string

  // FIXME: Missing documentation for userId
  userId: EntityId

  // FIXME: Missing documentation for kind
  kind: UserAuthKind

  // FIXME: Missing documentation for credentialUuid
  credentialUuid: EntityId

  // FIXME: Missing documentation for orgId
  orgId: EntityId

  // FIXME: Missing documentation for permissions
  permissions?: string[]

  // FIXME: Missing documentation for scopes
  scopes?: string[]

  // FIXME: Missing documentation for isActive
  isActive: boolean

  // FIXME: Missing documentation for isServiceAccount
  isServiceAccount: boolean

  // FIXME: Missing documentation for isRegistered
  isRegistered: boolean

  // FIXME: Missing documentation for permissionAssignments
  permissionAssignments: PermissionAssignmentInfo[]
}

// FIXME: Missing documentation for UserAccessTokenInformation
export type UserAccessTokenInformation = {
  // FIXME: Missing documentation for userInfo
  userInfo: UserInfo

  // FIXME: Missing documentation for accessTokens
  accessTokens: AccessTokenInfoWithPublicKey[]
}

// FIXME: Missing documentation for AppInfoWithPublicKey
export type AppInfoWithPublicKey = {
  // FIXME: Missing documentation for appId
  appId: EntityId

  // FIXME: Missing documentation for kind
  kind: ApplicationKind

  // FIXME: Missing documentation for orgId
  orgId: EntityId

  // FIXME: Missing documentation for expectedRpId
  expectedRpId: string

  // FIXME: Missing documentation for name
  name: string

  // FIXME: Missing documentation for isActive
  isActive: boolean

  // FIXME: Missing documentation for expectedOrigin
  expectedOrigin: string

  // FIXME: Missing documentation for permissionAssignments
  permissionAssignments: PermissionAssignmentInfo[]

  // FIXME: Missing documentation for accessTokens
  accessTokens: AccessTokenInfoWithPublicKey[]
}

// FIXME: Missing documentation for CredentialInfo
export type CredentialInfo = {
  // FIXME: Missing documentation for credentialId
  credentialId: string

  // FIXME: Missing documentation for credentialUuid
  credentialUuid: EntityId

  // FIXME: Missing documentation for dateCreated
  dateCreated: IsoDatetime

  // FIXME: Missing documentation for isActive
  isActive: boolean

  // FIXME: Missing documentation for kind
  kind: CredentialKind

  // FIXME: Missing documentation for name
  name: string

  // FIXME: Missing documentation for publicKey
  publicKey?: string

  // FIXME: Missing documentation for relyingPartyId
  relyingPartyId: string

  // FIXME: Missing documentation for origin
  origin: string
}

// FIXME: Missing documentation for AvailableOrg
export type AvailableOrg = {
  /**
   * The ID of the organization.
   */
  orgId: EntityId

  /**
   * The ID of an application that can be used to log into the given org.
   */
  appId: EntityId
}

// FIXME: Missing documentation for UserRecoveryChallenge
export type UserRecoveryChallenge = {
  // FIXME: Missing documentation for temporaryAuthenticationToken
  temporaryAuthenticationToken: Jwt

  // FIXME: Missing documentation for rp
  rp: RelyingParty

  // FIXME: Missing documentation for user
  user: AuthenticationUserInformation

  // FIXME: Missing documentation for supportedCredentialKinds
  supportedCredentialKinds: SupportedCredentialKinds

  // FIXME: Missing documentation for otpUrl
  otpUrl: string

  // FIXME: Missing documentation for challenge
  challenge: string

  // FIXME: Missing documentation for authenticatorSelection
  authenticatorSelection: AuthenticatorSelection

  // FIXME: Missing documentation for attestation
  attestation: AuthenticatorAttestationOptions

  // FIXME: Missing documentation for pubKeyCredParams
  pubKeyCredParams: PubKeyCredParams[]

  // FIXME: Missing documentation for excludeCredentials
  excludeCredentials: AllowCredential[]

  // FIXME: Missing documentation for allowedRecoveryCredentials
  allowedRecoveryCredentials: AllowRecoveryCredential[]
}

// FIXME: Missing documentation for UserRegistrationBase
export type UserRegistrationBase = {
  // FIXME: Missing documentation for temporaryAuthenticationToken
  temporaryAuthenticationToken: Jwt

  // FIXME: Missing documentation for rp
  rp: RelyingParty

  // FIXME: Missing documentation for user
  user: AuthenticationUserInformation
}

// FIXME: Missing documentation for Fido2Options
export type Fido2Options = {
  // FIXME: Missing documentation for temporaryAuthenticationToken
  temporaryAuthenticationToken: Jwt

  // FIXME: Missing documentation for rp
  rp: RelyingParty

  // FIXME: Missing documentation for user
  user: AuthenticationUserInformation

  // FIXME: Missing documentation for kind
  kind: CredentialKind.Fido2

  // FIXME: Missing documentation for challenge
  challenge: string

  // FIXME: Missing documentation for excludeCredentials
  excludeCredentials: ExcludeCredentials[]

  // FIXME: Missing documentation for authenticatorSelection
  authenticatorSelection: AuthenticatorSelection

  /**
   * Tells the authenticator that it needs to identify itself to the server, so that the server can verify the device is secure.
   *
   * none: Tells the authenticator that it does not need to provide an attestation document.
   *
   * indirect: Tells the authenticator, that it needs to provide attestation information, but it doesn't need to provide any identifying information about the device.
   *
   * direct: Tells the authenticator, that it needs to provide attestation information, including information to identify the device.
   *
   * enterprise: Tells the authenticator, that it should use enterprise certificates configured on the device for the credentials. For example, smart cards can be supported on Fido2 devices if an enterprise certificate is registered on the device.
   */
  attestation: AuthenticatorAttestationOptions

  // FIXME: Missing documentation for pubKeyCredParams
  pubKeyCredParams: PubKeyCredParams[]
}

// FIXME: Missing documentation for PublicKeyOptions
export type PublicKeyOptions = {
  // FIXME: Missing documentation for temporaryAuthenticationToken
  temporaryAuthenticationToken: Jwt

  // FIXME: Missing documentation for rp
  rp: RelyingParty

  // FIXME: Missing documentation for user
  user: AuthenticationUserInformation

  // FIXME: Missing documentation for kind
  kind: CredentialKind.Key

  // FIXME: Missing documentation for challenge
  challenge: string

  // FIXME: Missing documentation for pubKeyCredParams
  pubKeyCredParams: PubKeyCredParams[]

  // FIXME: Missing documentation for attestation
  attestation: AuthenticatorAttestationOptions
}

// FIXME: Missing documentation for AllowCredential
export type AllowCredential = {
  /**
   * Must be 'public-key'
   */
  type: string

  // FIXME: Missing documentation for id
  id: string

  // FIXME: Missing documentation for transports
  transports?: string
}

// FIXME: Missing documentation for RelyingParty
export type RelyingParty = {
  // FIXME: Missing documentation for id
  id: string

  // FIXME: Missing documentation for name
  name: string
}

// FIXME: Missing documentation for AuthenticationUserInformation
export type AuthenticationUserInformation = {
  // FIXME: Missing documentation for id
  id: EntityId

  // FIXME: Missing documentation for displayName
  displayName: string

  // FIXME: Missing documentation for name
  name: string
}

// FIXME: Missing documentation for PubKeyCredParams
export type PubKeyCredParams = {
  /**
   * Must be 'public-key'
   */
  type: string

  // FIXME: Missing documentation for alg
  alg: number
}

// FIXME: Missing documentation for AuthenticatorSelection
export type AuthenticatorSelection = {
  /**
   * If not given, any authenticator type can be used.
   *
   * platform: Authenticator must be built into the system. For example, Windows Hello or Apple Touch ID use a TPM that are integrated into the system.
   *
   * cross-platform: Authenticator must be able to move between systems. For example, a yubikey is a USB device that can be plugged into any system.
   */
  authenticatorAttachment?: string

  /**
   * discouraged: This tells the authenticator to not use resident keys.
   *
   * preferred: This tells the authenticator that resident keys should be used if available.
   *
   * required: This tells the authenticator that a resident key is required.
   */
  residentKey: AuthenticatorRequirementOptions

  // FIXME: Missing documentation for requireResidentKey
  requireResidentKey: boolean

  /**
   * Required: Tells the authenticator that the user needs to verify they are in possession of the authenticator device. This usually means the user is prompted for a pin, passcode, or to complete a biometric challenge.
   *
   * Preferred: Tells the authenticator that the user should be asked to verify they are in possession of the authenticator device. This usually means the user is prompted for a pin, passcode, or to complete a biometric challenge.
   * If the user has recently verified their possession the device may choose not to ask the user to verify again.
   *
   * Discouraged: Tells the authenticator that the user should not be prompted for possession. This is generally only used when WebAuthn is a second factor.
   */
  userVerification: AuthenticatorRequirementOptions
}

// FIXME: Missing documentation for ExcludeCredentials
export type ExcludeCredentials = {
  /**
   * Must be 'public-key'
   */
  type: string

  // FIXME: Missing documentation for id
  id: string

  // FIXME: Missing documentation for transports
  transports: FidoCredentialsTransportKind
}

// FIXME: Missing documentation for UserCredentialInformation
export type UserCredentialInformation = {
  // FIXME: Missing documentation for uuid
  uuid: EntityId

  // FIXME: Missing documentation for kind
  kind: CredentialKind

  // FIXME: Missing documentation for name
  name: string
}

// FIXME: Missing documentation for UserRegistrationInformation
export type UserRegistrationInformation = {
  // FIXME: Missing documentation for id
  id: EntityId

  // FIXME: Missing documentation for username
  username: string

  // FIXME: Missing documentation for orgId
  orgId: EntityId
}

// FIXME: Missing documentation for AuthenticateUserPasswordInput
export type AuthenticateUserPasswordInput = {
  // FIXME: Missing documentation for kind
  kind: CredentialKind.Password

  // FIXME: Missing documentation for password
  password: string
}

// FIXME: Missing documentation for AuthenticateUserFido2Input
export type AuthenticateUserFido2Input = {
  // FIXME: Missing documentation for kind
  kind: CredentialKind.Fido2

  // FIXME: Missing documentation for credentialAssertion
  credentialAssertion: Fido2CredentialAssertion
}

// FIXME: Missing documentation for Fido2CredentialAssertion
export type Fido2CredentialAssertion = {
  // FIXME: Missing documentation for credId
  credId: string

  // FIXME: Missing documentation for clientData
  clientData: string

  // FIXME: Missing documentation for authenticatorData
  authenticatorData: string

  // FIXME: Missing documentation for signature
  signature: string

  // FIXME: Missing documentation for userHandle
  userHandle: string
}

// FIXME: Missing documentation for KeyCredentialAssertion
export type KeyCredentialAssertion = {
  // FIXME: Missing documentation for credId
  credId: string

  // FIXME: Missing documentation for clientData
  clientData: string

  // FIXME: Missing documentation for signature
  signature: string

  // FIXME: Missing documentation for algorithm
  algorithm?: string
}

// FIXME: Missing documentation for AuthenticateUserKeyInput
export type AuthenticateUserKeyInput = {
  // FIXME: Missing documentation for kind
  kind: CredentialKind.Key

  // FIXME: Missing documentation for credentialAssertion
  credentialAssertion: KeyCredentialAssertion
}

// FIXME: Missing documentation for SupportedCredentialKinds
export type SupportedCredentialKinds = {
  // FIXME: Missing documentation for firstFactor
  firstFactor: CredentialKind[]

  // FIXME: Missing documentation for secondFactor
  secondFactor: CredentialKind[]
}

// FIXME: Missing documentation for RegistrationConfirmationFido2
export type RegistrationConfirmationFido2 = {
  // FIXME: Missing documentation for credentialKind
  credentialKind: CredentialKind.Fido2

  // FIXME: Missing documentation for credentialInfo
  credentialInfo: CredentialAssertion
}

// FIXME: Missing documentation for RegistrationConfirmationKey
export type RegistrationConfirmationKey = {
  // FIXME: Missing documentation for credentialKind
  credentialKind: CredentialKind.Key

  // FIXME: Missing documentation for credentialInfo
  credentialInfo: CredentialAssertion
}

// FIXME: Missing documentation for RegistrationConfirmationRecoveryKey
export type RegistrationConfirmationRecoveryKey = {
  // FIXME: Missing documentation for encryptedPrivateKey
  encryptedPrivateKey?: string

  // FIXME: Missing documentation for credentialInfo
  credentialInfo: CredentialAssertion

  // FIXME: Missing documentation for credentialKind
  credentialKind: CredentialKind.RecoveryKey
}

// FIXME: Missing documentation for CredentialAssertion
export type CredentialAssertion = {
  // FIXME: Missing documentation for credId
  credId: string

  // FIXME: Missing documentation for clientData
  clientData: string

  // FIXME: Missing documentation for attestationData
  attestationData: string
}

// FIXME: Missing documentation for RegistrationConfirmationPassword
export type RegistrationConfirmationPassword = {
  // FIXME: Missing documentation for credentialKind
  credentialKind: CredentialKind.Password

  // FIXME: Missing documentation for credentialInfo
  credentialInfo: PasswordCredentialInformation
}

// FIXME: Missing documentation for PasswordCredentialInformation
export type PasswordCredentialInformation = {
  // FIXME: Missing documentation for password
  password: string
}

// FIXME: Missing documentation for RegistrationConfirmationTotp
export type RegistrationConfirmationTotp = {
  // FIXME: Missing documentation for credentialKind
  credentialKind: CredentialKind.Totp

  // FIXME: Missing documentation for credentialInfo
  credentialInfo: TotpCredentialInformation
}

// FIXME: Missing documentation for TotpCredentialInformation
export type TotpCredentialInformation = {
  // FIXME: Missing documentation for otpCode
  otpCode: string
}

// FIXME: Missing documentation for AllowCredentials
export type AllowCredentials = {
  // FIXME: Missing documentation for webauthn
  webauthn: AllowCredential[]

  // FIXME: Missing documentation for key
  key: AllowCredential[]
}

// FIXME: Missing documentation for SupportedCredentials
export type SupportedCredentials = {
  // FIXME: Missing documentation for kind
  kind: CredentialKind

  // FIXME: Missing documentation for factor
  factor: CredentialFactor

  // FIXME: Missing documentation for requiresSecondFactor
  requiresSecondFactor: boolean
}

// FIXME: Missing documentation for AuthenticateUserTotpInput
export type AuthenticateUserTotpInput = {
  // FIXME: Missing documentation for kind
  kind: CredentialKind.Totp

  // FIXME: Missing documentation for otpCode
  otpCode: string
}

// FIXME: Missing documentation for TotpCredential
export type TotpCredential = {
  // FIXME: Missing documentation for temporaryAuthenticationToken
  temporaryAuthenticationToken: Jwt

  // FIXME: Missing documentation for rp
  rp: RelyingParty

  // FIXME: Missing documentation for user
  user: AuthenticationUserInformation

  // FIXME: Missing documentation for kind
  kind: CredentialKind.Totp

  // FIXME: Missing documentation for otpUrl
  otpUrl: string
}

// FIXME: Missing documentation for PasswordCredential
export type PasswordCredential = {
  // FIXME: Missing documentation for temporaryAuthenticationToken
  temporaryAuthenticationToken: Jwt

  // FIXME: Missing documentation for rp
  rp: RelyingParty

  // FIXME: Missing documentation for user
  user: AuthenticationUserInformation

  // FIXME: Missing documentation for kind
  kind: CredentialKind.Password
}

// FIXME: Missing documentation for CreateUserCredentialInputBase
export type CreateUserCredentialInputBase = {
  // FIXME: Missing documentation for challengeIdentifier
  challengeIdentifier: Jwt

  // FIXME: Missing documentation for credentialName
  credentialName: string
}

// FIXME: Missing documentation for CreateUserCredentialTotpInput
export type CreateUserCredentialTotpInput = {
  // FIXME: Missing documentation for challengeIdentifier
  challengeIdentifier: Jwt

  // FIXME: Missing documentation for credentialName
  credentialName: string

  // FIXME: Missing documentation for credentialKind
  credentialKind: CredentialKind.Totp

  // FIXME: Missing documentation for credentialInfo
  credentialInfo: TotpCredentialInformation
}

// FIXME: Missing documentation for CreateUserCredentialPasswordInput
export type CreateUserCredentialPasswordInput = {
  // FIXME: Missing documentation for credentialKind
  credentialKind: CredentialKind.Password

  // FIXME: Missing documentation for credentialInfo
  credentialInfo: PasswordCredentialInformation

  // FIXME: Missing documentation for challengeIdentifier
  challengeIdentifier: Jwt

  // FIXME: Missing documentation for credentialName
  credentialName: string
}

// FIXME: Missing documentation for CreateUserCredentialPublicKeyInput
export type CreateUserCredentialPublicKeyInput = {
  // FIXME: Missing documentation for challengeIdentifier
  challengeIdentifier: Jwt

  // FIXME: Missing documentation for credentialName
  credentialName: string

  // FIXME: Missing documentation for credentialKind
  credentialKind: CredentialKind.Key

  // FIXME: Missing documentation for credentialInfo
  credentialInfo: CredentialAssertion
}

// FIXME: Missing documentation for CreateUserCredentialFido2Input
export type CreateUserCredentialFido2Input = {
  // FIXME: Missing documentation for credentialKind
  credentialKind: CredentialKind.Fido2

  // FIXME: Missing documentation for credentialInfo
  credentialInfo: CredentialAssertion

  // FIXME: Missing documentation for challengeIdentifier
  challengeIdentifier: Jwt

  // FIXME: Missing documentation for credentialName
  credentialName: string
}

// FIXME: Missing documentation for HttpRequestInformation
export type HttpRequestInformation = {
  // FIXME: Missing documentation for method
  method: string

  // FIXME: Missing documentation for scheme
  scheme: string

  // FIXME: Missing documentation for authority
  authority: string

  // FIXME: Missing documentation for path
  path: string
}

// FIXME: Missing documentation for LegacyAuthAttestation
export type LegacyAuthAttestation = {
  // FIXME: Missing documentation for token
  token: Jwt

  // FIXME: Missing documentation for decodedToken
  decodedToken: DecodedJwt

  // FIXME: Missing documentation for authIdentity
  authIdentity: AuthIdentity
}

// FIXME: Missing documentation for OrgEmployeeIdentity
export type OrgEmployeeIdentity = {
  // FIXME: Missing documentation for kind
  kind: AuthIdentityKind.OrgEmployeeIdentity

  // FIXME: Missing documentation for orgId
  orgId: EntityId

  // FIXME: Missing documentation for employeeId
  employeeId: EntityId

  // FIXME: Missing documentation for username
  username: Username

  // FIXME: Missing documentation for scope
  scope: string

  // FIXME: Missing documentation for permissions
  permissions: string[]
}

// FIXME: Missing documentation for OrgApiKeyIdentity
export type OrgApiKeyIdentity = {
  // FIXME: Missing documentation for kind
  kind: AuthIdentityKind.OrgApiKeyIdentity

  // FIXME: Missing documentation for orgId
  orgId: EntityId

  // FIXME: Missing documentation for apiKeyId
  apiKeyId: EntityId

  // FIXME: Missing documentation for scope
  scope: string

  // FIXME: Missing documentation for permissions
  permissions: string[]
}

// FIXME: Missing documentation for DfnsStaffIdentity
export type DfnsStaffIdentity = {
  // FIXME: Missing documentation for kind
  kind: AuthIdentityKind.DfnsStaffIdentity

  // FIXME: Missing documentation for orgId
  orgId: EntityId

  // FIXME: Missing documentation for employeeId
  employeeId: EntityId

  // FIXME: Missing documentation for username
  username: Username

  // FIXME: Missing documentation for scope
  scope: string

  // FIXME: Missing documentation for permissions
  permissions: string[]
}

// FIXME: Missing documentation for DfnsServiceIdentity
export type DfnsServiceIdentity = {
  // FIXME: Missing documentation for kind
  kind: AuthIdentityKind.DfnsService

  // FIXME: Missing documentation for serviceName
  serviceName: string
}

// FIXME: Missing documentation for AuthV2SignedAuthAttestation
export type AuthV2SignedAuthAttestation = {
  // FIXME: Missing documentation for authBlock
  authBlock: AuthBlock
}

// FIXME: Missing documentation for JwtHeader
export type JwtHeader = {
  // FIXME: Missing documentation for alg
  alg?: string

  // FIXME: Missing documentation for b64
  b64?: boolean

  // FIXME: Missing documentation for kid
  kid?: string

  // FIXME: Missing documentation for typ
  typ?: string
}

// FIXME: Missing documentation for DecodedJwt
export type DecodedJwt = {
  // FIXME: Missing documentation for payload
  payload: JwtPayload

  // FIXME: Missing documentation for header
  header: JwtHeader
}

// FIXME: Missing documentation for AuthBlock
export type AuthBlock = {
  // FIXME: Missing documentation for request
  request: Jwt

  // FIXME: Missing documentation for auth
  auth: Jwt
}

// FIXME: Missing documentation for CreateUserCredentialRecoveryKeyInput
export type CreateUserCredentialRecoveryKeyInput = {
  // FIXME: Missing documentation for encryptedPrivateKey
  encryptedPrivateKey?: string

  // FIXME: Missing documentation for credentialInfo
  credentialInfo: CredentialAssertion

  // FIXME: Missing documentation for credentialKind
  credentialKind: CredentialKind.RecoveryKey

  // FIXME: Missing documentation for challengeIdentifier
  challengeIdentifier: Jwt

  // FIXME: Missing documentation for credentialName
  credentialName: string
}

// FIXME: Missing documentation for PermissionAssignmentInfo
export type PermissionAssignmentInfo = {
  // FIXME: Missing documentation for permissionName
  permissionName: string

  // FIXME: Missing documentation for permissionId
  permissionId: EntityId

  // FIXME: Missing documentation for assignmentId
  assignmentId: EntityId

  // FIXME: Missing documentation for operations
  operations?: string[]
}

// FIXME: Missing documentation for AllowRecoveryCredential
export type AllowRecoveryCredential = {
  // FIXME: Missing documentation for id
  id: string

  // FIXME: Missing documentation for encryptedRecoveryKey
  encryptedRecoveryKey: string
}

// FIXME: Missing documentation for RecoverUserInput
export type RecoverUserInput = {
  // FIXME: Missing documentation for kind
  kind: CredentialKind.RecoveryKey

  // FIXME: Missing documentation for credentialAssertion
  credentialAssertion: KeyCredentialAssertion
}

// FIXME: Missing documentation for UserRecoveryCredentials
export type UserRecoveryCredentials = {
  // FIXME: Missing documentation for firstFactorCredential
  firstFactorCredential: RegistrationFirstFactor

  // FIXME: Missing documentation for secondFactorCredential
  secondFactorCredential?: RegistrationSecondFactor

  // FIXME: Missing documentation for recoveryCredential
  recoveryCredential?: RegistrationConfirmationRecoveryKey
}

// FIXME: Missing documentation for Jwt
export type Jwt = string

// FIXME: Missing documentation for JwtPayload
export type JwtPayload = Record<string, unknown>

// FIXME: Missing documentation for CreateUserActionSignatureChallengeInput
export type CreateUserActionSignatureChallengeInput = {
  /**
   * Human readable explanation of the activity, so that person can understand what is being signed.
   */
  userActionPayload: string

  // FIXME: Missing documentation for userActionHttpMethod
  userActionHttpMethod: string

  // FIXME: Missing documentation for userActionHttpPath
  userActionHttpPath: string

  // FIXME: Missing documentation for userActionServerKind
  userActionServerKind?: ServerKind
}

// FIXME: Missing documentation for CreateDelegatedUserLoginInput
export type CreateDelegatedUserLoginInput = {
  // FIXME: Missing documentation for username
  username: string
}

// FIXME: Missing documentation for CreateUserInput
export type CreateUserInput = {
  // FIXME: Missing documentation for email
  email: string

  // FIXME: Missing documentation for kind
  kind: UserAuthKind

  // FIXME: Missing documentation for publicKey
  publicKey?: string

  // FIXME: Missing documentation for externalId
  externalId?: string
}

// FIXME: Missing documentation for CreateUserRegistrationChallengeInput
export type CreateUserRegistrationChallengeInput = {
  // FIXME: Missing documentation for username
  username: string

  // FIXME: Missing documentation for registrationCode
  registrationCode: string

  // FIXME: Missing documentation for orgId
  orgId: EntityId
}

// FIXME: Missing documentation for CreateUserRegistrationInput
export type CreateUserRegistrationInput = {
  // FIXME: Missing documentation for firstFactorCredential
  firstFactorCredential: RegistrationFirstFactor

  // FIXME: Missing documentation for secondFactorCredential
  secondFactorCredential?: RegistrationSecondFactor

  // FIXME: Missing documentation for recoveryCredential
  recoveryCredential?: RegistrationConfirmationRecoveryKey
}

// FIXME: Missing documentation for CreateUserLoginChallengeInput
export type CreateUserLoginChallengeInput = {
  // FIXME: Missing documentation for username
  username: string

  // FIXME: Missing documentation for orgId
  orgId: EntityId
}

// FIXME: Missing documentation for CreateUserLoginInput
export type CreateUserLoginInput = {
  // FIXME: Missing documentation for challengeIdentifier
  challengeIdentifier: Jwt

  // FIXME: Missing documentation for firstFactor
  firstFactor: AuthenticateUserFirstFactor

  // FIXME: Missing documentation for secondFactor
  secondFactor?: AuthenticateUserSecondFactor
}

// FIXME: Missing documentation for CreateUserCredentialChallengeInput
export type CreateUserCredentialChallengeInput = {
  // FIXME: Missing documentation for kind
  kind: CredentialKind
}

// FIXME: Missing documentation for ActivateCredentialInput
export type ActivateCredentialInput = {
  // FIXME: Missing documentation for credentialUuid
  credentialUuid: EntityId
}

// FIXME: Missing documentation for CreateSignedAuthAttestationInput
export type CreateSignedAuthAttestationInput = {
  // FIXME: Missing documentation for body
  body?: string

  // FIXME: Missing documentation for headers
  headers: Record<string, string>

  // FIXME: Missing documentation for isBase64Encoded
  isBase64Encoded: boolean

  // FIXME: Missing documentation for http
  http: HttpRequestInformation
}

// FIXME: Missing documentation for CreateCodeLoginChallengeInput
export type CreateCodeLoginChallengeInput = {
  // FIXME: Missing documentation for code
  code: string
}

// FIXME: Missing documentation for CreateUserLoginFromCodeInput
export type CreateUserLoginFromCodeInput = {
  // FIXME: Missing documentation for challengeIdentifier
  challengeIdentifier: Jwt
}

// FIXME: Missing documentation for CreateOrgOwnerInput
export type CreateOrgOwnerInput = {
  // FIXME: Missing documentation for email
  email: Email

  // FIXME: Missing documentation for publicKey
  publicKey?: string

  // FIXME: Missing documentation for orgId
  orgId: EntityId

  // FIXME: Missing documentation for authBlock
  authBlock: AuthBlock
}

// FIXME: Missing documentation for CreateAvailableOrgListInput
export type CreateAvailableOrgListInput = {
  /**
   * The username of the user that is logging into the system.
   */
  username: Username

  /**
   * If specified, the API will return only the matching application for the given org ID. This would be used when the user has already given the org they want to log into, but the caller doesn't know the Auth V2 Application ID to use.
   */
  orgId?: EntityId

  /**
   * A list of permission names that the caller will be using in their application.
   *
   * If the list is not empty, the API will attempt to find an Auth V2 Application that has the majority of the permissions provided.
   *
   * If the list is empty or not provided, the API will select the Auth V2 Application with the largest set of permissions.
   */
  permissions?: string[]

  /**
   * The origin (scheme, hostname, and port) of the server where the request is originating. For example: https://dashboard.dfns.io
   *
   * The API will only return orgs that have a Auth V2 Application with a matching origin.
   */
  origin: string
}

// FIXME: Missing documentation for CreateAccessTokenInput
export type CreateAccessTokenInput = {
  // FIXME: Missing documentation for daysValid
  daysValid?: IntegerPositiveStrict

  // FIXME: Missing documentation for name
  name: string

  // FIXME: Missing documentation for permissionId
  permissionId?: EntityId

  // FIXME: Missing documentation for publicKey
  publicKey: string

  // FIXME: Missing documentation for externalId
  externalId?: string
}

// FIXME: Missing documentation for UpdateAccessTokenInput
export type UpdateAccessTokenInput = {
  // FIXME: Missing documentation for name
  name?: string

  // FIXME: Missing documentation for externalId
  externalId?: string
}

// FIXME: Missing documentation for UpdateUserInput
export type UpdateUserInput = {
  // FIXME: Missing documentation for externalId
  externalId?: string

  // FIXME: Missing documentation for publicKey
  publicKey?: string
}

// FIXME: Missing documentation for UpdateApplicationInput
export type UpdateApplicationInput = {
  // FIXME: Missing documentation for externalId
  externalId?: string

  // FIXME: Missing documentation for name
  name?: string
}

// FIXME: Missing documentation for CreateApplicationInput
export type CreateApplicationInput = {
  // FIXME: Missing documentation for name
  name: string

  // FIXME: Missing documentation for relyingPartyId
  relyingPartyId: string

  // FIXME: Missing documentation for origin
  origin: string

  // FIXME: Missing documentation for permissionId
  permissionId?: EntityId

  // FIXME: Missing documentation for kind
  kind: ApplicationKind

  // FIXME: Missing documentation for daysValid
  daysValid?: IntegerPositiveStrict

  // FIXME: Missing documentation for publicKey
  publicKey?: string

  // FIXME: Missing documentation for externalId
  externalId?: string
}

// FIXME: Missing documentation for CreateUserRecoveryInput
export type CreateUserRecoveryInput = {
  // FIXME: Missing documentation for recovery
  recovery: RecoverUserInput

  // FIXME: Missing documentation for newCredentials
  newCredentials: UserRecoveryCredentials
}

// FIXME: Missing documentation for CreateUserRecoveryChallengeInput
export type CreateUserRecoveryChallengeInput = {
  // FIXME: Missing documentation for username
  username: string

  // FIXME: Missing documentation for verificationCode
  verificationCode: string

  // FIXME: Missing documentation for orgId
  orgId: EntityId

  // FIXME: Missing documentation for credentialId
  credentialId: string
}

// FIXME: Missing documentation for CreateUserCredentialInput
export type CreateUserCredentialInput =
  | CreateUserCredentialTotpInput
  | CreateUserCredentialPasswordInput
  | CreateUserCredentialPublicKeyInput
  | CreateUserCredentialFido2Input
  | CreateUserCredentialRecoveryKeyInput

// FIXME: Missing documentation for UserCredentialChallenge
export type UserCredentialChallenge =
  | Fido2Options
  | PublicKeyOptions
  | TotpCredential
  | PasswordCredential

// FIXME: Missing documentation for SignedAuthAttestation
export type SignedAuthAttestation =
  | LegacyAuthAttestation
  | AuthV2SignedAuthAttestation

// FIXME: Missing documentation for RegistrationFirstFactor
export type RegistrationFirstFactor =
  | RegistrationConfirmationFido2
  | RegistrationConfirmationKey
  | RegistrationConfirmationPassword

// FIXME: Missing documentation for RegistrationSecondFactor
export type RegistrationSecondFactor =
  | RegistrationConfirmationFido2
  | RegistrationConfirmationKey
  | RegistrationConfirmationTotp

// FIXME: Missing documentation for AuthenticateUserFirstFactor
export type AuthenticateUserFirstFactor =
  | AuthenticateUserPasswordInput
  | AuthenticateUserFido2Input
  | AuthenticateUserKeyInput

// FIXME: Missing documentation for AuthenticateUserSecondFactor
export type AuthenticateUserSecondFactor =
  | AuthenticateUserFido2Input
  | AuthenticateUserKeyInput
  | AuthenticateUserTotpInput

// FIXME: Missing documentation for AuthIdentity
export type AuthIdentity =
  | OrgEmployeeIdentity
  | OrgApiKeyIdentity
  | DfnsStaffIdentity
  | DfnsServiceIdentity

// FIXME: Missing documentation for CredentialKind
export enum CredentialKind {
  // FIXME: Missing documentation for Fido2
  Fido2 = 'Fido2',
  // FIXME: Missing documentation for Key
  Key = 'Key',
  // FIXME: Missing documentation for Password
  Password = 'Password',
  // FIXME: Missing documentation for Totp
  Totp = 'Totp',
  // FIXME: Missing documentation for RecoveryKey
  RecoveryKey = 'RecoveryKey',
}

// FIXME: Missing documentation for UserKind
export enum UserKind {
  // FIXME: Missing documentation for CustomerEmployee
  CustomerEmployee = 'CustomerEmployee',
  // FIXME: Missing documentation for DfnsStaff
  DfnsStaff = 'DfnsStaff',
  // FIXME: Missing documentation for EndUser
  EndUser = 'EndUser',
  // FIXME: Missing documentation for Pat
  Pat = 'Pat',
  // FIXME: Missing documentation for Application
  Application = 'Application',
  // FIXME: Missing documentation for ServiceAccount
  ServiceAccount = 'ServiceAccount',
}

// FIXME: Missing documentation for AuthenticatorRequirementOptions
export enum AuthenticatorRequirementOptions {
  // FIXME: Missing documentation for required
  required = 'required',
  // FIXME: Missing documentation for preferred
  preferred = 'preferred',
  // FIXME: Missing documentation for discouraged
  discouraged = 'discouraged',
}

// FIXME: Missing documentation for AuthenticatorAttestationOptions
export enum AuthenticatorAttestationOptions {
  // FIXME: Missing documentation for none
  none = 'none',
  // FIXME: Missing documentation for indirect
  indirect = 'indirect',
  // FIXME: Missing documentation for direct
  direct = 'direct',
  // FIXME: Missing documentation for enterprise
  enterprise = 'enterprise',
}

// FIXME: Missing documentation for ApplicationKind
export enum ApplicationKind {
  // FIXME: Missing documentation for ServerSideApplication
  ServerSideApplication = 'ServerSideApplication',
  // FIXME: Missing documentation for ClientSideApplication
  ClientSideApplication = 'ClientSideApplication',
}

// FIXME: Missing documentation for FidoCredentialsTransportKind
export enum FidoCredentialsTransportKind {
  // FIXME: Missing documentation for usb
  usb = 'usb',
  // FIXME: Missing documentation for nfc
  nfc = 'nfc',
  // FIXME: Missing documentation for ble
  ble = 'ble',
  // FIXME: Missing documentation for internal
  internal = 'internal',
  // FIXME: Missing documentation for hybrid
  hybrid = 'hybrid',
}

// FIXME: Missing documentation for CredentialFactor
export enum CredentialFactor {
  // FIXME: Missing documentation for first
  first = 'first',
  // FIXME: Missing documentation for second
  second = 'second',
  // FIXME: Missing documentation for either
  either = 'either',
}

// FIXME: Missing documentation for ServerKind
export enum ServerKind {
  // FIXME: Missing documentation for Api
  Api = 'Api',
  // FIXME: Missing documentation for Staff
  Staff = 'Staff',
}

// FIXME: Missing documentation for AccessTokenKind
export enum AccessTokenKind {
  // FIXME: Missing documentation for ServiceAccount
  ServiceAccount = 'ServiceAccount',
  // FIXME: Missing documentation for Pat
  Pat = 'Pat',
  // FIXME: Missing documentation for Application
  Application = 'Application',
}

// FIXME: Missing documentation for UserAuthKind
export enum UserAuthKind {
  // FIXME: Missing documentation for EndUser
  EndUser = 'EndUser',
  // FIXME: Missing documentation for CustomerEmployee
  CustomerEmployee = 'CustomerEmployee',
  // FIXME: Missing documentation for DfnsStaff
  DfnsStaff = 'DfnsStaff',
}

// FIXME: Missing documentation for AuthIdentityKind
export enum AuthIdentityKind {
  // FIXME: Missing documentation for DfnsStaffIdentity
  DfnsStaffIdentity = 'DfnsStaffIdentity',
  // FIXME: Missing documentation for OrgEmployeeIdentity
  OrgEmployeeIdentity = 'OrgEmployeeIdentity',
  // FIXME: Missing documentation for OrgApiKeyIdentity
  OrgApiKeyIdentity = 'OrgApiKeyIdentity',
  // FIXME: Missing documentation for DfnsService
  DfnsService = 'DfnsService',
}
