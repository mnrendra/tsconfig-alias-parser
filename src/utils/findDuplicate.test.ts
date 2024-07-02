import findDuplicate from './findDuplicate'

describe('Test `findDuplicate` util:', () => {
  const aliases = [{ alias: '@', path: './src' }, { alias: '@tests', path: './tests' }]

  it('Should return `undefined` when given an excluded alias!', () => {
    const received = findDuplicate(aliases, '@utils')
    const expected = undefined
    expect(received).toBe(expected)
  })

  it('Should return an alias when given an included alias!', () => {
    const received = findDuplicate(aliases, '@tests')
    const expected = { alias: '@tests', path: './tests' }
    expect(received).toEqual(expected)
  })

  it('Should return an alias when given an included alias with a `/` suffix!', () => {
    const received = findDuplicate(aliases, '@tests/')
    const expected = { alias: '@tests', path: './tests' }
    expect(received).toEqual(expected)
  })

  it('Should return an alias when given an included alias with a `/*` suffix!', () => {
    const received = findDuplicate(aliases, '@tests/*')
    const expected = { alias: '@tests', path: './tests' }
    expect(received).toEqual(expected)
  })
})
