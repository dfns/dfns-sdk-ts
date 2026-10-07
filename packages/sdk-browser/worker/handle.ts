import { IsolatedKeyRequest, IsolatedKeyResponse, MessageEnvelope } from './protocol'

type WorkerLike = Worker | SharedWorker

const targetPort = (worker: WorkerLike): MessagePort | Worker => {
  return 'port' in worker ? worker.port : worker
}

const postMessage = <T extends IsolatedKeyResponse>(worker: WorkerLike, msg: IsolatedKeyRequest): Promise<T> => {
  return new Promise((resolve, reject) => {
    const channel = new MessageChannel()
    channel.port1.onmessage = ({ data }: MessageEvent<MessageEnvelope<T>>) => {
      channel.port1.close()
      if ('error' in data) {
        const err = new Error(data.error.message)
        if (data.error.name) err.name = data.error.name
        reject(err)
      } else {
        resolve(data.result)
      }
    }
    targetPort(worker).postMessage(msg, [channel.port2])
  })
}

export class IsolatedKeyHandle {
  constructor(private readonly worker: WorkerLike) {}

  create(opts: { password?: string; salt?: Uint8Array<ArrayBuffer> } = {}) {
    return postMessage<Extract<IsolatedKeyResponse, { kind: 'created' }>>(this.worker, { kind: 'create', ...opts })
  }

  unlock(credId: string, wrappedKey: string, password: string, salt: Uint8Array<ArrayBuffer>) {
    return postMessage<Extract<IsolatedKeyResponse, { kind: 'unlocked' }>>(this.worker, {
      kind: 'unlock',
      credId,
      password,
      salt,
      wrappedKey,
    })
  }

  sign(message: string) {
    return postMessage<Extract<IsolatedKeyResponse, { kind: 'signed' }>>(this.worker, { kind: 'sign', message })
  }

  status() {
    return postMessage<Extract<IsolatedKeyResponse, { kind: 'status' }>>(this.worker, { kind: 'status' })
  }

  async close(): Promise<void> {
    try {
      await postMessage<Extract<IsolatedKeyResponse, { kind: 'closed' }>>(this.worker, { kind: 'close' })
    } catch {
      // worker may already be gone or racing self.close() — close() is best-effort
    }
  }

  terminate(): void {
    if ('port' in this.worker) throw new Error('terminate() is only supported for dedicated workers')
    this.worker.terminate()
  }
}
