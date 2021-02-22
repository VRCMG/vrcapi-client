import axios from 'axios'

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.baseURL = 'https://api.vrchat.cloud/api/1'
axios.defaults.withCredentials = true
axios.defaults.headers.common['Content-Type'] = 'application/json'

export const get = async <T>(path: string): Promise<T> => {
  const parsed = await axios.get<T>(path)
  return parsed.data
}

export const getAuth = async <T>(path: string, apiKey: string, username: string, password: string): Promise<T> => {
  const res = await axios.get<T>(path, { params: { apiKey }, auth: { username, password } })
  return res.data
}
