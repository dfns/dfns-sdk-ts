import { Buffer } from 'buffer'

import { fromBase64Url, toBase64Url } from '@dfns/sdk/utils'

import {
  CreateCredentialBody,
  CreateCredentialChallengeResponse,
  CreateRegistrationChallengeResponse,
} from '@dfns/sdk/generated/auth'
import { KeyAssertion, UserActionChallenge } from '@dfns/sdk'
import { IsolatedKeyHandle } from '../worker/handle'

const DEFAULT_TTL_MS = 60_000

const deriveSaltFromUsername = async (username: string): Promise<Uint8Array<ArrayBuffer>> => {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(username.toLowerCase().trim()))
  return new Uint8Array(digest)
}

const spawnWorker = (): IsolatedKeyHandle => {
  const worker = new Worker(new URL('../worker/dedicatedWorker', import.meta.url), { type: 'module' })
  return new IsolatedKeyHandle(worker)
}

export type PasswordProtectedKeyAttestation = Omit<
  Extract<CreateCredentialBody, { credentialKind: 'PasswordProtectedKey' }>,
  'challengeIdentifier' | 'credentialName'
>

export class PasswordProtectedKeySigner {
  private handle: IsolatedKeyHandle | null = null
  private ttlTimer: ReturnType<typeof setTimeout> | null = null

  constructor(
    private readonly keyData: {
      username: string
      credentialId: string
      wrappedKey: string
    },
    private readonly ttlMs: number = DEFAULT_TTL_MS
  ) {}

  static async create(
    username: string,
    challenge:
      | CreateRegistrationChallengeResponse
      | Extract<CreateCredentialChallengeResponse, { kind: 'PasswordProtectedKey' }>,
    password: string
  ): Promise<PasswordProtectedKeyAttestation> {
    const handle = spawnWorker()
    try {
      const salt = await deriveSaltFromUsername(username)
      const { publicKey, credId, wrappedKey } = await handle.create({ password, salt })
      if (!wrappedKey)
        throw new Error('IsolatedKey.create did not return a wrappedKey despite a password being provided')

      const clientData = JSON.stringify({ type: 'key.create', challenge: challenge.challenge })
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
        credentialKind: 'PasswordProtectedKey',
        credentialInfo: {
          attestationData: toBase64Url(Buffer.from(attestationData)),
          clientData: toBase64Url(Buffer.from(clientData)),
          credId,
        },
        encryptedPrivateKey: wrappedKey,
      }
    } finally {
      await handle.close()
    }
  }

  isUnlocked(): boolean {
    return this.handle !== null
  }

  async unlock(password: string): Promise<void> {
    await this.lock()
    const handle = spawnWorker()
    try {
      const salt = await deriveSaltFromUsername(this.keyData.username)
      await handle.unlock(this.keyData.credentialId, this.keyData.wrappedKey, password, salt)
      this.handle = handle
      this.resetTtl()
    } catch (err) {
      handle.terminate()
      throw err
    }
  }

  async sign(challenge: Pick<UserActionChallenge, 'challenge' | 'allowCredentials'>): Promise<KeyAssertion> {
    if (!this.handle) throw new Error('PasswordProtectedKey is locked; call unlock(password) first')

    const { credentialId } = this.keyData
    const allowedIds = challenge.allowCredentials?.passwordProtectedKey?.map((c) => c.id) ?? []
    if (!allowedIds.includes(credentialId)) {
      throw new Error(`${credentialId} does not match allowed password-protected credentials: ${allowedIds.join(', ')}`)
    }

    const clientData = JSON.stringify({ challenge: challenge.challenge, type: 'key.get' })
    const { signature } = await this.handle.sign(clientData)
    this.resetTtl()

    return {
      kind: 'Key',
      credentialAssertion: {
        credId: credentialId,
        clientData: toBase64Url(Buffer.from(clientData)),
        signature,
      },
    }
  }

  async lock(): Promise<void> {
    this.clearTtl()
    const h = this.handle
    this.handle = null
    if (h) {
      await h.close()
    }
  }

  private resetTtl(): void {
    this.clearTtl()
    this.ttlTimer = setTimeout(() => {
      this.handle?.terminate()
      this.handle = null
      this.ttlTimer = null
    }, this.ttlMs)
  }

  private clearTtl(): void {
    if (this.ttlTimer) {
      clearTimeout(this.ttlTimer)
      this.ttlTimer = null
    }
  }
}
