import { CreateCredentialChallengeResponse, CreateRegistrationChallengeResponse } from './generated/auth/types'

export type AuthenticatorAttachment = 'platform' | 'cross-platform'

export type ResidentKeyRequirement = 'required' | 'preferred' | 'discouraged'

export type AttestationConveyancePreference = 'none' | 'indirect' | 'direct' | 'enterprise'

export type UserRegistrationChallenge = CreateRegistrationChallengeResponse

export type KeyAttestation = {
  credentialKind: 'Key'
  credentialInfo: {
    credId: string
    clientData: string
    attestationData: string
  }
}

export type Fido2Attestation = {
  credentialKind: 'Fido2'
  credentialInfo: {
    credId: string
    clientData: string
    attestationData: string
  }
}

export type PasswordAttestation = {
  credentialKind: 'Password'
  credentialInfo: {
    password: string
  }
}

export type TotpAttestation = {
  credentialKind: 'Totp'
  credentialInfo: {
    otpCode: string
  }
}

export type FirstFactorAttestation = KeyAttestation | Fido2Attestation | PasswordAttestation

export type SecondFactorAttestation = KeyAttestation | Fido2Attestation | TotpAttestation

export type RecoveryKeyAttestation = {
  credentialKind: 'RecoveryKey'
  credentialInfo: {
    credId: string
    clientData: string
    attestationData: string
  }
  encryptedPrivateKey?: string
}

export type RecoveryFactorAttestation = RecoveryKeyAttestation

export type CredentialAttestation =
  | KeyAttestation
  | Fido2Attestation
  | PasswordAttestation
  | TotpAttestation
  | RecoveryKeyAttestation

export interface CredentialStore<T extends CredentialAttestation = FirstFactorAttestation> {
  create(challenge: CreateRegistrationChallengeResponse | CreateCredentialChallengeResponse): Promise<T>
}
