import {
  AllowCredential,
  CredentialSigner,
  CredentialStore,
  Fido2Assertion,
  Fido2Attestation,
  UserRegistrationChallenge,
} from '@dfns/sdk'
import { toBase64Url } from '@dfns/sdk/utils'
import { Platform } from 'react-native'
import { Passkey, PasskeyAuthenticationResult } from 'react-native-passkey'

export const DEFAULT_WAIT_TIMEOUT = 60000

const b64StandardToUrlSafe = (standard: string): string => {
  return standard.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
}

const b64UrlSafeToStandard = (urlSafe: string): string => {
  return (urlSafe + '==='.slice((urlSafe.length + 3) % 4)).replace(/-/g, '+').replace(/_/g, '/')
}

type PasskeysOptions = {
  rpId: string
  timeout?: number
}

interface InnerSigner extends CredentialSigner<Fido2Assertion>, CredentialStore<Fido2Attestation> {}

class AndroidPasskeys implements InnerSigner {
  constructor(private options: PasskeysOptions) {}

  async sign(
    challenge: string,
    allowCredentials: { key: AllowCredential[]; webauthn: AllowCredential[] }
  ): Promise<Fido2Assertion> {
    const request = {
      challenge: challenge,
      allowCredentials: allowCredentials.webauthn.map(({ id, type, transports }) => ({
        id: id,
        type,
        transports: transports ?? [],
      })),
      rpId: this.options.rpId,
      userVerification: 'required',
      timeout: this.options.timeout ?? DEFAULT_WAIT_TIMEOUT,
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
    const options = {
      challenge: challenge.challenge,
      pubKeyCredParams: challenge.pubKeyCredParams,
      rp: challenge.rp,
      user: {
        displayName: challenge.user.displayName,
        id: toBase64Url(challenge.user.id),
        name: challenge.user.name,
      },
      attestation: challenge.attestation,
      excludeCredentials: challenge.excludeCredentials.map((cred) => ({
        id: cred.id,
        type: cred.type,
      })),
      authenticatorSelection: challenge.authenticatorSelection,
      timeout: this.options.timeout ?? DEFAULT_WAIT_TIMEOUT,
    }

    const result = await Passkey.register(options)

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

class iOsPasskeys implements InnerSigner {
  constructor(private options: PasskeysOptions) {}

  async sign(
    challenge: string,
    allowCredentials: { key: AllowCredential[]; webauthn: AllowCredential[] }
  ): Promise<Fido2Assertion> {
    const request = {
      challenge: b64UrlSafeToStandard(challenge),
      allowCredentials: allowCredentials.webauthn.map(({ id, type, transports }) => ({
        id: b64UrlSafeToStandard(id),
        type,
        transports: transports ?? [],
      })),
      rpId: this.options.rpId,
      userVerification: 'required',
      timeout: this.options.timeout ?? DEFAULT_WAIT_TIMEOUT,
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
    const options = {
      challenge: b64UrlSafeToStandard(challenge.challenge),
      pubKeyCredParams: challenge.pubKeyCredParams,
      rp: challenge.rp,
      user: {
        displayName: challenge.user.displayName,
        id: toBase64Url(challenge.user.id),
        name: challenge.user.name,
      },
      attestation: challenge.attestation,
      excludeCredentials: challenge.excludeCredentials.map((cred) => ({
        id: cred.id,
        type: cred.type,
      })),
      authenticatorSelection: challenge.authenticatorSelection,
      timeout: this.options.timeout ?? DEFAULT_WAIT_TIMEOUT,
    }

    const result = await Passkey.register(options)

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
  private inner: InnerSigner

  constructor(options: PasskeysOptions) {
    switch (Platform.OS) {
      case 'android':
        this.inner = new AndroidPasskeys(options)
        break
      case 'ios':
        this.inner = new iOsPasskeys(options)
        break
      default:
        throw Error(`${Platform.OS} not supported`)
    }
  }

  async sign(
    challenge: string,
    allowCredentials: { key: AllowCredential[]; webauthn: AllowCredential[] }
  ): Promise<Fido2Assertion> {
    return this.inner.sign(challenge, allowCredentials)
  }

  async create(challenge: UserRegistrationChallenge): Promise<Fido2Attestation> {
    return this.inner.create(challenge)
  }
}
