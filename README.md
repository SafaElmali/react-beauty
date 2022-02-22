<div align="center">
  <h1>🌸 React Beauty 🌸</h1>
  <h3>An experimental component library</h3>
   
  <i>Inspired by [Chakra UI](https://github.com/chakra-ui/chakra-ui)</i>  
</div>

<hr/>

<p align="center">
  <img alt="Bundle Size" src="https://badgen.net/bundlephobia/minzip/react-beauty"/>
  <img alt="MIT License" src="https://img.shields.io/github/license/chakra-ui/chakra-ui"/>
  <img alt="NPM" src="https://img.shields.io/npm/v/react-beauty.svg"/>
  <img alt="NPM Downloads" src="https://img.shields.io/npm/dm/react-beauty.svg?style=flat"/>
  <img alt="Github Stars" src="https://badgen.net/github/stars/safaelmali/react-beauty" />
</p>

## Installation

Inside your React project directory, install React Beauty by running either of the following:

`npm i react-beauty`

### Set up Provider

For React Beauty to work correctly, you need to set up the BeautyProvider at the root of your application.

Go to the root of your application and do this:

```js
import * as React from 'react'

// 1. import `BeautyProvider` component
import { BeautyProvider } from 'react-beauty'

function App({ Component }) {
  // 2. Use at the root of your app
  return (
    <BeautyProvider>
      <Component />
    </BeautyProvider>
  )
}
```

Now you are ready to start using components 🥳

## Storybook

Access Public Storybook [in here](https://61bf02a98b82d5003a56087a-boidushmnv.chromatic.com)

## Documentation

Access Public Documentation [in here](https://safaelmalidev.gitbook.io/design-system/)


## License

react-beauty is [MIT licensed](./LICENSE).
