import { IsolatedKeyRequest, IsolatedKeyResponse, MessageEnvelope, namedError } from './protocol'

type WorkerLike = Worker | SharedWorker

const DEFAULT_TIMEOUT_MS = 30_000

const targetPort = (worker: WorkerLike): MessagePort | Worker => {
  return 'port' in worker ? worker.port : worker
}

export class IsolatedKeyHandle {
  // In-flight requests' reject functions. Populated per postMessage, drained by failAll on crash.
  private readonly inFlight = new Set<(err: Error) => void>()
  // Once a crash is observed, future requests short-circuit instead of queueing onto a dead port.
  private deadReason: Error | null = null

  constructor(private readonly worker: WorkerLike, private readonly timeoutMs: number = DEFAULT_TIMEOUT_MS) {
    // Dedicated Workers fire .onerror reliably on uncaught exceptions. SharedWorker's .onerror is
    // spottier across browsers but still worth attaching — on Chrome/Safari it fires on worker-side
    // uncaught errors. The per-request timeout is the backstop for silent kills.
    this.worker.onerror = (event) => {
      const message = (event as ErrorEvent).message || 'worker crashed'
      this.failAll(namedError('WorkerCrashed', message))
    }
  }

  create(opts: { password?: string; salt?: Uint8Array<ArrayBuffer> } = {}) {
    return this.postMessage<Extract<IsolatedKeyResponse, { kind: 'created' }>>({ kind: 'create', ...opts })
  }

  unlock(credId: string, wrappedKey: string, password: string, salt: Uint8Array<ArrayBuffer>) {
    return this.postMessage<Extract<IsolatedKeyResponse, { kind: 'unlocked' }>>({
      kind: 'unlock',
      credId,
      password,
      salt,
      wrappedKey,
    })
  }

  sign(message: string) {
    return this.postMessage<Extract<IsolatedKeyResponse, { kind: 'signed' }>>({ kind: 'sign', message })
  }

  status() {
    return this.postMessage<Extract<IsolatedKeyResponse, { kind: 'status' }>>({ kind: 'status' })
  }

  async close(): Promise<void> {
    try {
      await this.postMessage<Extract<IsolatedKeyResponse, { kind: 'closed' }>>({ kind: 'close' })
    } catch {
      // worker may already be gone or racing self.close() — close() is best-effort for the ack
    } finally {
      // Dedicated workers hold the key material in a tab-local process; a timeout or ignored ack
      // above would leave that process alive with the unlocked key. terminate() is a hard kill
      // and safe to re-call.
      if (!('port' in this.worker)) {
        this.worker.terminate()
        this.failAll(namedError('WorkerCrashed', 'worker terminated after close'))
      }
    }
  }

  terminate(): void {
    if ('port' in this.worker) {
      throw namedError('InvalidOperation', 'terminate() is only supported for dedicated workers')
    }
    this.worker.terminate()
    // A manual terminate kills everything in-flight too; drain them so callers see a WorkerCrashed
    // rejection rather than a hung promise.
    this.failAll(namedError('WorkerCrashed', 'worker terminated'))
  }

  private failAll(err: Error): void {
    // Preserve the ORIGINAL crash reason; a later cascading failure must not overwrite it.
    if (!this.deadReason) this.deadReason = err
    for (const cleanup of this.inFlight) cleanup(err)
    this.inFlight.clear()
  }

  private postMessage<T extends IsolatedKeyResponse>(msg: IsolatedKeyRequest): Promise<T> {
    if (this.deadReason) return Promise.reject(this.deadReason)
    return new Promise((resolve, reject) => {
      const channel = new MessageChannel()
      let settled = false

      const settle = (fn: () => void) => {
        if (settled) return
        settled = true
        clearTimeout(timer)
        this.inFlight.delete(crashCleanup)
        channel.port1.close()
        fn()
      }

      const crashCleanup = (err: Error) => settle(() => reject(err))

      const timer = setTimeout(() => {
        settle(() => {
          // Treat a dispatch timeout as evidence the worker is dead (silent kill, hung on crypto,
          // etc). Poison the handle so future requests fail immediately instead of each waiting out
          // another full timeout, and reject every other in-flight request on the same dead port.
          const err = namedError('DispatchFailed', `worker did not respond within ${this.timeoutMs}ms`)
          this.failAll(err)
          reject(err)
        })
      }, this.timeoutMs)

      this.inFlight.add(crashCleanup)

      channel.port1.onmessage = ({ data }: MessageEvent<MessageEnvelope<T>>) => {
        settle(() => {
          if ('error' in data) {
            const err = new Error(data.error.message)
            if (data.error.name) err.name = data.error.name
            reject(err)
          } else {
            resolve(data.result)
          }
        })
      }

      channel.port1.onmessageerror = () => {
        settle(() => reject(namedError('DispatchFailed', 'worker response could not be deserialized')))
      }

      targetPort(this.worker).postMessage(msg, [channel.port2])
    })
  }
}
