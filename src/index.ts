import async from './async'
import sync from './sync'

export type {
  Aliases,
  Alias
} from '@mnrendra/types-aliases'

export type {
  TSConfig,
  CompilerOptions,
  BaseURL,
  Paths,
  TSConfigPaths
} from '@mnrendra/obtain-tsconfig-paths'

export {
  async as parseTSConfigAlias,
  sync as parseTSConfigAliasSync
}
