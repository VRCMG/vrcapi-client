import { beforeLogin } from 'test/BeforeLogin'
import { logout } from './Logout'
import { getCurrentUser } from './UserInfo'

describe('User API - logout', () => {
  test('ok - logout', async () => {
    await beforeLogin()

    const res = await logout().catch(err => {
      console.error(err)
      throw new Error(err.response.data.error.message)
    })

    expect(res.success.message).toBe('Ok!')
    expect(res.success.status_code).toBe(200)

    // logout check
    await getCurrentUser().catch(error => {
      expect(error.response.status).toBe(401)
    })
  })
})
