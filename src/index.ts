import { validateSkippedStacks } from '@mnrendra/obtain-tsconfig-paths'

import async from './async'
import sync from './sync'

export type {
  Aliases,
  Alias,
  TSConfig,
  CompilerOptions,
  BaseURL,
  Paths,
  TSConfigPaths,
  Options,
  SkippedStacks,
  ValidSkippedStacks
} from './types'

export {
  async as parseTSConfigAlias,
  sync as parseTSConfigAliasSync,
  validateSkippedStacks
}
