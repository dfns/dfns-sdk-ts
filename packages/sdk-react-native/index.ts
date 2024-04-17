import {
  CredentialSigner,
  CredentialStore,
  DfnsError,
  Fido2Assertion,
  Fido2Attestation,
  UserActionChallenge,
  UserRegistrationChallenge,
} from '@dfns/sdk'
import { toBase64Url } from '@dfns/sdk/utils'
import { Platform } from 'react-native'
import { Passkey, PasskeyAuthenticationResult } from 'react-native-passkey'
import { PasskeyAuthenticationRequest, PasskeyRegistrationRequest } from 'react-native-passkey/lib/typescript/Passkey'

export const DEFAULT_WAIT_TIMEOUT = 60000

const b64StandardToUrlSafe = (standard: string): string => {
  return standard.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
}

const b64UrlSafeToStandard = (urlSafe: string): string => {
  return (urlSafe + '==='.slice((urlSafe.length + 3) % 4)).replace(/-/g, '+').replace(/_/g, '/')
}

export type PasskeysOptions = {
  timeout?: number
}

// react-native-passkey is incorrect encoding the credId with standard base64 for
// some reason. we have to undo that.
class AndroidPasskeys implements CredentialSigner<Fido2Assertion>, CredentialStore<Fido2Attestation> {
  constructor(private options?: PasskeysOptions) {}

  async sign(challenge: UserActionChallenge): Promise<Fido2Assertion> {
    const request: PasskeyAuthenticationRequest = {
      challenge: challenge.challenge,
      allowCredentials: challenge.allowCredentials.webauthn,
      rpId: challenge.rp.id,
      userVerification: challenge.userVerification,
      timeout: this.options?.timeout ?? DEFAULT_WAIT_TIMEOUT,
    }

    const credential: PasskeyAuthenticationResult = await Passkey.authenticate(request)

    return {
      kind: 'Fido2',
      credentialAssertion: {
        credId: b64StandardToUrlSafe(credential.id),
        clientData: credential.response.clientDataJSON,
        authenticatorData: credential.response.authenticatorData,
        signature: credential.response.signature,
        userHandle: credential.response.userHandle,
      },
    }
  }

  async create(challenge: UserRegistrationChallenge): Promise<Fido2Attestation> {
    const request: PasskeyRegistrationRequest = {
      challenge: challenge.challenge,
      pubKeyCredParams: challenge.pubKeyCredParams,
      rp: challenge.rp,
      user: {
        displayName: challenge.user.displayName,
        id: toBase64Url(challenge.user.id),
        name: challenge.user.name,
      },
      attestation: challenge.attestation,
      excludeCredentials: challenge.excludeCredentials,
      authenticatorSelection: challenge.authenticatorSelection,
      timeout: this.options?.timeout ?? DEFAULT_WAIT_TIMEOUT,
    }

    const result = await Passkey.register(request)

    return {
      credentialKind: 'Fido2',
      credentialInfo: {
        credId: b64StandardToUrlSafe(result.id),
        attestationData: result.response.attestationObject,
        clientData: result.response.clientDataJSON,
      },
    }
  }
}

// react-native-passkey's iOS implementation is not WebAuthn spec compliant. all values
// are standard base64 encoded instead of base64url encoded. we have to convert the
// encoding in both directions.
class iOSPasskeys implements CredentialSigner<Fido2Assertion>, CredentialStore<Fido2Attestation> {
  constructor(private options?: PasskeysOptions) {}

  async sign(challenge: UserActionChallenge): Promise<Fido2Assertion> {
    const request: PasskeyAuthenticationRequest = {
      challenge: b64UrlSafeToStandard(challenge.challenge),
      allowCredentials: challenge.allowCredentials.webauthn.map(({ id, type }) => ({
        id: b64UrlSafeToStandard(id),
        type,
      })),
      rpId: challenge.rp.id,
      userVerification: 'preferred',
      timeout: this.options?.timeout ?? DEFAULT_WAIT_TIMEOUT,
    }

    const credential: PasskeyAuthenticationResult = await Passkey.authenticate(request)

    return {
      kind: 'Fido2',
      credentialAssertion: {
        credId: b64StandardToUrlSafe(credential.id),
        clientData: b64StandardToUrlSafe(credential.response.clientDataJSON),
        authenticatorData: b64StandardToUrlSafe(credential.response.authenticatorData),
        signature: b64StandardToUrlSafe(credential.response.signature),
        userHandle: b64StandardToUrlSafe(credential.response.userHandle),
      },
    }
  }

  async create(challenge: UserRegistrationChallenge): Promise<Fido2Attestation> {
    const request: PasskeyRegistrationRequest = {
      challenge: b64UrlSafeToStandard(challenge.challenge),
      pubKeyCredParams: challenge.pubKeyCredParams,
      rp: challenge.rp,
      user: {
        displayName: challenge.user.displayName,
        id: toBase64Url(challenge.user.id),
        name: challenge.user.name,
      },
      attestation: challenge.attestation,
      excludeCredentials: challenge.excludeCredentials.map(({ id, type }) => ({
        id: b64UrlSafeToStandard(id),
        type,
      })),
      authenticatorSelection: challenge.authenticatorSelection,
      timeout: this.options?.timeout ?? DEFAULT_WAIT_TIMEOUT,
    }

    const result = await Passkey.register(request)

    return {
      credentialKind: 'Fido2',
      credentialInfo: {
        credId: b64StandardToUrlSafe(result.id),
        attestationData: b64StandardToUrlSafe(result.response.attestationObject),
        clientData: b64StandardToUrlSafe(result.response.clientDataJSON),
      },
    }
  }
}

export class PasskeysSigner implements CredentialSigner<Fido2Assertion>, CredentialStore<Fido2Attestation> {
  private platform: CredentialSigner<Fido2Assertion> & CredentialStore<Fido2Attestation>

  constructor(options?: PasskeysOptions) {
    switch (Platform.OS) {
      case 'android':
        this.platform = new AndroidPasskeys(options)
        break
      case 'ios':
        this.platform = new iOSPasskeys(options)
        break
      default:
        throw new DfnsError(-1, `${Platform.OS} is not supported`)
    }
  }

  async sign(challenge: UserActionChallenge): Promise<Fido2Assertion> {
    return this.platform.sign(challenge)
  }

  async create(challenge: UserRegistrationChallenge): Promise<Fido2Attestation> {
    return this.platform.create(challenge)
  }
}
