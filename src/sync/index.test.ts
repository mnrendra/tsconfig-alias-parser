import type { CompilerOptions } from '@/types'

import mockedReadSync from '@tests/mocks/readSync'
import unmockReadSync from '@tests/unmocks/readSync'
import defaultValue from '@tests/dummies/defaultValue'
import tsConfigValues from '@tests/dummies/tsConfigValues'

import index from '.'

jest.mock('@mnrendra/read-stacked-file', () => ({
  readSync: jest.fn(),
  validateSkippedStacks: jest.fn()
}))

describe('Test sync main feature:', () => {
  describe('By passing an empty argument:', () => {
    describe('By mocking `@mnrendra/read-stacked-file` to return mocked values:', () => {
      let i = 0
      const mockReturnValues = tsConfigValues

      beforeEach(() => {
        mockedReadSync.mockReturnValue(JSON.stringify(mockReturnValues[i]))
        i++
      })

      afterEach(() => {
        unmockReadSync(mockedReadSync)
      })

      it('Should return the default value when `compilerOptions` is `undefined`!', () => {
        const received = index()
        const expected = defaultValue
        expect(received).toEqual(expected)
      })

      it('Should return the default value when `compilerOptions` is `null`!', () => {
        const received = index()
        const expected = defaultValue
        expect(received).toEqual(expected)
      })

      it('Should return the default value when `compilerOptions.baseUrl` is `undefined`!', () => {
        const received = index()
        const expected = defaultValue
        expect(received).toEqual(expected)
      })

      it('Should return the default value when `compilerOptions.baseUrl` is `null`!', () => {
        const received = index()
        const expected = defaultValue
        expect(received).toEqual(expected)
      })

      it('Should return the default value when `compilerOptions.paths` is `undefined`!', () => {
        const received = index()
        const expected = defaultValue
        expect(received).toEqual(expected)
      })

      it('Should return the default value when `compilerOptions.paths` is `null`!', () => {
        const received = index()
        const expected = defaultValue
        expect(received).toEqual(expected)
      })

      it('Should return the value from the `tsconfig.json` file when given an empty argument!', () => {
        const received = index()
        const expected = [{ alias: '@', path: './src' }]
        expect(received).toEqual(expected)
      })

      it('Should return the value from the `tsconfig.json` file without duplicated aliases when given an empty argument and there are duplicated aliases in `tsconfig.json`!', () => {
        const received = index()
        const expected = [{ alias: '@', path: './src' }]
        expect(received).toEqual(expected)
      })
    })
  })

  describe('By passing an argument:', () => {
    describe('By mocking `@mnrendra/read-stacked-file` to return mocked values:', () => {
      let i = 0
      const mockReturnValues = tsConfigValues

      beforeEach(() => {
        mockedReadSync.mockReturnValue(JSON.stringify(mockReturnValues[i]))
        i++
      })

      afterEach(() => {
        unmockReadSync(mockedReadSync)
      })

      it('Should return the default value when `compilerOptions` is `undefined`!', () => {
        const received = index(undefined)
        const expected = defaultValue
        expect(received).toEqual(expected)
      })

      it('Should return the default value when `compilerOptions` is `null`!', () => {
        const received = index(JSON.parse('null') as CompilerOptions)
        const expected = defaultValue
        expect(received).toEqual(expected)
      })

      it('Should return the default value when `compilerOptions.baseUrl` is `undefined`!', () => {
        const received = index({})
        const expected = defaultValue
        expect(received).toEqual(expected)
      })
    })

    describe('Without mocking anything:', () => {
      it('Should return the default value when `compilerOptions.baseUrl` is `null`!', () => {
        const received = index({ baseUrl: null })
        const expected = defaultValue
        expect(received).toEqual(expected)
      })

      it('Should return the default value when `compilerOptions.paths` is `undefined`!', () => {
        const received = index({ baseUrl: './' })
        const expected = defaultValue
        expect(received).toEqual(expected)
      })

      it('Should return the default value when `compilerOptions.paths` is `null`!', () => {
        const received = index({ baseUrl: './', paths: null })
        const expected = defaultValue
        expect(received).toEqual(expected)
      })

      it('Should return the value from the options when given a valid argument!', () => {
        const received = index({ baseUrl: './src', paths: { '@': ['./'] } })
        const expected = [{ alias: '@', path: './src' }]
        expect(received).toEqual(expected)
      })

      it('Should return the value from the options without duplicated aliases when given a valid argument and there are duplicated aliases in the options!', () => {
        const received = index({ baseUrl: './src', paths: { '@': ['./'], '@/*': ['./*'], '@/*/': ['./*/'] } })
        const expected = [{ alias: '@', path: './src' }]
        expect(received).toEqual(expected)
      })
    })
  })
})
