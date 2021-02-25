import { LimitedUserObject } from 'src/types/User'
import { get } from 'src/util/API'

export const getFriends = async (params?: {offset?: number, n?: number, offline?: boolean}): Promise<LimitedUserObject[]> => {
  const friends = await get<LimitedUserObject[]>('/auth/user/friends', params)
  return friends
}
