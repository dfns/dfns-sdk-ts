import { Buffer } from 'buffer'

import { CredentialSigner, KeyAssertion } from '@dfns/sdk'
import { CreateCredentialBody } from '@dfns/sdk/types/auth'
import { fromBase64Url, toBase64Url } from '@dfns/sdk/utils'

import { IsolatedKeyHandle } from '../worker/handle'
import { namedError } from '../worker/protocol'

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
      credId: string
      wrappedKey: string
    },
    private readonly ttlMs: number = DEFAULT_TTL_MS
  ) {}

  static async create(
    username: string,
    options: { challenge: string },
    password: string
  ): Promise<PasswordProtectedKeyAttestation> {
    const handle = spawnWorker()
    try {
      const salt = await deriveSaltFromUsername(username)
      const { publicKey, credId, wrappedKey } = await handle.create({ password, salt })
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
      await handle.unlock(this.keyData.credId, this.keyData.wrappedKey, password, salt)
      if (this.handle) {
        // Another unlock won the race during our handle.unlock() await. Terminate our worker
        // rather than orphan it — overwriting this.handle would drop the winner's reference and
        // leave a decrypted-key worker with no TTL and nothing holding it.
        handle.terminate()
        return
      }
      this.handle = handle
      this.resetTtl()
    } catch (err) {
      handle.terminate()
      throw err
    }
  }

  async sign(options: {
    challenge: string
    allowCredentials?: { passwordProtectedKey?: { id: string }[] }
  }): Promise<KeyAssertion> {
    if (!this.handle) {
      throw namedError('InvalidOperation', 'PasswordProtectedKey is locked; call unlock(password) first')
    }

    const { credId } = this.keyData
    const allowedIds = options.allowCredentials?.passwordProtectedKey?.map((c) => c.id) ?? []
    if (!allowedIds.includes(credId)) {
      throw namedError(
        'InvalidArgument',
        `${credId} does not match allowed password-protected credentials: ${allowedIds.join(', ')}`
      )
    }

    const clientData = JSON.stringify({ challenge: options.challenge, type: 'key.get' })

    this.resetTtl()
    let signature: string
    try {
      ;({ signature } = await this.handle.sign(clientData))
    } catch (err) {
      if (err instanceof Error && (err.name === 'WorkerCrashed' || err.name === 'DispatchFailed')) {
        this.clearTtl()
        this.handle.terminate()
        this.handle = null
      }
      throw err
    }

    return {
      kind: 'Key',
      credentialAssertion: {
        credId,
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

export type PromptResult = {
  password: string
}

export type PromptCallback = (opts: { lastError?: Error }) => Promise<PromptResult>

export class PasswordProtectedKeyRing implements CredentialSigner<KeyAssertion> {
  private signers: PasswordProtectedKeySigner[] = []
  private signerIds: readonly string[] = []
  private current: PasswordProtectedKeySigner | null = null

  constructor(
    private readonly username: string,
    private readonly prompt: PromptCallback,
    private readonly ttlMs?: number
  ) {}

  async sign(options: {
    challenge: string
    allowCredentials?: { passwordProtectedKey?: { id: string; encryptedPrivateKey: string }[] }
  }): Promise<KeyAssertion> {
    const ppks = options.allowCredentials?.passwordProtectedKey ?? []
    if (ppks.length === 0) {
      throw namedError('InvalidArgument', 'challenge has no password-protected credentials')
    }

    const ids = ppks.map((p) => p.id)
    if (!sameIds(this.signerIds, ids)) {
      await this.reset()
      this.signers = ppks.map(
        (p) =>
          new PasswordProtectedKeySigner(
            { credId: p.id, username: this.username, wrappedKey: p.encryptedPrivateKey },
            this.ttlMs
          )
      )
      this.signerIds = ids
    }

    // The current signer's handle may have been terminated by its own TTL timer. Drop the stale
    // reference so the prompt loop re-unlocks, rather than calling sign() on a locked handle.
    if (this.current && !this.current.isUnlocked()) {
      this.current = null
    }

    let lastError: Error | undefined
    while (!this.current) {
      const { password } = await this.prompt({ lastError })
      lastError = undefined
      for (const signer of this.signers) {
        try {
          await signer.unlock(password)
          this.current = signer
          break
        } catch (err) {
          if (err instanceof Error && err.name === 'UnlockFailed') {
            lastError = err
            continue
          }
          throw err
        }
      }
    }

    return this.current.sign(options)
  }

  async reset(): Promise<void> {
    const c = this.current
    this.current = null
    this.signers = []
    this.signerIds = []
    if (c) await c.lock()
  }
}

const sameIds = (a: readonly string[], b: readonly string[]): boolean =>
  a.length === b.length && a.every((id, i) => id === b[i])
