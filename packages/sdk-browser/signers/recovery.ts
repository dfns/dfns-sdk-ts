import { Buffer } from 'buffer'

import { CreateCredentialBody, RecoverBody } from '@dfns/sdk/types/auth'
import { fromBase64Url, toBase64Url } from '@dfns/sdk/utils'

import { IsolatedKeyHandle } from '../worker/handle'
import { namedError } from '../worker/protocol'

export type RecoveryKeyAttestation = Omit<
  Extract<CreateCredentialBody, { credentialKind: 'RecoveryKey' }>,
  'challengeIdentifier' | 'credentialName'
>

export type RecoveryKeyAssertion = RecoverBody['recovery']

const RECOVERY_CODE_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'

export const randomRecoveryCode = (): string => {
  const uuid1 = crypto.randomUUID().replace(/-/g, '')
  const uuid2 = crypto.randomUUID().replace(/-/g, '')
  let out = ''
  for (let i = 0; i < uuid1.length; ++i) {
    const idx = parseInt(uuid1[i], 16) + (parseInt(uuid2[i]) < 8 ? 0 : 16)
    out += RECOVERY_CODE_ALPHABET[idx]
  }
  return `D1-${out.substring(0, 6)}-${out.substring(6, 11)}-${out.substring(11, 16)}-${out.substring(
    16,
    21
  )}-${out.substring(21, 26)}-${out.substring(26)}`
}

const deriveSaltFromUsername = async (username: string): Promise<Uint8Array<ArrayBuffer>> => {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(username.toLowerCase().trim()))
  return new Uint8Array(digest)
}

const spawnWorker = (): IsolatedKeyHandle => {
  const worker = new Worker(new URL('../worker/dedicatedWorker', import.meta.url), { type: 'module' })
  return new IsolatedKeyHandle(worker)
}

export class RecoveryKeySigner {
  constructor(
    private readonly keyData: {
      username: string
      credId: string
      wrappedKey: string
    }
  ) {}

  static async create(
    username: string,
    options: { challenge: string }
  ): Promise<{
    attestation: RecoveryKeyAttestation
    recoveryCode: string
  }> {
    const handle = spawnWorker()
    try {
      const recoveryCode = randomRecoveryCode()
      const salt = await deriveSaltFromUsername(username)
      const { publicKey, credId, wrappedKey } = await handle.create({ password: recoveryCode, salt })
      if (!wrappedKey) {
        throw namedError(
          'InvalidArgument',
          'IsolatedKey.create did not return a wrappedKey despite a password being provided'
        )
      }

      const clientData = JSON.stringify({ type: 'key.create', challenge: options.challenge })
      const clientDataHash = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(clientData))
      const fingerprint = JSON.stringify({
        clientDataHash: Buffer.from(clientDataHash).toString('hex'),
        publicKey,
      })

      const { signature: sigB64Url } = await handle.sign(fingerprint)
      const signatureHex = fromBase64Url(sigB64Url).toString('hex')

      const attestationData = JSON.stringify({
        algorithm: 'SHA256',
        publicKey,
        signature: signatureHex,
      })

      return {
        attestation: {
          credentialKind: 'RecoveryKey',
          credentialInfo: {
            credId,
            clientData: toBase64Url(Buffer.from(clientData)),
            attestationData: toBase64Url(Buffer.from(attestationData)),
          },
          encryptedPrivateKey: wrappedKey,
        },
        recoveryCode,
      }
    } finally {
      await handle.close()
    }
  }

  async sign(newCredentials: RecoverBody['newCredentials'], recoveryCode: string): Promise<RecoveryKeyAssertion> {
    const { credId, username, wrappedKey } = this.keyData

    const challenge = toBase64Url(Buffer.from(JSON.stringify(newCredentials)))
    const clientData = JSON.stringify({ challenge, type: 'key.get' })

    const handle = spawnWorker()
    try {
      const salt = await deriveSaltFromUsername(username)
      await handle.unlock({ credId, wrappedKey, password: recoveryCode, salt })
      const { signature } = await handle.sign(clientData)
      return {
        kind: 'RecoveryKey',
        credentialAssertion: {
          credId,
          clientData: toBase64Url(Buffer.from(clientData)),
          signature,
        },
      }
    } finally {
      await handle.close()
    }
  }
}
