## Audius 🤝 ETHOnline

To run this project, clone this repo & run

`npm install`

`npm run start`

<br />

**Audius HTTP API**
(read-only)

This is our public read-only API. You can get & stream content from users, tracks, and playlists. You'll have access to 100K tracks & the ability to consume MP3's directly.

https://audiusproject.github.io/api-docs/index.html#audius-api-docs


<br />

**Audius Libs (JS)**
(read + write)

This is our main js package that we use in our clients to connect to the chain, manage wallets, write content to backends. The docs are sparse as it stands, so we're happy to lend a hand!

`npm install @audius/libs`

https://github.com/AudiusProject/audius-protocol/tree/master/libs

<br />

**Audius.js (JS)**
(read + write)

A thin wrapper around `@audius/libs` that surfaces some of our internal streaming technology (HLS).

Our community-driven Discord bot uses this abstraction.

`npm install @audius/audius.js`

https://github.com/AudiusProject/audius.js

Discord bot: https://github.com/kanbaru/audius-music

<br />

**Component Library (under development)**

Stems is our audio-forward React component library under development.

As it stands, there are only a few components (Buttons, Modals), but it includes our fonts & color palettes.

https://github.com/AudiusProject/stems

<br />

**Other Repos**

Audius Client

https://github.com/AudiusProject/audius-client

Audius Mobile Client

https://github.com/AudiusProject/audius-mobile-client

Audius Embed Player (twitter, discord)

https://github.com/AudiusProject/bedtime