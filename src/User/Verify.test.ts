import { verify } from './Verify'

describe('User API - Verify', () => {
  // 2段階認証のテストとかどうすんねん。とりあえずskip
  // eslint-disable-next-line jest/no-disabled-tests
  test.skip('ok - verify', async () => {
    const response = await verify('0')
    expect(typeof response).toBe('boolean')
  })
})
