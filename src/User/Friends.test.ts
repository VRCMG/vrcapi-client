import { login } from './Login'
import { getFriends } from './Friends'

describe('User API - Current User Details', () => {
  test('ok - get current user details', async () => {
    if (process.env.VRC_USERNAME == null || process.env.VRC_PASSWORD == null) {
      throw new Error('Test failed. Credentials do not exist in environment variables')
    }
    await login(process.env.VRC_USERNAME, process.env.VRC_PASSWORD).catch(error => {
      throw new Error(error.response.data?.error.message ?? 'error')
    })

    const response = await getFriends({ offline: true }).catch(error => {
      console.error(error)
      throw new Error(error.response.data.error.message)
    })
    expect(typeof response[0].username).toBe('string')
  })
})
