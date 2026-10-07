import { Buffer } from 'buffer'

import { toBase64Url } from '@dfns/sdk/utils'

import { IsolatedKey } from './isolatedKey'
import { IsolatedKeyRequest, IsolatedKeyResponse, MessageEnvelope, MessageError } from './protocol'

const toMessageError = (e: unknown): MessageError =>
  e instanceof Error ? { name: e.name, message: e.message } : { message: String(e) }

export const createDispatcher = (onClose: () => void) => {
  let isolated: IsolatedKey | null = null

  return async (req: IsolatedKeyRequest): Promise<IsolatedKeyResponse> => {
    switch (req.kind) {
      case 'create': {
        const {
          isolated: made,
          publicKey,
          credId,
          wrappedKey,
        } = await IsolatedKey.create({
          password: req.password,
          salt: req.salt,
        })
        isolated = made
        return { kind: 'created', publicKey, credId, wrappedKey }
      }
      case 'unlock': {
        isolated = await IsolatedKey.fromWrapped(req.credId, req.wrappedKey, req.password, req.salt)
        return { kind: 'unlocked' }
      }
      case 'sign': {
        if (!isolated) throw new Error('IsolatedKey not initialized')
        const sig = await isolated.sign(req.message)
        return { kind: 'signed', signature: toBase64Url(Buffer.from(sig)) }
      }
      case 'status': {
        return isolated ? { kind: 'status', hasKey: true, credId: isolated.credId } : { kind: 'status', hasKey: false }
      }
      case 'close': {
        isolated = null
        onClose()
        return { kind: 'closed' }
      }
    }
  }
}

export const replyOverPort = async (
  handle: (req: IsolatedKeyRequest) => Promise<IsolatedKeyResponse>,
  event: MessageEvent
) => {
  const reply = (envelope: MessageEnvelope<IsolatedKeyResponse>) => event.ports[0]?.postMessage(envelope)
  try {
    reply({ result: await handle(event.data) })
  } catch (error) {
    reply({ error: toMessageError(error) })
  }
}
