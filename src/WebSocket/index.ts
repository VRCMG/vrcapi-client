import { verifiesToken } from '../System/Auth'
import Ws from 'ws'

/**
 * Websocket API initialization function
 * https://vrchatapi.github.io/#/WebsocketAPI/About
 */
export const webSocketAPI = async (): Promise<Ws> => {
  const res = await verifiesToken()
  const client = new Ws(`wss://pipeline.vrchat.cloud/?authToken=${res.token}`)
  client.on('error', (err) => {
    throw err
  })

  return client
}
