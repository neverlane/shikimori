<p align="center">
  <!-- <img src="https://raw.githubusercontent.com/neverlane/shikimori/master/.github/shikimori.png" alt="..."> -->
  <img src="./.github/shikimori.png" alt="...">
</p>
<p align="center">
  <b>shikimori</b>
</p>
<p align="center">Modern ES6 Promise based API client for <a href="https://shikimori.one/" target="_blank">shikimori</a></p>

| 📖 [Documentation](https://neverlane.github.io/shikimori/index.html) |
| ------------------------------------------------------------------------- |

<p align="center">
 <a href="https://npmjs.com/package/shikimori">
   <img src="https://img.shields.io/npm/v/shikimori?label=version&logo=npm&color=ligthgreen" alt="Version">
 </a>
 <a href="https://npmjs.com/package/shikimori">
   <img src="https://img.shields.io/npm/dt/shikimori?&logo=npm" alt="Version">
 </a>
</p>

## Install 📦

```bash
# using npm
npm i shikimori
# using yarn
yarn add shikimori
# using pnpm
pnpm add shikimori
```

## Usage 🔧

Check all available methods in [📖 Documentation](https://neverlane.github.io/shikimori/index.html).

```js
import { API } from 'shikimori'; // ESM
// OR
const { API } = require('shikimori'); // CommonJS

// Create Shikimori API client, without auth 
const shikimori = new API();

shikimori.animes.get({
  search: 'восхождение в тени'
})
  .then(animes => animes.map(anime => `id: ${anime.id} | name: ${anime.name}`));
```

## Thanks 🙏
[PanSeek](https://github.com/PanSeek) for help in creating types and interfaces for API