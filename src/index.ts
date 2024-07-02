import type { Aliases, Alias } from '@mnrendra/types-aliases'

import type { Options } from './types'

import { main, mainSync } from './main'

export type {
  Aliases,
  Alias,
  Options
}

export {
  main as parseTSConfigAlias,
  mainSync as parseTSConfigAliasSync
}
