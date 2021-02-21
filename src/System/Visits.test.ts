import { visits } from './Visits'

describe('Config API', () => {
  test('ok - get visits', async () => {
    const response = await visits()
    expect(response).toBeGreaterThanOrEqual(0)
  })
})
