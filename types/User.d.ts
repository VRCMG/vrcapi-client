type State = 'online' | 'active' | 'offline'
type Status = 'active' | 'join me' | 'ask me' | 'busy' | 'offline'

type DeveloperType = 'none' | 'trusted' | 'internal' | 'moderator'

type Tags = 'admin_scripting_access' | 'system_scripting_access' | 'system_avatar_access' | 'system_world_access' | 'admin_avatar_access' | 'admin_world_access' | 'admin_avatar_restricted' | 'admin_world_restricted' | 'admin_moderator' | 'system_feedback_access' | 'system_trust_known' | 'system_trust_basic' | 'system_trust_trusted' | 'system_trust_intermediate' | 'system_trust_veteran' | 'system_legend' | 'system_trust_legend' | 'system_probable_troll' | 'system_troll' | 'system_supporter' | 'system_early_adopter' | 'admin_lock_level' | 'admin_lock_tags' | 'admin_official_thumbnail' | 'show_social_rank' | 'system_UE4_dev_access' | 'system_neuralink_beta' | 'system_extremely_cool_guy' | 'system_stop_being_nosy' | 'system_notamod'

interface Feature {
  twoFactorAuth: boolean
}

interface PastDisplayName {
  displayName: string
  updated_at: string
}

export interface CurrentUserObject {
  acceptedTOSVersion: number
  accountDeletionDate: null | string
  activeFriends: string[]
  allowAvatarCopying: boolean
  bio: string
  bioLinks: string[]
  currentAvatar: string
  currentAvatarAssetUrl: string
  currentAvatarImageUrl: string
  currentAvatarThumbnailImageUrl: string
  date_joined: string
  developerType: DeveloperType
  displayName: string
  email: string
  emailVerified: boolean
  fallbackAvatar: string
  feature: Feature
  friendGroupNames: string[]
  friendKey: string
  friends: string[]
  hasBirthday: boolean
  hasEmail: boolean
  hasLoggedInFromClient: boolean
  hasPendingEmail: boolean
  homeLocation: string
  id: string
  isFriend: boolean
  last_login: string
  last_platform: string
  obfuscatedEmail: string
  obfuscatedPendingEmail: string
  oculusId: string
  offlineFriends: string[]
  onlineFriends: string[]
  pastDisplayNames: PastDisplayName[]
  state: State
  status: Status
  statusDescription: string
  steamDetails: unknown
  steamId: string
  tags: Tags[]
  twoFactorAuthEnabled: boolean
  unsubscribe: boolean
  userIcon: string
  username: string
}

export interface UserObject {
  allowAvatarCopying: boolean
  bio: string
  bioLinks: string[]
  currentAvatarImageUrl: string
  currentAvatarThumbnailImageUrl: string
  date_joined: string
  developerType: DeveloperType
  displayName: string
  fallbackAvatar: string
  friendKey: string
  id: string
  instanceId: string
  isFriend: boolean
  last_login: string
  last_platform: string
  location: string
  state: State
  status: Status
  statusDescription: string
  tags: Tags[]
  userIcon: string
  username: string
  worldId: string
}

export interface LimitedUserObject {
  bio?: string // ? 存在しない場合がある？
  currentAvatarImageUrl: string
  currentAvatarThumbnailImageUrl: string
  developerType: DeveloperType
  displayName: string
  fallbackAvatar: string
  friendKey: string
  id: string
  isFriend: boolean
  last_login: string
  last_platform: string
  location: string
  status: Status
  statusDescription: string
  tags: Tags[]
  userIcon: string
  username: string
}
