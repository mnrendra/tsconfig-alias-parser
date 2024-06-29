import mainDummy from '@tests/dummies/main'

import index from '.'

describe('Test all features:', () => {
  describe('Test `main` feature:', () => {
    it('Should return `Hello, World!` string!', () => {
      const received = index()
      const expected = mainDummy()
      expect(received).toBe(expected)
    })
  })
})
