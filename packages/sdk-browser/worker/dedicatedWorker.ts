/// <reference lib="webworker" />
import { createDispatcher, replyOverPort } from './dispatcher'

const scope = self as unknown as DedicatedWorkerGlobalScope
const dispatch = createDispatcher(() => scope.close())

scope.onmessage = (e: MessageEvent) => {
  void replyOverPort(dispatch, e)
}
