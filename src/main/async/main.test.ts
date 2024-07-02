import type { CompilerOptions } from '@mnrendra/types-tsconfig'

import { readAsync as mockedReadAsync } from '@tests/mocks'
import { readAsync as unmockReadAsync } from '@tests/unmocks'
import { defaultValue, tsConfigValues } from '@tests/dummies'

import main from './main'

jest.mock('@mnrendra/read-stacked-file', () => ({
  read: jest.fn()
}))

describe('Test `main` async feature:', () => {
  describe('By passing an empty argument:', () => {
    describe('By mocking `@mnrendra/read-stacked-file` to resolve mocked values:', () => {
      let i = 0
      const mockResolvedValues = tsConfigValues

      beforeEach(() => {
        mockedReadAsync.mockResolvedValue(JSON.stringify(mockResolvedValues[i]))
        i++
      })

      afterEach(() => {
        unmockReadAsync(mockedReadAsync)
      })

      it('Should resolve the default value when `compilerOptions` is `undefined`!', async () => {
        const received = await main()
        const expected = defaultValue
        expect(received).toEqual(expected)
      })

      it('Should resolve the default value when `compilerOptions` is `null`!', async () => {
        const received = await main()
        const expected = defaultValue
        expect(received).toEqual(expected)
      })

      it('Should resolve the default value when `compilerOptions.baseUrl` is `undefined`!', async () => {
        const received = await main()
        const expected = defaultValue
        expect(received).toEqual(expected)
      })

      it('Should resolve the default value when `compilerOptions.baseUrl` is `null`!', async () => {
        const received = await main()
        const expected = defaultValue
        expect(received).toEqual(expected)
      })

      it('Should resolve the default value when `compilerOptions.paths` is `undefined`!', async () => {
        const received = await main()
        const expected = defaultValue
        expect(received).toEqual(expected)
      })

      it('Should resolve the default value when `compilerOptions.paths` is `null`!', async () => {
        const received = await main()
        const expected = defaultValue
        expect(received).toEqual(expected)
      })

      it('Should resolve the value from the `tsconfig.json` file when given an empty argument!', async () => {
        const received = await main()
        const expected = [{ alias: '@', path: './src' }]
        expect(received).toEqual(expected)
      })

      it('Should resolve the value from the `tsconfig.json` file without duplicated aliases when given an empty argument and there are duplicated aliases in `tsconfig.json`!', async () => {
        const received = await main()
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
        mockedReadAsync.mockResolvedValue(JSON.stringify(mockResolvedValues[i]))
        i++
      })

      afterEach(() => {
        unmockReadAsync(mockedReadAsync)
      })

      it('Should resolve the default value when `compilerOptions` is `undefined`!', async () => {
        const received = await main(undefined)
        const expected = defaultValue
        expect(received).toEqual(expected)
      })

      it('Should resolve the default value when `compilerOptions` is `null`!', async () => {
        const received = await main(JSON.parse('null') as CompilerOptions)
        const expected = defaultValue
        expect(received).toEqual(expected)
      })

      it('Should resolve the default value when `compilerOptions.baseUrl` is `undefined`!', async () => {
        const received = await main({})
        const expected = defaultValue
        expect(received).toEqual(expected)
      })
    })

    describe('Without mocking anything:', () => {
      it('Should resolve the default value when `compilerOptions.baseUrl` is `null`!', async () => {
        const received = await main({ baseUrl: null })
        const expected = defaultValue
        expect(received).toEqual(expected)
      })

      it('Should resolve the default value when `compilerOptions.paths` is `undefined`!', async () => {
        const received = await main({ baseUrl: './' })
        const expected = defaultValue
        expect(received).toEqual(expected)
      })

      it('Should resolve the default value when `compilerOptions.paths` is `null`!', async () => {
        const received = await main({ baseUrl: './', paths: null })
        const expected = defaultValue
        expect(received).toEqual(expected)
      })

      it('Should resolve the value from the options when given a valid argument!', async () => {
        const received = await main({ baseUrl: './src', paths: { '@': ['./'] } })
        const expected = [{ alias: '@', path: './src' }]
        expect(received).toEqual(expected)
      })

      it('Should resolve the value from the options without duplicated aliases when given a valid argument and there are duplicated aliases in the options!', async () => {
        const received = await main({ baseUrl: './src', paths: { '@': ['./'], '@/*': ['./*'], '@/*/': ['./*/'] } })
        const expected = [{ alias: '@', path: './src' }]
        expect(received).toEqual(expected)
      })
    })
  })
})
