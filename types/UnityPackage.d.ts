export interface UnityPackagesObject {
  id: string
  assetUrl: string
  assetUrlObject: unknown
  assetVersion: number
  platform: string
  unitySortNumber: number
  unityVersion: string
  created_at: string
}

export interface WorldUnityPackagesObject extends UnityPackagesObject {
  pluginUrl: string
  pluginUrlObject: unknown
}
