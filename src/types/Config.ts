interface Announcements {
  name: string
  text: string
}

interface Events {
  distanceClose: number
  distanceFactor: number
  distanceFar: number
  groupDistance: number
  maximumBunchSize: number
  notVisibleFactor: number
  playerOrderBucketSize: number
  playerOrderFactor: number
  slowUpdateFactorThreshold: number
  viewSegmentLength: number
}

interface DownloadUrls {
  sdk2: string
  'sdk3-avatars': string
  'sdk3-worlds': string
}

interface DynamicWorldRows {
  index: number
  name: string
  platform: string
  sortHeading: string
  sortOrder: string
  sortOwnership: string
  tag?: string
}

export interface ConfigObject {
  address: string
  announcements: Announcements[]
  apiKey: string
  appName: string
  buildVersionTag: string
  clientApiKey: string
  clientBPSCeiling: number
  clientDisconnectTimeout: number
  clientReservedPlayerBPS: number
  clientSentCountAllowance: number
  contactEmail: string
  copyrightEmail: string
  currentTOSVersion: number
  defaultAvatar: string
  deploymentGroup: string
  devAppVersionStandalone: string
  devDownloadLinkWindows: string
  devSdkUrl: string
  devSdkVersion: string
  devServerVersionStandalone: string
  'dis-countdown': string
  disableAvatarCopying: boolean
  disableAvatarGating: boolean
  disableCommunityLabs: boolean
  disableCommunityLabsPromotion: boolean
  disableEmail: boolean
  disableEventStream: boolean
  disableFeedbackGating: boolean
  disableHello: boolean
  disableRegistration: boolean
  disableSteamNetworking: boolean
  disableTwoFactorAuth: boolean
  disableUdon: boolean
  disableUpgradeAccount: boolean
  downloadLinkWindows: string
  downloadUrls: DownloadUrls
  dynamicWorldRows: DynamicWorldRows[]
  events: Events
  gearDemoRoomId: string
  homeWorldId: string
  homepageRedirectTarget: string
  hubWorldId: string
  jobsEmail: string
  messageOfTheDay: string
  moderationEmail: string
  moderationQueryPeriod: number
  notAllowedToSelectAvatarInPrivateWorldMessage: string
  plugin: string
  releaseAppVersionStandalone: string
  releaseSdkUrl: string
  releaseSdkVersion: string
  releaseServerVersionStandalone: string
  sdkDeveloperFaqUrl: string
  sdkDiscordUrl: string
  sdkNotAllowedToPublishMessage: string
  sdkUnityVersion: string
  serverName: string
  supportEmail: string
  timeOutWorldId: string
  tutorialWorldId: string
  updateRateMsMaximum: number
  updateRateMsMinimum: number
  updateRateMsNormal: number
  uploadAnalysisPercent: number
  useReliableUdpForVoice: boolean
  userUpdatePeriod: number
  userVerificationDelay: number
  userVerificationRetry: number
  userVerificationTimeout: number
  viveWindowsUrl: string
  whiteListedAssetUrls: string[]
  worldUpdatePeriod: number
  'youtubedl-hash': string
  'youtubedl-version': string
}
