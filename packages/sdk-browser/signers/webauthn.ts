import {
  CredentialSigner,
  CredentialStore,
  DfnsError,
  Fido2Assertion,
  Fido2Attestation,
  UserActionChallenge,
  UserRegistrationChallenge,
} from '@dfns/sdk'
import { fromBase64Url, toBase64Url } from '@dfns/sdk/utils'
import { Buffer } from 'buffer'

export const DEFAULT_WAIT_TIMEOUT = 60000

export class WebAuthnSigner implements CredentialSigner<Fido2Assertion>, CredentialStore<Fido2Attestation> {
  constructor(
    private options?: {
      timeout?: number
    }
  ) {}

  async sign(challenge: UserActionChallenge): Promise<Fido2Assertion> {
    const response = await navigator.credentials.get({
      publicKey: {
        challenge: Buffer.from(challenge.challenge),
        allowCredentials: challenge.allowCredentials.webauthn.map(({ id, type, transports }) => ({
          id: fromBase64Url(id),
          type,
          transports: transports ?? [],
        })),
        rpId: challenge.rp.id,
        userVerification: challenge.userVerification,
        timeout: this.options?.timeout ?? DEFAULT_WAIT_TIMEOUT,
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

  async create(challenge: UserRegistrationChallenge): Promise<Fido2Attestation> {
    const options: CredentialCreationOptions = {
      publicKey: {
        challenge: Buffer.from(challenge.challenge),
        pubKeyCredParams: challenge.pubKeyCredParams,
        rp: challenge.rp,
        user: {
          displayName: challenge.user.displayName,
          id: Buffer.from(challenge.user.id),
          name: challenge.user.name,
        },
        attestation: challenge.attestation,
        excludeCredentials: challenge.excludeCredentials.map((cred) => ({
          id: fromBase64Url(cred.id),
          type: cred.type,
        })),
        authenticatorSelection: challenge.authenticatorSelection,
        timeout: this.options?.timeout ?? DEFAULT_WAIT_TIMEOUT,
      },
    }

    const response = await navigator.credentials.create(options)

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
