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

export interface FriendStatus {
  isFriend: boolean
  outgoingRequest: boolean
  incomingRequest: boolean
}

/**
 * allows you to get the status of a friend.
 * https://vrchatapi.github.io/#/UserAPI/FriendStatus
 */
export const getFriendStatus = async (id: string): Promise<FriendStatus> => {
  const status = await get<FriendStatus>(`/user/${id}/friendStatus`)
  return status
}
