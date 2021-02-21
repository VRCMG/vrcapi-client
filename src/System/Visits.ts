import { get } from '../util/API'

/**
 * get the number of currently online users.
 * https://vrchatapi.github.io/#/SystemAPI/Visits
 */
export const visits = async (): Promise<number> => {
  const userNum = await get<number>('/visits')
  return userNum
}
