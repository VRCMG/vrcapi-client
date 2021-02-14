import { UnityPackages } from './UnityPackage'

type ReleaseStatus = 'public' | 'private' | 'hidden'

export interface Avatar {
  assetUrl: string
  assetUrlObject: {}
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
  unityPackageUrlObject: {}
  unityPackages: UnityPackages[]
  updated_at: string
  version: number // ? API docではstringとなっていたが。
}
