import { Buffer } from 'buffer'
import { AllowCredential, FirstFactorAssertion, SecondFactorAssertion, Signer } from '@dfns/sdk/signer'
import { fromBase64Url, toBase64Url } from '@dfns/sdk/utils/base64'

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
}
