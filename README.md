# @mnrendra/tsconfig-alias-parser
Parse the `baseUrl` and `paths` from `tsconfig.json` into [aliases](https://www.npmjs.com/package/@mnrendra/types-aliases). This will automatically read `baseUrl` and `paths` from `tsconfig.json` and convert them into [aliases](https://www.npmjs.com/package/@mnrendra/types-aliases) that can be used by [@mnrendra/alias-resolver](https://www.npmjs.com/package/@mnrendra/alias-resolver) to resolve all alias paths.

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

## Options
### • `baseUrl`
*type: `BaseURL|null|undefined`*<br/>
*default: `undefined`*<br/>
`tsconfig.json`'s `compilerOptons.baseUrl`.
### • `paths`
*type: `Paths|null|undefined`*<br/>
*default: `undefined`*<br/>
`tsconfig.json`'s `compilerOptons.paths`.

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
  Paths
} from '@mnrendra/tsconfig-alias-parser'
```

## License
[MIT](https://github.com/mnrendra/tsconfig-alias-parser/blob/HEAD/LICENSE)

## Author
[@mnrendra](https://github.com/mnrendra)
