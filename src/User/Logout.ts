import { put } from '../util/API'

export interface logoutMsg {'success': {'message': 'Ok!', 'status_code': 200}}

/***
 * invalidates auth cookie.
 * https://vrchatapi.github.io/#/UserAPI/Logout
 */
export const logout = async (): Promise<logoutMsg> => {
  const msg = await put<logoutMsg>('/logout')
  return msg
}
