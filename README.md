# vrcapi-client

Unofficial VRChat API Client library.

Functions for each API endpoint, type information for convenient use in TypeScript are provided.

Created for internal use with [VRCFriendCheck](https://github.com/mnao305/VRCFriendCheck). So there are multiple endpoints that are not implemented.

## Install

Install with npm:

```sh
npm install vrcapi-client
```

## Usage

See type information for details.

```javascript
import * as vrc from 'vrcapi-client'

// login
await vrc.user.login('username', 'password')

// get friends
const friends = await vrc.user.getFriends()

// and more...
```

### Websocket API

```javascript
const c = await vrc.webSocketAPI()
// Note: msg is passed as a string type.
c.on('message', (msg) => {
    const data = JSON.parse(msg)
    // message type
    // ex) friend-online, friend-location, etc...
    console.log(data.type);
    // message data
    // This is also a string. Must be parsed if used.
    console.log(data.content)
  })
```

See Events in [unofficial api documentation](https://vrchatapi.github.io/#/WebsocketAPI/About) for message types.
