import { config } from './Config'

// https://vrchatapi.github.io/#/GettingStarted?id=client-api-key
const apiKey = 'JlE5Jldo5Jibnk5O5hTx6XVqsJu4WJ26'

describe('Config API', () => {
  test('ok - get config', async () => {
    const response = await config()
    expect(response.apiKey).toBe(apiKey)
  })
})
