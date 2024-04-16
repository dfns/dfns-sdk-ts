export const postAsync = <Req, Res>(worker: Worker, message: Req): Promise<Res> => {
  return new Promise((resolve, reject) => {
    const channel = new MessageChannel()
    channel.port1.onmessage = ({ data }) => {
      channel.port1.close()

      if (data.error) {
        reject(data.error)
      } else {
        resolve(data.result)
      }
    }

    worker.postMessage(message, [channel.port2])
  })
}
