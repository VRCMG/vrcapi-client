import { login } from './Login'

describe('User API - Login Authorization', () => {
  test('ok - login', async () => {
    if (process.env.VRC_USERNAME == null || process.env.VRC_PASSWORD == null) {
      throw new Error('Test failed. Credentials do not exist in environment variables')
    }
    try {
      const response = await login(process.env.VRC_USERNAME, process.env.VRC_PASSWORD)
      expect(response.username).toBe('mnao305')
    } catch (error) {
      console.error(error.response.data)
      throw new Error(error.response.data)
    }
  })
  test('ng - login failure with incorrect password', async () => {
    let status = 0
    try {
      await login('mnao305', 'hoge')
    } catch (error) {
      status = error.response.status
    }
    expect(status).toBe(401)
  })
})
