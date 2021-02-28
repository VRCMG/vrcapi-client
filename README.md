# vrc-api

This library wraps the VRChat API.
Functions for each API endpoint, type information for convenient use in TypeScript are provided.

Created for internal use with [VRCFriendCheck](https://github.com/mnao305/VRCFriendCheck). So there are multiple endpoints that are not implemented.

## Install

Install with npm:

```sh
npm install vrc-api
```

## Usage

See type information for details.

```javascript
import * as vrc from 'vrc-api'

// login
await vrc.user.login('username', 'password')

// get friends
const friends = await vrc.user.getFriends()

// and more...
```
