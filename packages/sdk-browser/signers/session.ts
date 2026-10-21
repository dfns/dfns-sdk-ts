import { Buffer } from 'buffer'

import { CredentialSigner, KeyAssertion } from '@dfns/sdk'
import { OidcLoginCredentialsBody } from '@dfns/sdk/types/auth'
import { fromBase64Url, toBase64Url } from '@dfns/sdk/utils'

import { IsolatedKeyHandle } from '../worker/handle'
import { namedError } from '../worker/protocol'

export type SessionKeyAttestation = Omit<
  Extract<OidcLoginCredentialsBody, { credentialKind: 'SessionKey' }>,
  'challengeIdentifier' | 'credentialName'
>

let cachedHandle: IsolatedKeyHandle | null = null
let keepAliveTimer: ReturnType<typeof setInterval> | null = null

// Chrome idle-terminates SharedWorkers heuristically even with a connected port. A periodic no-op
// (status) ping registers as activity and keeps the worker alive long enough to cover a typical
// IdP access-token TTL. Not a guarantee — memory pressure or device sleep can still kill it.
const KEEP_ALIVE_INTERVAL_MS = 30_000

const spawnSharedWorker = (): IsolatedKeyHandle => {
  if (!cachedHandle) {
    const worker = new SharedWorker(new URL('../worker/sharedWorker', import.meta.url), { type: 'module' })
    const handle = new IsolatedKeyHandle(worker)
    cachedHandle = handle
    const myTimer = setInterval(() => {
      void handle.status().catch(() => {
        // Worker is dead (crash, idle-kill, dispatch timeout). Always stop OUR timer so we don't
        // leak intervals, but only null the module-global cache/timer if they still identify this
        // pair — a concurrent destroy()+create() may have already swapped in a newer handle+timer.
        clearInterval(myTimer)
        if (cachedHandle === handle) cachedHandle = null
        if (keepAliveTimer === myTimer) keepAliveTimer = null
      })
    }, KEEP_ALIVE_INTERVAL_MS)
    keepAliveTimer = myTimer
  }
  return cachedHandle
}

export class SessionKeySigner implements CredentialSigner<KeyAssertion> {
  private constructor(private readonly handle: IsolatedKeyHandle, private readonly publicKey?: string) {}

  static async create(): Promise<{ signer: SessionKeySigner; credId: string }> {
    const handle = spawnSharedWorker()
    const { publicKey, credId } = await handle.create()
    return { signer: new SessionKeySigner(handle, publicKey), credId }
  }

  async attest(options: { challenge: string }): Promise<SessionKeyAttestation> {
    if (!this.publicKey) {
      throw namedError(
        'InvalidOperation',
        'SessionKeySigner.attest() requires a freshly created signer; rehydrated signers cannot attest.'
      )
    }
    const clientData = JSON.stringify({ type: 'key.create', challenge: options.challenge })
    const clientDataHash = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(clientData))
    const fingerprint = JSON.stringify({
      clientDataHash: Buffer.from(clientDataHash).toString('hex'),
      publicKey: this.publicKey,
    })
    const { credId, signature: sigB64Url } = await this.handle.sign(fingerprint)
    const attestationData = JSON.stringify({
      algorithm: 'SHA256',
      publicKey: this.publicKey,
      signature: fromBase64Url(sigB64Url).toString('hex'),
    })
    return {
      credentialKind: 'SessionKey',
      credentialInfo: {
        credId,
        clientData: toBase64Url(Buffer.from(clientData)),
        attestationData: toBase64Url(Buffer.from(attestationData)),
      },
    }
  }

  async sign(options: { challenge: string; allowCredentials?: { key?: { id: string }[] } }): Promise<KeyAssertion> {
    const clientData = JSON.stringify({ challenge: options.challenge, type: 'key.get' })
    const { credId, signature } = await this.handle.sign(clientData)
    const allowedIds = options.allowCredentials?.key?.map((c) => c.id) ?? []
    if (!allowedIds.includes(credId)) {
      throw namedError('InvalidArgument', `${credId} does not match allowed key credentials: ${allowedIds.join(', ')}`)
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

  static async fromExistingWorker(): Promise<SessionKeySigner | null> {
    const handle = spawnSharedWorker()
    const { hasKey } = await handle.status()
    if (!hasKey) return null
    return new SessionKeySigner(handle)
  }

  // SharedWorker persists across tabs and does not auto-terminate; on logout we need to flush
  // its key material. Closes the worker and clears the module-level cache so a subsequent login
  // spawns a fresh one.
  static async destroy(): Promise<void> {
    if (keepAliveTimer) {
      clearInterval(keepAliveTimer)
      keepAliveTimer = null
    }
    const h = cachedHandle
    cachedHandle = null
    if (h) await h.close()
  }
}
