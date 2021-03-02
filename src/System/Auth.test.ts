import { logout } from 'src/User/Logout'
import { beforeLogin } from 'test/BeforeLogin'
import { verifiesToken } from './Auth'

describe('Config API', () => {
  test('ok - verifies token', async () => {
    await beforeLogin()
    const response = await verifiesToken()
    expect(response.ok).toBe(true)
    expect(typeof response.token).toBe('string')

    await logout()
  })
})
