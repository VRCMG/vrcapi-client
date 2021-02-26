import { beforeLogin } from 'test/BeforeLogin'
import { getUserInfo } from './UserInfo'

describe('User API - Current User Details', () => {
  test('ok - get current user details', async () => {
    await beforeLogin()

    const response = await getUserInfo().catch(error => {
      console.error(error)
      throw new Error(error.response.data.error.message)
    })
    expect(response.username).toBe(process.env.VRC_USERNAME)
  })
})
