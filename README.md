# @mnrendra/tsconfig-alias-parser
A utility to parse `tsconfig.json` `baseUrl` and `paths` into aliases.

## Install
```bash
npm i @mnrendra/tsconfig-alias-parser
```

## Usage

Using `CommonJS`:
```javascript
const { parseTSConfigAlias, parseTSConfigAliasSync } = require('@mnrendra/tsconfig-alias-parser')

// Asynchronously
parseTSConfigAlias()
  .then((aliases) => {
    console.log('asynchronously:', aliases)
  })

// Synchronously
const aliases = parseTSConfigAliasSync()
console.log('synchronously:', aliases)
```

Using `ES Module`:
```javascript
import { parseTSConfigAlias, parseTSConfigAliasSync } from '@mnrendra/tsconfig-alias-parser'

// Asynchronously
parseTSConfigAlias()
  .then((aliases) => {
    console.log('asynchronously:', aliases)
  })

// Synchronously
const aliases = parseTSConfigAliasSync()
console.log('synchronously:', aliases)
```

# Options
```javascript
// Skip your module stack:
parseTSConfigAlias({
  skippedStacks: 'your-module-name' // To skip your module stack when you want to publish your package and allow your consumer's `tsconfig.json` to be read.
})

// Or by passing your `baseUrl` and `paths` manually:
parseTSConfigAlias({
  baseUrl: './src',
  paths: {
    '@': ['./']
  }
})
```

# Types
```typescript
import type {
  Alias,
  Aliases,
  Options
} from '@mnrendra/tsconfig-alias-parser'
```

## License
[MIT](https://github.com/mnrendra/tsconfig-alias-parser/blob/HEAD/LICENSE)

## Author
[@mnrendra](https://github.com/mnrendra)

