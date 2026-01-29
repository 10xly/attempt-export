# attempt-export

Safely run a function and get its return value, or `undefined` if it throws.   

## Installation

```bash
npm install attempt-export
```

## Usage

For example, if you want to make a file that exports `Symbol` if it exists, otherwise undefined:

```js
const attemptExport = require("attempt-export")(module.exports)
const assert = require("assert")

attemptExport(() => {
  assert(Symbol.species.constructor === Symbol)
})
```

Or if you don't want to use this for exporting:
```js
const attemptExport = require("attempt-export")({})

const value = attemptExport(() => {
  return 123
})

console.log(value) // 123

const result = attemptExport(() => {
  throw new Error("boom")
})

console.log(result) // undefined
```