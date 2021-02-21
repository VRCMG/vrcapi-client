import axios from 'axios'

const BASE_URL = 'https://api.vrchat.cloud/api/1'

export const get = async <T>(path: string): Promise<T> => {
  const parsed = await axios.get<T>(BASE_URL + path)
  return parsed.data
}
