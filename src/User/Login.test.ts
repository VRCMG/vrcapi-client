import { CurrentUserObject } from 'src/types/User'
import { CurrentUserTestData } from 'test/TestObjects'
import { login } from './Login'

describe('User API - Login Authorization', () => {
  test('ok - login', async () => {
    if (process.env.VRC_USERNAME == null || process.env.VRC_PASSWORD == null) {
      throw new Error('Test failed. Credentials do not exist in environment variables')
    }
    const response = await login(process.env.VRC_USERNAME, process.env.VRC_PASSWORD).catch(error => {
      throw new Error(error.response.data.error.message)
    })

    // type check
    let key: keyof CurrentUserObject
    for (key in CurrentUserTestData) {
      expect(typeof response[key]).toBe(typeof CurrentUserTestData[key])
    }
  })
  test('ng - login failure with incorrect password', async () => {
    if (process.env.VRC_USERNAME == null) {
      throw new Error('Test failed. Credentials do not exist in environment variables')
    }
    let status = 0
    try {
      await login(process.env.VRC_USERNAME, 'hoge')
    } catch (error) {
      status = error.response.status
    }
    expect(status).toBe(401)
  })
})
