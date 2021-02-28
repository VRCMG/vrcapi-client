import { WorldObject } from 'src/types/World'
import { get } from '../util/API'

/**
 * get information about a world
 * https://vrchatapi.github.io/#/WorldAPI/GetWorld
 */
export const getWorld = async (id: string): Promise<WorldObject> => {
  const world = await get<WorldObject>(`/worlds/${id}`)
  return world
}
