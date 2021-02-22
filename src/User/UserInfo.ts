import { CurrentUserObject } from 'src/types/User'
import { get } from 'src/util/API'

/**
 * get most of the details of the user
 * https://vrchatapi.github.io/#/UserAPI/CurrentUserDetails
 */
export const getUserInfo = async (): Promise<CurrentUserObject> => {
  const user = await get<CurrentUserObject>('/auth/user')
  return user
}
