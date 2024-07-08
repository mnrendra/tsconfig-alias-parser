import type { CompilerOptions } from '@/types'

import defaultValue from '@tests/dummies/defaultValue'
import tsConfigValues from '@tests/dummies/tsConfigValues'
import mockedReadAsync from '@tests/mocks/readAsync'
import mockedReadSync from '@tests/mocks/readSync'
import unmockReadAsync from '@tests/unmocks/readAsync'
import unmockReadSync from '@tests/unmocks/readSync'

import {
  parseTSConfigAlias,
  parseTSConfigAliasSync,
  validateSkippedStacks
} from '.'

jest.mock('@mnrendra/read-stacked-file', () => ({
  read: jest.fn(),
  readSync: jest.fn(),
  validateSkippedStacks: jest.fn()
}))

describe('Test all features:', () => {
  describe('Test async feature:', () => {
    describe('By passing an empty argument:', () => {
      describe('By mocking `@mnrendra/read-stacked-file` to resolve mocked values:', () => {
        let i = 0
        const mockResolvedValues = tsConfigValues

        beforeEach(() => {
          mockedReadAsync
            .mockResolvedValue(JSON.stringify(mockResolvedValues[i]))
          i++
        })

        afterEach(() => {
          unmockReadAsync(mockedReadAsync)
        })

        it('Should resolve the default value when `compilerOptions` is `undefined`!', async () => {
          const received = await parseTSConfigAlias()
          const expected = defaultValue
          expect(received).toEqual(expected)
        })

        it('Should resolve the default value when `compilerOptions` is `null`!', async () => {
          const received = await parseTSConfigAlias()
          const expected = defaultValue
          expect(received).toEqual(expected)
        })

        it('Should resolve the default value when `compilerOptions.baseUrl` is `undefined`!', async () => {
          const received = await parseTSConfigAlias()
          const expected = defaultValue
          expect(received).toEqual(expected)
        })

        it('Should resolve the default value when `compilerOptions.baseUrl` is `null`!', async () => {
          const received = await parseTSConfigAlias()
          const expected = defaultValue
          expect(received).toEqual(expected)
        })

        it('Should resolve the default value when `compilerOptions.paths` is `undefined`!', async () => {
          const received = await parseTSConfigAlias()
          const expected = defaultValue
          expect(received).toEqual(expected)
        })

        it('Should resolve the default value when `compilerOptions.paths` is `null`!', async () => {
          const received = await parseTSConfigAlias()
          const expected = defaultValue
          expect(received).toEqual(expected)
        })

        it('Should resolve the value from the `tsconfig.json` file when given an empty argument!', async () => {
          const received = await parseTSConfigAlias()
          const expected = [{ alias: '@', path: './src' }]
          expect(received).toEqual(expected)
        })

        it('Should resolve the value from the `tsconfig.json` file without duplicated aliases when given an empty argument and there are duplicated aliases in `tsconfig.json`!', async () => {
          const received = await parseTSConfigAlias()
          const expected = [{ alias: '@', path: './src' }]
          expect(received).toEqual(expected)
        })
      })
    })

    describe('By passing an argument:', () => {
      describe('By mocking `@mnrendra/read-stacked-file` to resolve mocked values:', () => {
        let i = 0
        const mockResolvedValues = tsConfigValues

        beforeEach(() => {
          mockedReadAsync
            .mockResolvedValue(JSON.stringify(mockResolvedValues[i]))
          i++
        })

        afterEach(() => {
          unmockReadAsync(mockedReadAsync)
        })

        it('Should resolve the default value when `compilerOptions` is `undefined`!', async () => {
          const received = await parseTSConfigAlias(undefined)
          const expected = defaultValue
          expect(received).toEqual(expected)
        })

        it('Should resolve the default value when `compilerOptions` is `null`!', async () => {
          const received = await parseTSConfigAlias(JSON.parse('null') as CompilerOptions)
          const expected = defaultValue
          expect(received).toEqual(expected)
        })

        it('Should resolve the default value when `compilerOptions.baseUrl` is `undefined`!', async () => {
          const received = await parseTSConfigAlias({})
          const expected = defaultValue
          expect(received).toEqual(expected)
        })
      })

      describe('Without mocking anything:', () => {
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
    })
  })

  describe('Test sync feature:', () => {
    describe('By passing an empty argument:', () => {
      describe('By mocking `@mnrendra/read-stacked-file` to return mocked values:', () => {
        let i = 0
        const mockReturnValues = tsConfigValues

        beforeEach(() => {
          mockedReadSync
            .mockReturnValue(JSON.stringify(mockReturnValues[i]))
          i++
        })

        afterEach(() => {
          unmockReadSync(mockedReadSync)
        })

        it('Should return the default value when `compilerOptions` is `undefined`!', () => {
          const received = parseTSConfigAliasSync()
          const expected = defaultValue
          expect(received).toEqual(expected)
        })

        it('Should return the default value when `compilerOptions` is `null`!', () => {
          const received = parseTSConfigAliasSync()
          const expected = defaultValue
          expect(received).toEqual(expected)
        })

        it('Should return the default value when `compilerOptions.baseUrl` is `undefined`!', () => {
          const received = parseTSConfigAliasSync()
          const expected = defaultValue
          expect(received).toEqual(expected)
        })

        it('Should return the default value when `compilerOptions.baseUrl` is `null`!', () => {
          const received = parseTSConfigAliasSync()
          const expected = defaultValue
          expect(received).toEqual(expected)
        })

        it('Should return the default value when `compilerOptions.paths` is `undefined`!', () => {
          const received = parseTSConfigAliasSync()
          const expected = defaultValue
          expect(received).toEqual(expected)
        })

        it('Should return the default value when `compilerOptions.paths` is `null`!', () => {
          const received = parseTSConfigAliasSync()
          const expected = defaultValue
          expect(received).toEqual(expected)
        })

        it('Should return the value from the `tsconfig.json` file when given an empty argument!', () => {
          const received = parseTSConfigAliasSync()
          const expected = [{ alias: '@', path: './src' }]
          expect(received).toEqual(expected)
        })

        it('Should return the value from the `tsconfig.json` file without duplicated aliases when given an empty argument and there are duplicated aliases in `tsconfig.json`!', () => {
          const received = parseTSConfigAliasSync()
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
          mockedReadSync
            .mockReturnValue(JSON.stringify(mockReturnValues[i]))
          i++
        })

        afterEach(() => {
          unmockReadSync(mockedReadSync)
        })

        it('Should return the default value when `compilerOptions` is `undefined`!', () => {
          const received = parseTSConfigAliasSync(undefined)
          const expected = defaultValue
          expect(received).toEqual(expected)
        })

        it('Should return the default value when `compilerOptions` is `null`!', () => {
          const received = parseTSConfigAliasSync(JSON.parse('null') as CompilerOptions)
          const expected = defaultValue
          expect(received).toEqual(expected)
        })

        it('Should return the default value when `compilerOptions.baseUrl` is `undefined`!', () => {
          const received = parseTSConfigAliasSync({})
          const expected = defaultValue
          expect(received).toEqual(expected)
        })
      })

      describe('Without mocking anything:', () => {
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
  })

  describe('Test `validateSkippedStacks` util:', () => {
    it('Should return a valid skipped-stacks when given a skipped-stack!', () => {
      const received = validateSkippedStacks('any')
      const expected = ['any']

      expect(received).toEqual(expected)
    })

    it('Should return a valid skipped-stacks when given a skipped-stack and a `skippedStacks` option with a string!', () => {
      const received = validateSkippedStacks('any', 'any')
      const expected = ['any', 'any']

      expect(received).toEqual(expected)
    })

    it('Should return a valid skipped-stacks when given a skipped-stack and a `skippedStacks` option with a list of strings!', () => {
      const received = validateSkippedStacks('any', ['any'])
      const expected = ['any', 'any']

      expect(received).toEqual(expected)
    })
  })
})
