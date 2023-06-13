export type CredentialTransport = 'usb' | 'nfc' | 'ble' | 'internal'

export type AllowCredential = {
  type: 'public-key'
  id: string
  transports: CredentialTransport[]
}

export type KeyAssertion = {
  credId: string
  clientData: string
  signature: string
}

export type Fido2Assertion = {
  credId: string
  clientData: string
  authenticatorData: string
  signature: string
  userHandle?: string
}

export type FirstFactorAssertion =
  | {
      kind: 'Key'
      credentialAssertion: KeyAssertion
    }
  | {
      kind: 'Fido2'
      credentialAssertion: Fido2Assertion
    }
  | {
      kind: 'Password'
      password: string
    }

export type SecondFactorAssertion =
  | {
      kind: 'Key'
      credentialAssertion: KeyAssertion
    }
  | {
      kind: 'Fido2'
      credentialAssertion: Fido2Assertion
    }
  | {
      kind: 'Totp'
      otpCode: string
    }

export interface Signer {
  sign(
    challenge: string,
    allowCredentials: { key: AllowCredential[]; webauthn: AllowCredential[] }
  ): Promise<{
    firstFactor: FirstFactorAssertion
    secondFactor?: SecondFactorAssertion
  }>
}
