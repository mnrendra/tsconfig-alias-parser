# @mnrendra/tsconfig-alias-parser
A utility to parse `tsconfig.json` `baseUrl` and `paths` into [aliases](https://www.npmjs.com/package/@mnrendra/types-aliases).<br/>
This utility will automatically read the `baseUrl` and `paths` from `tsconfig.json` and parse them into [aliases](https://www.npmjs.com/package/@mnrendra/types-aliases) that can be consumed by [@mnrendra/alias-resolver](https://www.npmjs.com/package/@mnrendra/alias-resolver) to resolve all alias paths.

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
  skippedStacks: 'your-module-name', // To skip your module stack when you want to publish your package and allow your consumer's `tsconfig.json` to be read.
  stackTraceLimit: 10 // To specify the number of stack frames to be collected by `@mnrendra/stack-trace`.
})

// Or by passing your `baseUrl` and `paths` manually:
parseTSConfigAlias({
  baseUrl: './src',
  paths: {
    '@': ['./']
  }
})
```

## Utility
```javascript
import {
  validateSkippedStacks // To validate the list of stacks to be skipped. More info: @mnrendra/validate-skipped-stacks
} from '@mnrendra/tsconfig-alias-parser'
```

## Types
```typescript
import type {
  // @mnrendra/types-aliases
  Aliases,
  Alias,
  // @mnrendra/types-tsconfig
  TSConfig,
  CompilerOptions,
  BaseURL,
  Paths,
  // @mnrendra/tsconfig-alias-parser
  Options,
  // @mnrendra/validate-skipped-stacks
  SkippedStacks,
  ValidSkippedStacks
} from '@mnrendra/tsconfig-alias-parser'
```

## License
[MIT](https://github.com/mnrendra/tsconfig-alias-parser/blob/HEAD/LICENSE)

## Author
[@mnrendra](https://github.com/mnrendra)
