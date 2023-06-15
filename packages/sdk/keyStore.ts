import { AllowCredential, CredentialKind } from './signer'

export type AuthenticatorAttachment = 'platform' | 'cross-platform'

export type ResidentKeyRequirement = 'required' | 'preferred' | 'discouraged'

export type UserVerificationRequirement = 'required' | 'preferred' | 'discouraged'

export type AttestationConveyancePreference = 'none' | 'indirect' | 'direct' | 'enterprise'

export type UserRegistrationChallenge = {
  temporaryAuthenticationToken: string
  rp: {
    id: string
    name: string
  }
  user: {
    id: string
    name: string
    displayName: string
  }
  supportedCredentialKinds: {
    firstFactor: CredentialKind[]
    secondFactor: CredentialKind[]
  }
  otpUrl: string
  challenge: string
  authenticatorSelection: {
    authenticatorAttachment?: AuthenticatorAttachment
    requireResidentKey: boolean
    residentKey: ResidentKeyRequirement
    userVerification: UserVerificationRequirement
  }
  attestation: AttestationConveyancePreference
  pubKeyCredParams: {
    type: 'public-key'
    alg: number
  }[]
  excludeCredentials: AllowCredential[]
}

export type CredentialAttestation = {
  credId: string
  clientData: string
  attestationData: string
}

export type FirstFactorAttestation =
  | {
      credentialKind: 'Key'
      credentialInfo: CredentialAttestation
    }
  | {
      credentialKind: 'Fido2'
      credentialInfo: CredentialAttestation
    }
  | {
      credentialKind: 'Password'
      credentialInfo: {
        password: string
      }
    }

export type SecondFactorAttestation =
  | {
      credentialKind: 'Key'
      credentialInfo: CredentialAttestation
    }
  | {
      credentialKind: 'Fido2'
      credentialInfo: CredentialAttestation
    }
  | {
      credentialKind: 'Totp'
      credentialInfo: {
        otpCode: string
      }
    }

export type RecoveryFactorAttestation = {
  credentialKind: 'RecoveryKey'
  credentialInfo: CredentialAttestation
  encryptedPrivateKey?: string
}

export interface KeyStore {
  create(challenge: UserRegistrationChallenge): Promise<{
    firstFactorCredential: FirstFactorAttestation
    secondFactorCredential?: SecondFactorAttestation
  }>
}
