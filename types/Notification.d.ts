type NotificationType = 'requestInvite' | 'invite' | 'broadcast' | 'message' | 'broadcast' | 'friendRequest' | 'votetokick'

// TODO NotificationDetails objects https://vrchatapi.github.io/#/Objects/Notification?id=notificationdetails-objects
// interface NotificationDetailsObject {

// }

export interface NotificationObject {
  created_at: string
  details: string // ? API doc的にはobjectだが、返ってくるのは文字列化されたobject。
  id: string
  message: string
  seen: boolean
  senderUserId: string
  senderUsername: string
  type: NotificationType
}
