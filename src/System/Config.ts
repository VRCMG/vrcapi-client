import { ConfigObject } from 'types/Config'
import { get } from '../util/API'

/**
 * get the configuration that the clients needs to work properly
 * https://vrchatapi.github.io/#/SystemAPI/Config
 */
export const getConfig = async (): Promise<ConfigObject> => {
  const config = await get<ConfigObject>('/config')
  return config
}
