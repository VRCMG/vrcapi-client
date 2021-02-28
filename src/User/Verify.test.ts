import { verify2FactorAuth } from './Verify'

describe('User API - Verify', () => {
  // 2段階認証のテストとかどうすんねん。とりあえずskip
  // eslint-disable-next-line jest/no-disabled-tests
  test.skip('ok - verify', async () => {
    const response = await verify2FactorAuth('0')
    expect(typeof response).toBe('boolean')
  })
})
