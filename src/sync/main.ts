import type { Aliases, Options } from '../types'

import {
  obtainTSConfigPathsSync,
  validateSkippedStacks
} from '@mnrendra/obtain-tsconfig-paths'

import { SKIPPED_STACK } from '../consts'

import { parseAliases } from '../utils'

/**
 * Parse `baseUrl` and `paths` from `compilerOptions` into an aliases
 * synchronously.
 *
 * @param {Options} options - tsconfig.json `compilerOptions` value or
 * `skippedStacks`.
 *
 * @returns An aliases.
 */
const main = (
  options?: Options
): Aliases => {
  // Extract `options` properties.
  const { skippedStacks: _skippedStacks } = options ?? {}

  // Validate skipped stacks.
  const skippedStacks = validateSkippedStacks(SKIPPED_STACK, _skippedStacks)

  // Obtain a valid `baseUrl` and `paths`.
  const { baseUrl, paths } = obtainTSConfigPathsSync({
    ...options,
    skippedStacks
  })

  // Parse `baseUrl` and `paths` into an aliases.
  const aliases = parseAliases(baseUrl, paths)

  // Return an aliases.
  return aliases
}

// Export `main` as the default value.
export default main
