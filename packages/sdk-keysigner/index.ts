import * as crypto from 'crypto'
import { CredentialSigner, KeyAssertion } from '@dfns/sdk/signer'

export class AsymmetricKeySigner implements CredentialSigner<KeyAssertion> {
  constructor(
    private options: {
      privateKey: string
      credId: string
      appOrigin: string
      crossOrigin?: boolean
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
        clientData: clientData.toString('base64url'),
        signature: crypto.sign('SHA256', clientData, this.options.privateKey).toString('base64url'),
      },
    }
  }
}
