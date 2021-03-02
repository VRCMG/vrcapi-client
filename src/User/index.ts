import { login } from './Login'
import { getCurrentUser } from './UserInfo'
import { verify2FactorAuth } from './Verify'
import { getFriends, getFavFriends } from './Friends'
import { logout } from './Logout'

export default { login, logout, getCurrentUser, verify2FactorAuth, getFriends, getFavFriends }
