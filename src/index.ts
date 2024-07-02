import type {
  Alias,
  Aliases,
  Options
} from './types'

import { main, mainSync } from './main'

export type {
  Alias,
  Aliases,
  Options
}

export {
  main as parseTSConfigAlias,
  mainSync as parseTSConfigAliasSync
}
