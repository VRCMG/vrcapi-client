import { WorldObject } from 'src/types/World'
import { beforeLogin } from 'test/BeforeLogin'
import { WorldObjectTestData } from 'test/TestObjects'
import { getById } from './World'

describe('World API', () => {
  test('ok - get world', async () => {
    await beforeLogin()
    const response = await getById('wrld_4432ea9b-729c-46e3-8eaf-846aa0a37fdd')

    // type check
    let key: keyof WorldObject
    for (key in WorldObjectTestData) {
      if (WorldObjectTestData[key] === 'unknown' || (WorldObjectTestData[key] === 'undefined' && response[key] === undefined)) {
        continue
      }
      expect(typeof response[key]).toBe(typeof WorldObjectTestData[key])
    }
  })
})
