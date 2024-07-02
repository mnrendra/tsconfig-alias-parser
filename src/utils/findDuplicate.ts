import type { Alias, Aliases } from '../types'

/**
 * Find duplicate `alias` in `aliases`.
 *
 * @param {Aliases} aliases - List of alias.
 * @param {string} validAlias - A valid alias.
 *
 * @returns {Alias|undefined} The result.
 */
const findDuplicate = (
  aliases: Aliases,
  validAlias: string
): Alias | undefined => {
  // Find the duplications.
  const result = aliases.find(
    ({ alias }) =>
      validAlias === alias ||
      validAlias === alias + '/' ||
      validAlias === alias + '/*'
  )

  // Return the result.
  return result
}

// Export `findDuplicate` as the default value.
export default findDuplicate
