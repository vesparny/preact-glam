# preact-glam
> A tiny glamorous implementation for preact

[![Travis](https://img.shields.io/travis/vesparny/preact-glam.svg)](https://travis-ci.org/vesparny/preact-glam)
[![David](https://img.shields.io/david/vesparny/preact-glam.svg)](https://david-dm.org/vesparny/preact-glam)
[![npm](https://img.shields.io/npm/v/preact-glam.svg)](https://www.npmjs.com/package/preact-glam)
[![npm](https://img.shields.io/npm/dm/preact-glam.svg)](https://npm-stat.com/charts.html?package=preact-glam&from=2017-04-01)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![MIT License](https://img.shields.io/npm/l/preact-glam.svg?style=flat-square)](https://github.com/vesparny/preact-glam/blob/master/LICENSE)

The current size of `preact-glam/dist/preact-glam.umd.min.js` is:

[![gzip size](http://img.badgesize.io/https://unpkg.com/preact-glam/dist/preact-glam.umd.min.js?compression=gzip&label=gzip%20size&style=flat-square)](https://unpkg.com/preact-glam/dist/)

> IMPORTANT NOTE ABOUT SIZE: Because `preact-glam` depends on `glamor`, you should consider the full size you'll be adding
> to your application if you don't already have `glamor`.

## Install

This project uses [node](http://nodejs.org) and [npm](https://npmjs.com). Go check them out if you don't have them locally installed.

```sh
$ yarn add preact-glam
```

Then with a module bundler like [rollup](http://rollupjs.org/) or [webpack](https://webpack.js.org/), use as you would anything else:

```javascript
// using ES6 modules
import glam from 'preact-glam'

// using CommonJS modules
var glam = require('preact-glam')
```

The [UMD](https://github.com/umdjs/umd) build is also available on [unpkg](https://unpkg.com):

```html
<script src="https://unpkg.com/preact-glam/dist/preact-glam.umd.js"></script>
```

You can find the library on `window.preactGlam`.

## Usage

Please refer to [glamorous-tiny](https://github.com/paypal/glamorous#size).

It should support all the features supported by `glamorous-tiny` (with the exception of theming support).

## Tests

```sh
$ yarn run test
```

[MIT License](LICENSE.md) © [Alessandro Arnodo](https://alessandro.arnodo.net/)
