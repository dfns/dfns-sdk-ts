import * as crypto from 'node:crypto'

import { CredentialSigner, KeyAssertion, DfnsError } from '@dfns/sdk'
import { toBase64Url } from '@dfns/sdk/utils'

export class AsymmetricKeySigner implements CredentialSigner<KeyAssertion> {
  readonly useClientChallenge?: boolean

  constructor(
    private options: {
      credId: string
      privateKey: string
      algorithm?: string
      useClientChallenge?: boolean
    }
  ) {
    this.useClientChallenge = options.useClientChallenge
  }

  async sign(options: { challenge: string; allowCredentials?: { key?: { id: string }[] } }): Promise<KeyAssertion> {
    const { credId, privateKey, algorithm } = this.options

    if (options.allowCredentials) {
      const allowedIds = options.allowCredentials.key?.map((cred) => cred.id) ?? []
      if (!allowedIds.includes(credId)) {
        throw new DfnsError(-1, `${credId} does not match allowed credentials: ${allowedIds.join(', ')}`)
      }
    }

    const clientData = Buffer.from(
      JSON.stringify({
        type: 'key.get',
        challenge: options.challenge,
      })
    )

    return {
      kind: 'Key',
      credentialAssertion: {
        credId,
        clientData: toBase64Url(clientData),
        signature: toBase64Url(crypto.sign(algorithm || undefined, clientData, privateKey)),
      },
    }
  }
}
