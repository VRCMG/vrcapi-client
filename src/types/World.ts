import { WorldUnityPackagesObject } from './UnityPackage'

type ReleaseStatus = 'public' | 'private' | 'hidden'
type Instance = [string, number]
type InstanceType = 'hidden' | 'friends' | 'public'

interface Platforms {
  standalonewindows: number
  android: number
}

export interface WorldObject {
  assetUrl: string
  assetUrlObject: unknown
  authorId: string
  authorName: string
  capacity: number // ? API docではstringになってる
  created_at: string
  description: string
  favorites: number
  featured: boolean
  heat: number
  id: string
  imageUrl: string
  instances: Instance[]
  labsPublicationDate: string
  name: string
  namespace: string
  occupants: number
  organization: string
  pluginUrl?: string
  pluginUrlObject: unknown
  popularity: number
  previewYoutubeId: null | unknown // ? 不明。API docに存在していない
  privateOccupants: number // ? API docに存在していない
  publicOccupants: number
  publicationDate: string
  releaseStatus: ReleaseStatus
  tags: string[]
  thumbnailImageUrl: string
  unityPackageUrl?: string
  unityPackageUrlObject: unknown
  unityPackages: WorldUnityPackagesObject[]
  updated_at: string
  version: number
  visits: number
}

export interface LimitedWorldObject {
  authorId: string
  authorName: string
  capacity: number
  created_at: string
  favorites: number
  heat: number
  id: string
  imageUrl: string
  labsPublicationDate: string
  name: string
  occupants: number
  organization: string
  popularity: number
  publicationDate: string
  releaseStatus: ReleaseStatus
  tags: string[]
  thumbnailImageUrl: string
  unityPackages: WorldUnityPackagesObject[]
  updated_at: string
  visits: number
}

export interface LimitedFavoriteWorldObject extends LimitedWorldObject {
  favoriteId?: string
}

export interface InstanceObject {
  active: boolean
  canRequestInvite: boolean
  capacity: number
  clientNumber: string
  full: boolean
  id: string
  instanceId: string
  location: string
  n_users: number
  name: string
  ownerId: string
  permanent: boolean
  photonRegion: string
  platforms: Platforms
  shortName: string
  tags: string[]
  type: InstanceType
  worldId: string
}
