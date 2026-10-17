/// <reference lib="webworker" />
import { createDispatcher, replyOverPort } from './dispatcher'

const scope = self as unknown as SharedWorkerGlobalScope
const dispatch = createDispatcher(() => scope.close())

scope.onconnect = (e: MessageEvent) => {
  const port = e.ports[0]
  port.onmessage = (msg: MessageEvent) => {
    void replyOverPort(dispatch, msg)
  }
  port.start()
}
