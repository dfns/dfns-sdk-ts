import { DfnsError } from './dfnsError'

export type CredentialFactor = 'first' | 'second' | 'either'

export type CredentialKind = 'Key' | 'Fido2' | 'Password' | 'Totp' | 'RecoveryKey'

export type CredentialTransport = 'usb' | 'nfc' | 'ble' | 'internal'

export type UserVerificationRequirement = 'required' | 'preferred' | 'discouraged'

export type AllowCredential = {
  type: 'public-key'
  id: string
}

export type SupportedCredential = {
  kind: CredentialKind
  factor: CredentialFactor
  requiresSecondFactor: boolean
}

export type UserActionChallenge = {
  supportedCredentialKinds: SupportedCredential[]
  rp: {
    id: string
    name: string
  }
  challenge: string
  challengeIdentifier: string
  externalAuthenticationUrl: string
  allowCredentials: {
    key: AllowCredential[]
    webauthn: AllowCredential[]
  }
  userVerification: UserVerificationRequirement
}

export type KeyAssertion = {
  kind: 'Key'
  credentialAssertion: {
    credId: string
    clientData: string
    signature: string
    algorithm?: string
  }
}

export type Fido2Assertion = {
  kind: 'Fido2'
  credentialAssertion: {
    credId: string
    clientData: string
    authenticatorData: string
    signature: string
    userHandle?: string
  }
}

export type PasswordAssertion = {
  kind: 'Password'
  password: string
}

export type TotpAssertion = {
  kind: 'Totp'
  otpCode: string
}

export type RecoveryKeyAssertion = {
  kind: 'RecoveryKey'
  credentialAssertion: {
    credId: string
    clientData: string
    signature: string
    algorithm?: string
  }
}

export type FirstFactorAssertion = KeyAssertion | Fido2Assertion | PasswordAssertion

export type SecondFactorAssertion = KeyAssertion | Fido2Assertion | TotpAssertion

export type CredentialAssertion = KeyAssertion | Fido2Assertion | PasswordAssertion | TotpAssertion

export interface CredentialSigner<T extends CredentialAssertion = FirstFactorAssertion> {
  sign(challenge: UserActionChallenge): Promise<T>
}
