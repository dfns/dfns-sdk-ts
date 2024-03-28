import * as crypto from 'node:crypto'

import { CredentialSigner, KeyAssertion, UserActionChallenge, DfnsError } from '@dfns/sdk'
import { toBase64Url } from '@dfns/sdk/utils'

export class AsymmetricKeySigner implements CredentialSigner<KeyAssertion> {
  constructor(
    private options: {
      credId: string
      privateKey: string
      algorithm?: string
    }
  ) {}

  async sign(challenge: UserActionChallenge): Promise<KeyAssertion> {
    const { credId, privateKey, algorithm } = this.options

    const allowedCredId = challenge.allowCredentials.key.map((cred) => cred.id)
    if (!allowedCredId.includes(credId)) {
      throw new DfnsError(-1, `${credId} does not match allowed credentials: ${allowedCredId}`)
    }

    const clientData = Buffer.from(
      JSON.stringify({
        type: 'key.get',
        challenge: challenge.challenge,
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
