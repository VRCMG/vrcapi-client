import { getVisits } from './Visits'

describe('Config API', () => {
  test('ok - get visits', async () => {
    const response = await getVisits()
    expect(response).toBeGreaterThanOrEqual(0)
  })
})
