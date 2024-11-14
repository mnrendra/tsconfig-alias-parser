import type { Aliases, Alias } from '@mnrendra/types-aliases'

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

export default findDuplicate
