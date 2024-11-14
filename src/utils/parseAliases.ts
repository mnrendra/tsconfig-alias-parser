import type { Aliases } from '@mnrendra/types-aliases'
import type { BaseURL, Paths } from '@mnrendra/obtain-tsconfig-paths'

import { join } from 'node:path'

import findDuplicate from './findDuplicate'
import sanitizeSuffix from './sanitizeSuffix'

const parseAliases = (
  baseUrl: BaseURL,
  paths: Paths
): Aliases => {
  // Initialize an aliases.
  const aliases: Aliases = []

  // Start looping and push a valid alias into aliases.
  Object.keys(paths).forEach((alias) => {
    // Validate the alias by sanitizing the suffix.
    const validAlias = sanitizeSuffix(alias)

    // Find the duplicate alias in aliases.
    const duplicate = findDuplicate(aliases, validAlias)

    // If the alias has a value and there is no duplication, then proceed.
    if (alias.trim() !== '' && duplicate === undefined) {
      // Get the list of paths from the `compilerOptions.paths`.
      const pathList = paths[alias]

      // If the `pathList` is valid, then proceed.
      if (Array.isArray(pathList)) {
        // Pick the first path only from the `pathList`.
        const path = pathList[0]

        // If the `path` is valid, then proceed.
        if (typeof path === 'string') {
          // Validate the path by sanitizing the suffix.
          const validPath = sanitizeSuffix(path)

          // Push the valid alias into the aliases.
          aliases.push({
            alias: validAlias,
            path: sanitizeSuffix('./' + join(baseUrl, validPath))
          })
        }
      }
    }
  })

  // Return a valid aliases.
  return aliases
}

export default parseAliases
