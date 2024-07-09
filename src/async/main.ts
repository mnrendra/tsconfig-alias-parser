import type { Aliases, Options } from '../types'

import {
  obtainTSConfigPaths,
  validateSkippedStacks
} from '@mnrendra/obtain-tsconfig-paths'

import { SKIPPED_STACK } from '../consts'

import { parseAliases } from '../utils'

/**
 * Parse `baseUrl` and `paths` from `compilerOptions` into an aliases
 * asynchronously.
 *
 * @param {Options} options - tsconfig.json `compilerOptions` value or
 * `skippedStacks`.
 *
 * @returns An aliases.
 */
const main = async (
  options?: Options
): Promise<Aliases> => {
  // Extract `options` properties.
  const { skippedStacks, stackTraceLimit } = options ?? {}

  // Validate skipped stacks.
  const validSkippedStacks = validateSkippedStacks(SKIPPED_STACK, skippedStacks)

  // Obtain a valid `baseUrl` and `paths`.
  const { baseUrl, paths } = await obtainTSConfigPaths({
    ...options,
    skippedStacks: validSkippedStacks,
    stackTraceLimit
  })

  // Parse `baseUrl` and `paths` into an aliases.
  const aliases = parseAliases(baseUrl, paths)

  // Return an aliases.
  return aliases
}

// Export `main` as the default value.
export default main
