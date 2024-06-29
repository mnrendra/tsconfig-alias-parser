import mainDummy from '@tests/dummies/main'

import main from './main'

describe('Test `main` feature:', () => {
  it('Should return `Hello, World!` string!', () => {
    const received = main()
    const expected = mainDummy()
    expect(received).toBe(expected)
  })
})
