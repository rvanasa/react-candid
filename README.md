# react-candid

> A modular user interface for the [Candid](https://medium.com/dfinity/candid-a-tool-for-interoperable-programming-languages-on-the-internet-computer-27e7085cd97f) interface description language.

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
  <Candid />,
  document.getElementById('root'),
)
```

## Advanced Usage

```tsx
import React from 'react'
import { Candid } from 'react-candid'

const App = () => {

  return (
    <Candid>

    </Candid>
  )
}

export default App
```

---
