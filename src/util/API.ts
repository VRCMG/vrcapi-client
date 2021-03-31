import axios from 'axios'

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.baseURL = 'https://api.vrchat.cloud/api/1'
axios.defaults.withCredentials = true
axios.defaults.headers.common['Content-Type'] = 'application/json'

export const get = async <T>(path: string, params?: Record<string, unknown>): Promise<T> => {
  const res = await axios.get<T>(path, {
    params
  })

  return res.data
}

export const getAuth = async <T>(path: string, apiKey: string, username: string, password: string): Promise<T> => {
  const res = await axios.get<T>(path, { params: { apiKey }, auth: { username, password } })
  axios.defaults.headers.common.Cookie = res.headers['set-cookie']
  return res.data
}

export const post = async <T>(path: string, data: Record<string, unknown>): Promise<T> => {
  const res = await axios.post<T>(path, data)
  return res.data
}

export const put = async <T>(path: string, data: Record<string, unknown> = {}): Promise<T> => {
  const res = await axios.put<T>(path, data)
  return res.data
}
