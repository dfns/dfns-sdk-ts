import { Buffer } from 'buffer'

import { CredentialSigner, CredentialStore, DfnsError, Fido2Assertion, Fido2Attestation } from '@dfns/sdk'
import { fromBase64Url, toBase64Url } from '@dfns/sdk/utils'

export const DEFAULT_WAIT_TIMEOUT = 60000

interface WebAuthnSignerConf {
  /**
   * The "relying party" identifies your application to users, when users create/use passkeys. (Read more [here](https://www.w3.org/TR/webauthn-2/#relying-party)).
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

export class WebAuthnSigner implements CredentialSigner<Fido2Assertion>, CredentialStore<Fido2Attestation> {
  constructor(private conf: WebAuthnSignerConf) {
    if (!this.conf?.relyingParty?.id || !this.conf?.relyingParty?.name) {
      throw new DfnsError(-1, `Relying party ID and name must be specified in the WebauthnSigner initializer`)
    }
  }

  async sign(options: {
    challenge: string
    allowCredentials?: { webauthn?: { id: string; type: PublicKeyCredentialType }[] }
    userVerification?: UserVerificationRequirement
  }): Promise<Fido2Assertion> {
    const response = await navigator.credentials.get({
      publicKey: {
        challenge: Buffer.from(options.challenge),
        allowCredentials: options.allowCredentials?.webauthn?.map(({ id, type }) => ({
          id: fromBase64Url(id).buffer as ArrayBuffer,
          type,
        })),
        rpId: this.conf.relyingParty.id,
        userVerification: options.userVerification,
        timeout: this.conf.timeout ?? DEFAULT_WAIT_TIMEOUT,
      },
    })

    if (response === null) {
      throw new DfnsError(-1, 'Failed to sign with WebAuthn credential')
    }

    const credential = response as PublicKeyCredential
    const assertion = <AuthenticatorAssertionResponse>credential.response

    return {
      kind: 'Fido2',
      credentialAssertion: {
        credId: credential.id,
        clientData: toBase64Url(Buffer.from(assertion.clientDataJSON)),
        authenticatorData: toBase64Url(Buffer.from(assertion.authenticatorData)),
        signature: toBase64Url(Buffer.from(assertion.signature)),
        userHandle: assertion.userHandle ? toBase64Url(Buffer.from(assertion.userHandle)) : undefined,
      },
    }
  }

  async create(options: {
    challenge: string
    pubKeyCredParams: PublicKeyCredentialParameters[]
    user: { displayName: string; id: string; name: string }
    attestation: AttestationConveyancePreference
    excludeCredentials: { id: string; type: PublicKeyCredentialType }[]
    authenticatorSelection?: AuthenticatorSelectionCriteria
  }): Promise<Fido2Attestation> {
    const response = await navigator.credentials.create({
      publicKey: {
        challenge: Buffer.from(options.challenge),
        pubKeyCredParams: options.pubKeyCredParams,
        rp: this.conf.relyingParty,
        user: {
          displayName: options.user.displayName,
          id: Buffer.from(options.user.id),
          name: options.user.name,
        },
        attestation: options.attestation,
        excludeCredentials: options.excludeCredentials.map(({ id, type }) => ({
          id: fromBase64Url(id).buffer as ArrayBuffer,
          type,
        })),
        authenticatorSelection: options.authenticatorSelection,
        timeout: this.conf.timeout ?? DEFAULT_WAIT_TIMEOUT,
      },
    })

    if (response === null) {
      throw new DfnsError(-1, `Failed to create and sign with WebAuthn credential`)
    }

    const credential = response as PublicKeyCredential
    const attestation = <AuthenticatorAttestationResponse>credential.response

    return {
      credentialKind: 'Fido2',
      credentialInfo: {
        credId: credential.id,
        attestationData: toBase64Url(Buffer.from(attestation.attestationObject)),
        clientData: toBase64Url(Buffer.from(attestation.clientDataJSON)),
      },
    }
  }
}
