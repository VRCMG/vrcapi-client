import { LimitedUserObject } from 'types/User'
import { get } from '../util/API'

/**
 * get information about your friends
 * https://vrchatapi.github.io/#/UserAPI/Friends
 */
export const getFriends = async (params?: {offset?: number, n?: number, offline?: boolean}): Promise<LimitedUserObject[]> => {
  const friends = await get<LimitedUserObject[]>('/auth/user/friends', params)
  return friends
}

/**
 * get information about your favorite friends
 * https://vrchatapi.github.io/#/UserAPI/Friends
 */
export const getFavFriends = async (): Promise<LimitedUserObject[]> => {
  const friends = await get<LimitedUserObject[]>('/auth/user/friends/favorite')
  return friends
}
