import { CurrentUserObject } from 'types/User'
import { get } from '../util/API'

/**
 * get most of the details of the user
 * https://vrchatapi.github.io/#/UserAPI/CurrentUserDetails
 */
export const getCurrentUser = async (): Promise<CurrentUserObject> => {
  const user = await get<CurrentUserObject>('/auth/user')
  return user
}
