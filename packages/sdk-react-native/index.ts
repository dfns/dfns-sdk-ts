import {
  AllowCredential,
  CredentialSigner,
  CredentialStore,
  Fido2Assertion,
  Fido2Attestation,
  UserRegistrationChallenge,
} from '@dfns/sdk'
import { toBase64Url } from '@dfns/sdk/utils'
import { Buffer } from 'buffer'
import { Passkey, PasskeyRegistrationResult, PasskeyAuthenticationResult } from 'react-native-passkey'


export const DEFAULT_WAIT_TIMEOUT = 60000

export class PasskeySigner implements CredentialSigner<Fido2Assertion>, CredentialStore<Fido2Attestation> {
  constructor(
    private options: {
      rpId: string
      timeout?: number
    }
  ) { }

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

    const credential: PasskeyAuthenticationResult = await Passkey.authenticate(request);

    return {
      kind: 'Fido2',
      credentialAssertion: {
        credId: credential.id,
        clientData: toBase64Url(Buffer.from(credential.response.clientDataJSON)),
        authenticatorData: toBase64Url(Buffer.from(credential.response.authenticatorData)),
        signature: toBase64Url(Buffer.from(credential.response.signature)),
        userHandle: credential.response.userHandle ? toBase64Url(Buffer.from(credential.response.userHandle)) : '',
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

    const result: PasskeyRegistrationResult = await Passkey.register(options);

    if (result === null) {
      throw Error(`Failed to create and sign with Passkey credential`)
    }

    return {
      credentialKind: 'Fido2',
      credentialInfo: {
        credId: result.id,
        attestationData: toBase64Url(Buffer.from(result.response.attestationObject)),
        clientData: toBase64Url(Buffer.from(result.response.clientDataJSON)),
      },
    }
  }
}
