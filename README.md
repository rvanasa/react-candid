# react-candid

> A React component for the [Candid](https://medium.com/dfinity/candid-a-tool-for-interoperable-programming-languages-on-the-internet-computer-27e7085cd97f) interface description language.

[![NPM](https://img.shields.io/npm/v/react-candid.svg)](https://www.npmjs.com/package/react-candid) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-candid
```

## Quick Start

```tsx
import React from 'react'
import ReactDOM from 'react-dom'
import Candid from 'react-candid'

ReactDOM.render(
  <Candid principal="mwrha-maaaa-aaaab-qabqq-cai" />,
  document.getElementById('root'),
)
```

## Advanced Usage

```tsx
import React from 'react'
import { Candid } from 'react-candid'

const App = () => {
  return (
    <Candid
      principal="mwrha-maaaa-aaaab-qabqq-cai" // Canister ID (principal)
      candid="" // Optional candid interface (base 64)
      local={false} // Use your local replica?
      width="100%" // Component width
      height="100vh" // Component height
    />
  )
}

export default App
```

---
