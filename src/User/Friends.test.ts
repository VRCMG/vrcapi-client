import { getFriends } from './Friends'
import { beforeLogin } from 'test/BeforeLogin'

describe('User API - Current User Details', () => {
  test('ok - get current user details', async () => {
    await beforeLogin()

    const response = await getFriends({ offline: true }).catch(error => {
      console.error(error)
      throw new Error(error.response.data.error.message)
    })
    expect(typeof response[0].username).toBe('string')
  })
})
