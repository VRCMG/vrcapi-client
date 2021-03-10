import { FriendStatus, getFavFriends, getFriends, getFriendStatus } from './Friends'
import { beforeLogin } from 'test/BeforeLogin'
import { LimitedUserTestData } from 'test/TestObjects'
import { LimitedUserObject } from 'types/User'
import { logout } from './Logout'

describe('User API - friends', () => {
  test('ok - get offline friends', async () => {
    await beforeLogin()

    const response = await getFriends({ offline: true }).catch(error => {
      console.error(error)
      throw new Error(error.response.data.error.message)
    })

    // type check
    let key: keyof LimitedUserObject
    for (key in LimitedUserTestData) {
      if (LimitedUserTestData[key] === 'undefined' && response[0][key] === undefined) {
        continue
      }
      expect(typeof response[0][key]).toBe(typeof LimitedUserTestData[key])
    }

    await logout()
  })
  test('ok - get favorite friends', async () => {
    await beforeLogin()

    const response = await getFavFriends().catch(error => {
      console.error(error)
      throw new Error(error.response.data.error.message)
    })

    // type check
    let key: keyof LimitedUserObject
    for (key in LimitedUserTestData) {
      if (LimitedUserTestData[key] === 'undefined' && response[0][key] === undefined) {
        continue
      }
      expect(typeof response[0][key]).toBe(typeof LimitedUserTestData[key])
    }

    await logout()
  })
  test('ok - get friend status', async () => {
    await beforeLogin()
    const res = await getFriendStatus('usr_0f7f3968-1638-479a-9be3-6f596d8955a2')

    // type check
    let key: keyof FriendStatus
    for (key in res) {
      expect(typeof res[key]).toBe('boolean')
    }
    await logout()
  })
})
