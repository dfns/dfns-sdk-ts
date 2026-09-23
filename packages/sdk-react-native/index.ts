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
import { Passkey, PasskeyCreateRequest, PasskeyGetRequest, PasskeyGetResult } from 'react-native-passkey'

export const DEFAULT_WAIT_TIMEOUT = 60000

export type PasskeysSignerConf = {
  /**
   * The relying party identifies your application to users, when users create/use passkeys. (Read more [here](https://www.w3.org/TR/webauthn-2/#relying-party)).
   * - id: The relying party identifier is a valid domain string identifying the WebAuthn Relying Party.
   * In other words, its the domain your application is running on, which will be tied to the passkeys that users create.
   * We advise to use the root domain, not the full domain (eg `acme.com`, not `app.acme.com` nor `foo.app.acme.com`), that way, passkeys created
   * by your users can be re-used on other subdomains (eg. on `foo.acme.com` and `bar.acme.com`) in the future. Read more [here](https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions#rp).
   * - name: A string representing the name of the relying party (e.g. "Acme"). This is the name the user will be presented with when creating or validating a WebAuthn operation.
   */
  relyingParty: { id: string; name: string }
  /**
   * Timeout to use for navigotor.credentials calls. That's the time after which if user did not successfully
   * select and use his passkey, an error will be thrown by webauthn client. Read more [here](https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions#timeout).
   * */
  timeout?: number
}

class AndroidPasskeys implements CredentialSigner<Fido2Assertion>, CredentialStore<Fido2Attestation> {
  constructor(private conf: PasskeysSignerConf) {
    if (!this.conf?.relyingParty?.id || !this.conf?.relyingParty?.name) {
      throw new DfnsError(-1, 'Relying party ID and name must be specified in the WebauthnSigner initializer')
    }
  }

  async sign(challenge: UserActionChallenge): Promise<Fido2Assertion> {
    const request: PasskeyGetRequest = {
      challenge: challenge.challenge,
      allowCredentials: challenge.allowCredentials?.webauthn,
      rpId: this.conf.relyingParty.id,
      userVerification: challenge.userVerification,
      timeout: this.conf.timeout ?? DEFAULT_WAIT_TIMEOUT,
    }

    const credential: PasskeyGetResult = await Passkey.get(request)

    return {
      kind: 'Fido2',
      credentialAssertion: {
        credId: credential.id,
        clientData: credential.response.clientDataJSON,
        authenticatorData: credential.response.authenticatorData,
        signature: credential.response.signature,
        userHandle: credential.response.userHandle,
      },
    }
  }

  async create(challenge: UserRegistrationChallenge): Promise<Fido2Attestation> {
    const request: PasskeyCreateRequest = {
      challenge: challenge.challenge,
      pubKeyCredParams: challenge.pubKeyCredParams,
      rp: this.conf.relyingParty,
      user: {
        displayName: challenge.user.displayName,
        id: toBase64Url(challenge.user.id),
        name: challenge.user.name,
      },
      attestation: challenge.attestation,
      excludeCredentials: challenge.excludeCredentials?.map((v) => ({
        id: v.id,
        type: v.type,
      })),
      authenticatorSelection: challenge.authenticatorSelection,
      timeout: this.conf.timeout ?? DEFAULT_WAIT_TIMEOUT,
    }

    const result = await Passkey.create(request)

    return {
      credentialKind: 'Fido2',
      credentialInfo: {
        credId: result.id,
        attestationData: result.response.attestationObject,
        clientData: result.response.clientDataJSON,
      },
    }
  }
}

class iOSPasskeys implements CredentialSigner<Fido2Assertion>, CredentialStore<Fido2Attestation> {
  constructor(private conf: PasskeysSignerConf) {
    if (!this.conf?.relyingParty?.id || !this.conf?.relyingParty?.name) {
      throw new DfnsError(-1, 'Relying party ID and name must be specified in the WebauthnSigner initializer')
    }
  }

  async sign(challenge: UserActionChallenge): Promise<Fido2Assertion> {
    const request: PasskeyGetRequest = {
      challenge: challenge.challenge,
      allowCredentials: challenge.allowCredentials?.webauthn,
      rpId: this.conf.relyingParty.id,
      userVerification: 'preferred',
      timeout: this.conf.timeout ?? DEFAULT_WAIT_TIMEOUT,
    }

    const credential: PasskeyGetResult = await Passkey.get(request)

    return {
      kind: 'Fido2',
      credentialAssertion: {
        credId: credential.id,
        clientData: credential.response.clientDataJSON,
        authenticatorData: credential.response.authenticatorData,
        signature: credential.response.signature,
        userHandle: credential.response.userHandle,
      },
    }
  }

  async create(challenge: UserRegistrationChallenge): Promise<Fido2Attestation> {
    const request: PasskeyCreateRequest = {
      challenge: challenge.challenge,
      pubKeyCredParams: challenge.pubKeyCredParams,
      rp: this.conf.relyingParty,
      user: {
        displayName: challenge.user.displayName,
        id: toBase64Url(challenge.user.id),
        name: challenge.user.name,
      },
      attestation: challenge.attestation,
      excludeCredentials: challenge.excludeCredentials,
      authenticatorSelection: challenge.authenticatorSelection,
      timeout: this.conf.timeout ?? DEFAULT_WAIT_TIMEOUT,
    }

    const result = await Passkey.create(request)

    return {
      credentialKind: 'Fido2',
      credentialInfo: {
        credId: result.id,
        attestationData: result.response.attestationObject,
        clientData: result.response.clientDataJSON,
      },
    }
  }
}

export class PasskeysSigner implements CredentialSigner<Fido2Assertion>, CredentialStore<Fido2Attestation> {
  private platform: CredentialSigner<Fido2Assertion> & CredentialStore<Fido2Attestation>

  constructor(conf: PasskeysSignerConf) {
    switch (Platform.OS) {
      case 'android':
        this.platform = new AndroidPasskeys(conf)
        break
      case 'ios':
        this.platform = new iOSPasskeys(conf)
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
