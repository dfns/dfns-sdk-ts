import * as crypto from 'crypto'
import { CredentialSigner, KeyAssertion } from '@dfns/sdk/signer'
import { toBase64Url } from '@dfns/sdk/utils/base64'

export class AsymmetricKeySigner implements CredentialSigner<KeyAssertion> {
  constructor(
    private options: {
      privateKey: string
      credId: string
      appOrigin: string
      crossOrigin?: boolean
      algorithm?: string
    }
  ) {}

  async sign(challenge: string): Promise<KeyAssertion> {
    const clientData = Buffer.from(
      JSON.stringify({
        type: 'key.get',
        challenge,
        origin: this.options.appOrigin,
        crossOrigin: this.options.crossOrigin ?? false,
      })
    )

    return {
      kind: 'Key',
      credentialAssertion: {
        credId: this.options.credId,
        clientData: toBase64Url(clientData),
        signature: toBase64Url(crypto.sign(
          this.options.algorithm || undefined,
          clientData,
          this.options.privateKey
        )),
      },
    }
  }
}
