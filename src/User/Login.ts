import { config } from 'src/System/Config'
import { CurrentUserObject } from 'src/types/User'
import { getAuth } from '../util/API'

/**
 * Login to your VRChat account
 * https://vrchatapi.github.io/#/Authorization
 */
export const login = async (username: string, password: string): Promise<CurrentUserObject> => {
  const c = await config()
  const user = await getAuth<CurrentUserObject>('/auth/user', c.apiKey, username, password)
  return user
}
