# @zarinpal/web-components.
This package providing a new design system for [ZarinPal](https://www.zarinpal.com/) that contains a foundation and many components based on the new design system. although this package developing for ZarinPal, it will use for other ZarinPal products in the future. In order to increase development speed and consistency on the style guide, we decided to use TailwindCSS. So this package uses [TailwindCSS](https://tailwindcss.com/), [Typescript](https://www.typescriptlang.org/) and [Vuejs](https://vuejs.org/).

> NOTE: This package is under construction and it's not ready to use!

> NOTE: These web components build for Vue.js 2.x / Nuxt.js 2.x

## Features
- Responsive components
- Support Dark and Light mode

## Installation
First install and configure `TailwindCSS` with a minimal config then add `@zarinpal/web-components` dependency to your project:
```bash
# using npm
npm install @zarinpal/web-components

# using yarn
yarn add @zarinpal/web-components
```

Add it to your project:

### Nuxtjs
1. Create a plugin with `web-components.js` name
```javascript
// web-components.js

import Vue from 'vue';
import zwc from '@zarinpal/web-components';
import '@zarinpal/web-components/dist/zwc.css'

Vue.use(zwc)
```
2. Add plugin to `nuxt.config.js`
```javascript
// nuxt.config.js

...

plugins: [
  '~/plugin/web-components',
],

...
```

3. Add purge to `tailwind.config.js`
```javascript
// tailwind.config.js

...

purge: [
  'node_modules/@zarinpal/web-components/**/*.vue',
],

...
```
## Usage
After installation, you just need to add components anywhere you want
```html
<!-- *.vue -->

<Button size="large">
  My Button
</Button>
```

## Contributing
We're haven't any contributing guidelines yet because this package built as an intra-organizational project.
