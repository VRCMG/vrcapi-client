import { CurrentUserObject } from 'types/User'
import { beforeLogin } from 'test/BeforeLogin'
import { CurrentUserTestData } from 'test/TestObjects'
import { logout } from './Logout'
import { getCurrentUser } from './UserInfo'

describe('User API - Current User Details', () => {
  test('ok - get current user details', async () => {
    await beforeLogin()

    const response = await getCurrentUser().catch(error => {
      console.error(error)
      throw new Error(error.response.data.error.message)
    })

    // type check
    let key: keyof CurrentUserObject
    for (key in CurrentUserTestData) {
      expect(typeof response[key]).toBe(typeof CurrentUserTestData[key])
    }

    await logout()
  })
})
