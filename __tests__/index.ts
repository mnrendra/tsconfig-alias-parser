import defaultValue from '@tests/dummies/defaultValue'

import {
  parseTSConfigAlias,
  parseTSConfigAliasSync
} from '..'

describe('Test all features:', () => {
  describe('Test `parseTSConfigAlias` feature:', () => {
    it('Should resolve the default value when `compilerOptions.baseUrl` is `null`!', async () => {
      const received = await parseTSConfigAlias({ baseUrl: null })
      const expected = defaultValue
      expect(received).toEqual(expected)
    })

    it('Should resolve the default value when `compilerOptions.paths` is `undefined`!', async () => {
      const received = await parseTSConfigAlias({ baseUrl: './' })
      const expected = defaultValue
      expect(received).toEqual(expected)
    })

    it('Should resolve the default value when `compilerOptions.paths` is `null`!', async () => {
      const received = await parseTSConfigAlias({ baseUrl: './', paths: null })
      const expected = defaultValue
      expect(received).toEqual(expected)
    })

    it('Should resolve the value from the options when given a valid argument!', async () => {
      const received = await parseTSConfigAlias({ baseUrl: './src', paths: { '@': ['./'] } })
      const expected = [{ alias: '@', path: './src' }]
      expect(received).toEqual(expected)
    })

    it('Should resolve the value from the options without duplicated aliases when given a valid argument and there are duplicated aliases in the options!', async () => {
      const received = await parseTSConfigAlias({ baseUrl: './src', paths: { '@': ['./'], '@/*': ['./*'], '@/*/': ['./*/'] } })
      const expected = [{ alias: '@', path: './src' }]
      expect(received).toEqual(expected)
    })
  })

  describe('Test `parseTSConfigAliasSync` feature:', () => {
    it('Should return the default value when `compilerOptions.baseUrl` is `null`!', () => {
      const received = parseTSConfigAliasSync({ baseUrl: null })
      const expected = defaultValue
      expect(received).toEqual(expected)
    })

    it('Should return the default value when `compilerOptions.paths` is `undefined`!', () => {
      const received = parseTSConfigAliasSync({ baseUrl: './' })
      const expected = defaultValue
      expect(received).toEqual(expected)
    })

    it('Should return the default value when `compilerOptions.paths` is `null`!', () => {
      const received = parseTSConfigAliasSync({ baseUrl: './', paths: null })
      const expected = defaultValue
      expect(received).toEqual(expected)
    })

    it('Should return the value from the options when given a valid argument!', () => {
      const received = parseTSConfigAliasSync({ baseUrl: './src', paths: { '@': ['./'] } })
      const expected = [{ alias: '@', path: './src' }]
      expect(received).toEqual(expected)
    })

    it('Should return the value from the options without duplicated aliases when given a valid argument and there are duplicated aliases in the options!', () => {
      const received = parseTSConfigAliasSync({ baseUrl: './src', paths: { '@': ['./'], '@/*': ['./*'], '@/*/': ['./*/'] } })
      const expected = [{ alias: '@', path: './src' }]
      expect(received).toEqual(expected)
    })
  })
})
