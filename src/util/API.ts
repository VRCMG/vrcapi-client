import axios from 'axios'

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.baseURL = 'https://api.vrchat.cloud/api/1'
axios.defaults.withCredentials = true
axios.defaults.headers.common['Content-Type'] = 'application/json'

let cookie = ''

export const get = async <T>(path: string, params?: Record<string, unknown>): Promise<T> => {
  const res = await axios.get<T>(path, {
    headers: {
      Cookie: cookie
    },
    params
  })

  return res.data
}

export const getAuth = async <T>(path: string, apiKey: string, username: string, password: string): Promise<T> => {
  const res = await axios.get<T>(path, { params: { apiKey }, auth: { username, password } })
  cookie = res.headers['set-cookie']
  return res.data
}

export const post = async <T>(path: string, data: Record<string, unknown>): Promise<T> => {
  const res = await axios.post<T>(path, data, {
    headers: {
      Cookie: cookie
    }
  })
  return res.data
}

export const put = async <T>(path: string, data: Record<string, unknown> = {}): Promise<T> => {
  const res = await axios.put<T>(path, data, {
    headers: {
      Cookie: cookie
    }
  })
  return res.data
}
