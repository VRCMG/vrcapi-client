import { CurrentUserObject, LimitedUserObject } from 'src/types/User'

export const CurrentUserTestData: CurrentUserObject = {
  acceptedTOSVersion: 0,
  accountDeletionDate: null,
  activeFriends: [],
  allowAvatarCopying: true,
  bio: '',
  bioLinks: [],
  currentAvatar: '',
  currentAvatarAssetUrl: '',
  currentAvatarImageUrl: '',
  currentAvatarThumbnailImageUrl: '',
  date_joined: '',
  developerType: 'none',
  displayName: '',
  email: '',
  emailVerified: true,
  fallbackAvatar: '',
  feature: { twoFactorAuth: false },
  friendGroupNames: [],
  friendKey: '',
  friends: [],
  hasBirthday: true,
  hasEmail: true,
  hasLoggedInFromClient: true,
  hasPendingEmail: true,
  homeLocation: '',
  id: '',
  isFriend: true,
  last_login: '',
  last_platform: '',
  obfuscatedEmail: '',
  obfuscatedPendingEmail: '',
  oculusId: '',
  offlineFriends: [],
  onlineFriends: [],
  pastDisplayNames: [],
  state: 'offline',
  status: 'active',
  statusDescription: '',
  steamDetails: null,
  steamId: '',
  tags: [],
  twoFactorAuthEnabled: true,
  unsubscribe: true,
  userIcon: '',
  username: ''
}

export const LimitedUserTestData: LimitedUserObject = {
  bio: 'undefined',
  currentAvatarImageUrl: '',
  currentAvatarThumbnailImageUrl: '',
  developerType: 'none',
  displayName: '',
  fallbackAvatar: '',
  friendKey: '',
  id: '',
  isFriend: true,
  last_login: '',
  last_platform: '',
  location: '',
  status: 'active',
  statusDescription: '',
  tags: [],
  userIcon: '',
  username: ''
}
