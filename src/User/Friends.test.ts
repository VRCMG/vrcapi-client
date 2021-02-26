import { getFriends } from './Friends'
import { beforeLogin } from 'test/BeforeLogin'
import { LimitedUserTestData } from 'test/TestObjects'
import { LimitedUserObject } from 'src/types/User'

describe('User API - Current User Details', () => {
  test('ok - get current user details', async () => {
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
  })
})
