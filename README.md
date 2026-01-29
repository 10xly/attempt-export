# attempt-export

Safely run a function and export its return value, or `undefined` if it throws.   

## Installation

```bash
npm install attempt-export
```

## Usage

For example, if you want to make a file that exports `Symbol` if it exists, otherwise undefined:

```js
const attemptExport = require("attempt-export")(module)
const assert = require("assert")

attemptExport(() => {
  assert(Symbol.species.constructor === Symbol)
  return Symbol
})
```