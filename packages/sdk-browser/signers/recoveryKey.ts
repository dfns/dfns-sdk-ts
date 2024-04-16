import { RecoveryKeyAttestation, UserRegistrationChallenge } from '@dfns/sdk'
import { toBase64Url } from '@dfns/sdk/utils'
import { Buffer } from 'buffer'

import { PasswordWrappedKey } from '../keys/password'
import { postAsync } from '../utils/messaging'

export type RecoveryCredentialChallenge = Omit<
  UserRegistrationChallenge,
  'authenticatorSelection' | 'excludeCredentials' | 'otpUrl'
> & { challengeIdentifier?: string }

export const randomRecoveryKey = (): string => {
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  const uuid1 = crypto.randomUUID().replace(/-/g, '')
  const uuid2 = crypto.randomUUID().replace(/-/g, '')

  let password = ''
  for (let i = 0; i < uuid1.length; ++i) {
    const key = parseInt(uuid1[i], 16) + (parseInt(uuid2[i]) < 8 ? 0 : 16)
    password += alphabet[key]
  }
  return (
    'D1-' +
    password.substring(0, 6) +
    '-' +
    password.substring(6, 11) +
    '-' +
    password.substring(11, 16) +
    '-' +
    password.substring(16, 21) +
    '-' +
    password.substring(21, 26) +
    '-' +
    password.substring(26)
  )
}

const deriveSaltFromUsername = async (username: string): Promise<Uint8Array> => {
  const normalized = username.toLowerCase().trim()
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(normalized))
  return new Uint8Array(digest)
}

export type RecoveryKeySignerMessage =
  | { kind: 'create'; recoveryKey: string; challenge: RecoveryCredentialChallenge }
  | { kind: 'sign' }

const create = async (recoveryKey: string, challenge: RecoveryCredentialChallenge): Promise<RecoveryKeyAttestation> => {
  const salt = await deriveSaltFromUsername(challenge.user.name)
  const key = await PasswordWrappedKey.create(recoveryKey, salt)

  const clientData = JSON.stringify({
    type: 'key.create',
    challenge: toBase64Url(challenge.challenge),
  })
  const clientDataHash = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(clientData))

  const signature = await key.sign(
    recoveryKey,
    salt,
    JSON.stringify({
      clientDataHash: Buffer.from(clientDataHash).toString('hex'),
      publicKey: key.publicKey,
    })
  )
  const attestationData = JSON.stringify({
    publicKey: key.publicKey,
    signature: Buffer.from(signature).toString('hex'),
    algorithm: 'SHA256',
  })

  const privateKeyHash = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(key.encryptedPrivateKey))

  return {
    credentialKind: 'RecoveryKey',
    credentialInfo: {
      credId: toBase64Url(Buffer.from(privateKeyHash)),
      attestationData: toBase64Url(attestationData),
      clientData: toBase64Url(clientData),
    },
    encryptedPrivateKey: key.encryptedPrivateKey,
  }
}

export const handleRecoveryKeySignerMessage = async (e: MessageEvent<RecoveryKeySignerMessage>) => {
  try {
    switch (e.data.kind) {
      case 'create':
        const attestation = await create(e.data.recoveryKey, e.data.challenge)
        e.ports[0].postMessage({ result: attestation })
        break
      case 'sign':
        break
    }
  } catch (error: any) {
    e.ports[0].postMessage({ error })
  }
}

export class RecoveryKeySigner {
  constructor(private readonly worker: Worker) {}

  public create(recoveryKey: string, challenge: RecoveryCredentialChallenge): Promise<RecoveryKeyAttestation> {
    return postAsync(this.worker, { kind: 'create', recoveryKey, challenge })
  }
}
