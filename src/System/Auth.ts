import { get } from '../util/API'

export interface token {ok: boolean, token: string}

/**
 * verifies whether api token is valid.
 * https://vrchatapi.github.io/#/SystemAPI/Auth
 */
export const verifiesToken = async (): Promise<token> => {
  const auth = await get<token>('/auth')
  return auth
}
