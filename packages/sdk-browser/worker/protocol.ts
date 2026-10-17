export type IsolatedKeyRequest =
  | { kind: 'create'; password?: string; salt?: Uint8Array<ArrayBuffer> }
  | { kind: 'unlock'; credId: string; password: string; salt: Uint8Array<ArrayBuffer>; wrappedKey: string }
  | { kind: 'sign'; message: string }
  | { kind: 'close' }
  | { kind: 'status' }

export type IsolatedKeyResponse =
  | { kind: 'created'; publicKey: string; credId: string; wrappedKey?: string }
  | { kind: 'unlocked' }
  | { kind: 'signed'; credId: string; signature: string }
  | { kind: 'closed' }
  | { kind: 'status'; hasKey: boolean; credId?: string }

export type MessageError = {
  name?: string
  message: string
}

export type MessageEnvelope<T> = { result: T } | { error: MessageError }

// Builds an Error whose `.name` is the given discriminator. Callers match on `.name` to classify
// failure categories (`UnlockFailed`, `InvalidArgument`, `InvalidOperation`, `WorkerCrashed`, `DispatchFailed`).
export const namedError = (name: string, message: string): Error => {
  const e = new Error(message)
  e.name = name
  return e
}
