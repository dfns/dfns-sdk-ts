import { Buffer } from 'buffer'
import { AllowCredential, FirstFactorAssertion, SecondFactorAssertion, Signer } from '@dfns/sdk/signer'
import { fromBase64Url, toBase64Url } from '@dfns/sdk/utils/base64'
import {
  UserRegistrationChallenge,
  CreateUserRegistrationInput,
  CredentialKind,
} from '@dfns/sdk/codegen/datamodel/Auth'

export const DEFAULT_WAIT_TIMEOUT = 60000

export class WebauthnSigner implements Signer {
  constructor(
    private options: {
      rpId: string
      timeout?: number
    }
  ) {}

  async sign(
    challenge: string,
    allowCredentials: { key: AllowCredential[]; webauthn: AllowCredential[] }
  ): Promise<{ firstFactor: FirstFactorAssertion; secondFactor?: SecondFactorAssertion | undefined }> {
    const credential = (await navigator.credentials.get({
      mediation: 'required',
      publicKey: {
        challenge: Buffer.from(challenge),
        allowCredentials: allowCredentials.webauthn.map(({ id, type, transports }) => ({
          id: fromBase64Url(id),
          type,
          transports: transports ?? [],
        })),
        rpId: this.options.rpId,
        userVerification: 'required',
        timeout: this.options.timeout ?? DEFAULT_WAIT_TIMEOUT,
      },
    })) as PublicKeyCredential | null

    if (!credential) {
      throw new Error('failed webauthn')
    }

    const response = <AuthenticatorAssertionResponse>credential.response

    return {
      firstFactor: {
        kind: 'Fido2',
        credentialAssertion: {
          credId: credential.id,
          clientData: toBase64Url(Buffer.from(response.clientDataJSON)),
          authenticatorData: toBase64Url(Buffer.from(response.authenticatorData)),
          signature: toBase64Url(Buffer.from(response.signature)),
          userHandle: response.userHandle ? toBase64Url(Buffer.from(response.userHandle)) : undefined,
        },
      },
    }
  }

  async createCredAndSignRegistrationChallenge(
    challenge: UserRegistrationChallenge
  ): Promise<CreateUserRegistrationInput> {
    const options: CredentialCreationOptions = {
      publicKey: {
        challenge: Buffer.from(challenge.challenge),
        pubKeyCredParams: challenge.pubKeyCredParams.map((cred) => ({
          alg: cred.alg,
          type: cred.type,
        })) as PublicKeyCredentialParameters[],
        rp: {
          name: challenge.rp.name,
          id: challenge.rp.id,
        },
        user: {
          displayName: challenge.user.displayName,
          id: Buffer.from(challenge.user.id),
          name: challenge.user.name,
        },
        attestation: 'direct',
        excludeCredentials: challenge.excludeCredentials.map((cred) => ({
          id: fromBase64Url(cred.id),
          type: cred.type,
          transports: [],
        })) as PublicKeyCredentialDescriptor[],
        authenticatorSelection: challenge.authenticatorSelection as AuthenticatorSelectionCriteria,
        timeout: 60000,
      },
    }

    const response = await navigator.credentials.create(options)

    if (response === null) {
      throw Error(`Failed to get sign WebAuthn challenge.`)
    }

    const credential = response as PublicKeyCredential
    const signedChallenge = <AuthenticatorAttestationResponse>credential.response

    return {
      firstFactorCredential: {
        credentialKind: CredentialKind.Fido2,
        credentialInfo: {
          credId: credential.id,
          attestationData: toBase64Url(Buffer.from(signedChallenge.attestationObject)),
          clientData: toBase64Url(Buffer.from(signedChallenge.clientDataJSON)),
        },
      },
    }
  }
}
