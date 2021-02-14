export interface UnityPackages {
  id: string
  assetUrl: string
  assetUrlObject: {}
  assetVersion: number
  platform: string
  unitySortNumber: number
  unityVersion: string
  created_at: string
}

export interface WorldUnityPackages extends UnityPackages {
  pluginUrl: string
  pluginUrlObject: {}
}
