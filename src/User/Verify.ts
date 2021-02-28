import { post } from '../util/API'

/**
 * Finishes the login sequence for accounts with 2FactorAuth
 * https://vrchatapi.github.io/#/UserAPI/Verify
 */
export const verify2FactorAuth = async (code: string): Promise<boolean> => {
  const verified = await post<boolean>('/auth/twofactorauth/totp/verify', { code })
  return verified
}
