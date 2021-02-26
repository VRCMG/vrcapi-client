import { login } from 'src/User/Login'

export const beforeLogin = async (): Promise<void> => {
  if (process.env.VRC_USERNAME == null || process.env.VRC_PASSWORD == null) {
    throw new Error('Test failed. Credentials do not exist in environment variables')
  }
  await login(process.env.VRC_USERNAME, process.env.VRC_PASSWORD).catch(error => {
    throw new Error(error.response.data?.error.message ?? 'error')
  })
}
