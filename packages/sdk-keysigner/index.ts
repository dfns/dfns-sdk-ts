import * as crypto from 'crypto'
import { CredentialSigner, KeyAssertion, AllowCredential } from '@dfns/sdk'
import { toBase64Url } from '@dfns/sdk/utils'

export class AsymmetricKeySigner implements CredentialSigner<KeyAssertion> {
  constructor(
    private options: {
      privateKey: string
      credId: string
      appOrigin: string
      crossOrigin?: boolean
      algorithm?: string
    }
  ) { }

  async sign(
    challenge: string,
    allowCredentials: { key: AllowCredential[]; webauthn: AllowCredential[] }
    ): Promise<KeyAssertion> {
      const credId = this.options.credId
      if (credId === undefined || credId === '') {
        throw new Error('credId is needed to sign')
      }
      const allowedCredId = allowCredentials.key.map(cred => cred.id)
      if (!allowedCredId.includes(credId)) {
        throw new Error(`CredId ${credId} does not exist for this account: ${allowedCredId}`)
      }
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
        signature: toBase64Url(crypto.sign(this.options.algorithm || undefined, clientData, this.options.privateKey)),
      },
    }
  }
}
