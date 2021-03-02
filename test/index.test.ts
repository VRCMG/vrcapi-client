/**
 * このテストはdistにビルドされたファイルをテストしています。
 */
import * as vrc from '../dist/index'

describe('test', () => {
  it('login', async () => {
    if (process.env.VRC_USERNAME == null || process.env.VRC_PASSWORD == null) {
      throw new Error('Test failed. Credentials do not exist in environment variables')
    }
    const response = await vrc.user.login(process.env.VRC_USERNAME, process.env.VRC_PASSWORD)

    expect(typeof response.username).toBe('string')
  })
  it('get friends', async () => {
    const response = await vrc.user.getFriends()

    expect(Array.isArray(response)).toBe(true)
  })
  it('get world', async () => {
    const response = await vrc.world.getById('wrld_4432ea9b-729c-46e3-8eaf-846aa0a37fdd')
    expect(typeof response.name).toBe('string')
  })

  it('logout', async () => {
    const res = await vrc.user.logout()
    expect(res.success.status_code).toBe(200)
  })
})
