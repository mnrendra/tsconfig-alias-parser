import type { Aliases } from '@mnrendra/types-aliases'

import {
  type CompilerOptions,
  obtainTSConfigPaths
} from '@mnrendra/obtain-tsconfig-paths'

import { parseAliases } from '../utils'

/**
 * Parse the `baseUrl` and `paths` from `tsconfig.json` into
 * [aliases](https://www.npmjs.com/package/@mnrendra/types-aliases)
 * asynchronously.
 *
 * @param {CompilerOptions} [options] - A `compilerOptions` object.
 *
 * @returns {Promise<Aliases>} A list of aliases.
 *
 * @see https://github.com/mnrendra/tsconfig-alias-parser#readme
 */
const main = async (
  options: CompilerOptions = {}
): Promise<Aliases> => {
  // Obtain a valid `baseUrl` and `paths`.
  const { baseUrl, paths } = await obtainTSConfigPaths(options)

  // Parse `baseUrl` and `paths` into an aliases.
  const aliases = parseAliases(baseUrl, paths)

  // Return an aliases.
  return aliases
}

export default main
