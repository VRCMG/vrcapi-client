import { UnityPackagesObject } from './UnityPackage'

type ReleaseStatus = 'public' | 'private' | 'hidden'

export interface AvatarObject {
  assetUrl: string
  assetUrlObject: unknown
  authorId: string
  authorName: string
  created_at: string
  description: string
  featured: boolean
  id: string
  imageUrl: string
  name: string
  releaseStatus: ReleaseStatus
  tags: string[]
  thumbnailImageUrl: string
  unityPackageUrl: string
  unityPackageUrlObject: unknown
  unityPackages: UnityPackagesObject[]
  updated_at: string
  version: number // ? API docではstringとなっていたが。
}
