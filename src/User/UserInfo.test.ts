import { login } from './Login'
import { getUserInfo } from './UserInfo'

describe('User API - Current User Details', () => {
  test('ok - get current user details', async () => {
    if (process.env.VRC_USERNAME == null || process.env.VRC_PASSWORD == null) {
      throw new Error('Test failed. Credentials do not exist in environment variables')
    }
    await login(process.env.VRC_USERNAME, process.env.VRC_PASSWORD).catch(error => {
      throw new Error(error.response.data?.error.message ?? 'error')
    })

    const response = await getUserInfo().catch(error => {
      console.error(error)
      throw new Error(error.response.data.error.message)
    })
    expect(response.username).toBe(process.env.VRC_USERNAME)
  })
})
