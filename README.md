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
