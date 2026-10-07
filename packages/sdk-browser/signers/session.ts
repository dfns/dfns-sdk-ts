import { Buffer } from 'buffer'

import { KeyAssertion, UserActionChallenge } from '@dfns/sdk'
import { fromBase64Url, toBase64Url } from '@dfns/sdk/utils'

import { IsolatedKeyHandle } from '../worker/handle'

// TODO: replace with `Omit<Extract<OidcLoginCredentialsBody, { credentialKind: 'SessionKey' }>, ...>`
// once the generated types in @dfns/sdk include OidcLoginCredentialsBody + the SessionKey discriminant.
export type SessionKeyAttestation = {
  credentialKind: 'SessionKey'
  credentialInfo: {
    credId: string
    clientData: string
    attestationData: string
  }
}

// TODO: replace with `NonNullable<OidcLoginResponse['credentialChallenge']>` once the generated
// OidcLoginResponse shape includes `credentialChallenge`.
type SessionKeyChallenge = { challenge: string }

let cachedHandle: IsolatedKeyHandle | null = null
let keepAliveTimer: ReturnType<typeof setInterval> | null = null

// Chrome idle-terminates SharedWorkers heuristically even with a connected port. A periodic no-op
// (status) ping registers as activity and keeps the worker alive long enough to cover a typical
// IdP access-token TTL. Not a guarantee — memory pressure or device sleep can still kill it.
const KEEP_ALIVE_INTERVAL_MS = 30_000

const spawnSharedWorker = (): IsolatedKeyHandle => {
  if (!cachedHandle) {
    const worker = new SharedWorker(new URL('../worker/sharedWorker', import.meta.url), { type: 'module' })
    cachedHandle = new IsolatedKeyHandle(worker)
    keepAliveTimer = setInterval(() => {
      void cachedHandle?.status().catch(() => undefined)
    }, KEEP_ALIVE_INTERVAL_MS)
    if (typeof window !== 'undefined') {
      window.addEventListener('pagehide', () => {
        if (keepAliveTimer) clearInterval(keepAliveTimer)
        keepAliveTimer = null
      })
    }
  }
  return cachedHandle
}

export class SessionKeySigner {
  private constructor(
    readonly credId: string,
    private readonly publicKey: string | undefined,
    private readonly handle: IsolatedKeyHandle
  ) {}

  static async create(): Promise<SessionKeySigner> {
    const handle = spawnSharedWorker()
    const { publicKey, credId } = await handle.create()
    return new SessionKeySigner(credId, publicKey, handle)
  }

  async attest(challenge: SessionKeyChallenge): Promise<SessionKeyAttestation> {
    if (!this.publicKey) {
      throw new Error('SessionKeySigner.attest() requires a freshly created signer; rehydrated signers cannot attest.')
    }
    const clientData = JSON.stringify({ type: 'key.create', challenge: challenge.challenge })
    const clientDataHash = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(clientData))
    const fingerprint = JSON.stringify({
      clientDataHash: Buffer.from(clientDataHash).toString('hex'),
      publicKey: this.publicKey,
    })
    const { signature: sigB64Url } = await this.handle.sign(fingerprint)
    const attestationData = JSON.stringify({
      algorithm: 'SHA256',
      publicKey: this.publicKey,
      signature: fromBase64Url(sigB64Url).toString('hex'),
    })
    return {
      credentialKind: 'SessionKey',
      credentialInfo: {
        credId: this.credId,
        clientData: toBase64Url(Buffer.from(clientData)),
        attestationData: toBase64Url(Buffer.from(attestationData)),
      },
    }
  }

  async sign(challenge: Pick<UserActionChallenge, 'challenge' | 'allowCredentials'>): Promise<KeyAssertion> {
    const allowedIds = challenge.allowCredentials?.key?.map((c) => c.id) ?? []
    if (!allowedIds.includes(this.credId)) {
      throw new Error(`${this.credId} does not match allowed key credentials: ${allowedIds.join(', ')}`)
    }
    const clientData = JSON.stringify({ challenge: challenge.challenge, type: 'key.get' })
    const { signature } = await this.handle.sign(clientData)
    return {
      kind: 'Key',
      credentialAssertion: {
        credId: this.credId,
        clientData: toBase64Url(Buffer.from(clientData)),
        signature,
      },
    }
  }

  static async fromExistingWorker(): Promise<SessionKeySigner | null> {
    const handle = spawnSharedWorker()
    const { hasKey, credId } = await handle.status()
    if (!hasKey || !credId) return null
    return new SessionKeySigner(credId, undefined, handle)
  }
}
