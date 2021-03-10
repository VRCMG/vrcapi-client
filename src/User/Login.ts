import { getConfig } from '../System/Config'
import { CurrentUserObject } from 'types/User'
import { getAuth } from '../util/API'

/**
 * If two-factor authentication is enabled, this is returned instead of `CurrentUserObject`.
 */
export interface twoFactor {
  requiresTwoFactorAuth: ['totp', 'otp']
}

/**
 * Login to your VRChat account
 * https://vrchatapi.github.io/#/Authorization
 */
export const login = async (username: string, password: string): Promise<CurrentUserObject | twoFactor> => {
  const c = await getConfig()
  const user = await getAuth<CurrentUserObject | twoFactor>('/auth/user', c.apiKey, username, password)
  return user
}
