import { ConfigObject } from 'src/types/Config'
import { get } from '../util/API'

export const config = async (): Promise<ConfigObject> => {
  const tmp = await get<ConfigObject>('/config')
  return tmp
}
