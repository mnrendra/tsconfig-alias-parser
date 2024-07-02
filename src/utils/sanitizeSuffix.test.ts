import sanitizeSuffix from './sanitizeSuffix'

describe('Test `sanitizeSuffix` util:', () => {
  it('Should return `abc` when given `abc/*`!', () => {
    const received = sanitizeSuffix('abc/*')
    const expected = 'abc'
    expect(received).toBe(expected)
  })

  it('Should return `abc` when given `abc/`!', () => {
    const received = sanitizeSuffix('abc/')
    const expected = 'abc'
    expect(received).toBe(expected)
  })

  it('Should return `abc` when given `abc`!', () => {
    const received = sanitizeSuffix('abc')
    const expected = 'abc'
    expect(received).toBe(expected)
  })
})
