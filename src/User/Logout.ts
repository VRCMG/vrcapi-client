import { put } from '../util/API'

export interface logoutMsg {'success': {'message': 'Ok!', 'status_code': 200}}

export const logout = async (): Promise<logoutMsg> => {
  const msg = await put<logoutMsg>('/logout')
  return msg
}
