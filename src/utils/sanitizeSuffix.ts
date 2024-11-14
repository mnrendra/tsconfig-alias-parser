const sanitizeSuffix = (
  value: string
): string => {
  // If it ends with `/*`, then return the sanitized suffix.
  if (value.endsWith('/*')) return value.slice(0, -2)

  // If it ends with `/`, then return the sanitized suffix.
  if (value.endsWith('/')) return value.slice(0, -1)

  // If it ends with none of them, then return the original value.
  return value
}

export default sanitizeSuffix
