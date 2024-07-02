import { sanitizeSuffix, findDuplicate, parseAliases } from '.'

describe('Test all utils', () => {
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

  describe('Test `parseAliases` util:', () => {
    describe('Test `@` alias, where the `baseUrl` is `./src` and the `path` is `./`:', () => {
      it('Should return a list of aliases when given a valid `baseUrl` and valid `paths`!', () => {
        const received = parseAliases('./src', { '@': [''] })
        const expected = [{ alias: '@', path: './src' }]
        expect(received).toEqual(expected)
      })

      it('Should return a list of aliases when given a valid `baseUrl` and valid `paths`!', () => {
        const received = parseAliases('./src', { '@/': [''] })
        const expected = [{ alias: '@', path: './src' }]
        expect(received).toEqual(expected)
      })

      it('Should return a list of aliases when given a valid `baseUrl` and valid `paths`!', () => {
        const received = parseAliases('./src', { '@/*': [''] })
        const expected = [{ alias: '@', path: './src' }]
        expect(received).toEqual(expected)
      })

      it('Should return a list of aliases when given a valid `baseUrl` and valid `paths`!', () => {
        const received = parseAliases('./src', { '@': ['/'] })
        const expected = [{ alias: '@', path: './src' }]
        expect(received).toEqual(expected)
      })

      it('Should return a list of aliases when given a valid `baseUrl` and valid `paths`!', () => {
        const received = parseAliases('./src', { '@': ['/*'] })
        const expected = [{ alias: '@', path: './src' }]
        expect(received).toEqual(expected)
      })

      it('Should return a list of aliases when given a valid `baseUrl` and valid `paths`!', () => {
        const received = parseAliases('./src', { '@/': ['/'] })
        const expected = [{ alias: '@', path: './src' }]
        expect(received).toEqual(expected)
      })

      it('Should return a list of aliases when given a valid `baseUrl` and valid `paths`!', () => {
        const received = parseAliases('./src', { '@/': ['/*'] })
        const expected = [{ alias: '@', path: './src' }]
        expect(received).toEqual(expected)
      })

      it('Should return a list of aliases when given a valid `baseUrl` and valid `paths`!', () => {
        const received = parseAliases('./src', { '@/*': ['/*'] })
        const expected = [{ alias: '@', path: './src' }]
        expect(received).toEqual(expected)
      })
    })

    describe('Test `@` alias, where the `baseUrl` is `./src` and the `path` is `./utils`:', () => {
      it('Should return a list of aliases when given a valid `baseUrl` and valid `paths`!', () => {
        const received = parseAliases('./src', { '@utils': ['utils'] })
        const expected = [{ alias: '@utils', path: './src/utils' }]
        expect(received).toEqual(expected)
      })

      it('Should return a list of aliases when given a valid `baseUrl` and valid `paths`!', () => {
        const received = parseAliases('./src', { '@utils/': ['utils'] })
        const expected = [{ alias: '@utils', path: './src/utils' }]
        expect(received).toEqual(expected)
      })

      it('Should return a list of aliases when given a valid `baseUrl` and valid `paths`!', () => {
        const received = parseAliases('./src', { '@utils/*': ['utils'] })
        const expected = [{ alias: '@utils', path: './src/utils' }]
        expect(received).toEqual(expected)
      })

      it('Should return a list of aliases when given a valid `baseUrl` and valid `paths`!', () => {
        const received = parseAliases('./src', { '@utils': ['utils/'] })
        const expected = [{ alias: '@utils', path: './src/utils' }]
        expect(received).toEqual(expected)
      })

      it('Should return a list of aliases when given a valid `baseUrl` and valid `paths`!', () => {
        const received = parseAliases('./src', { '@utils': ['utils/*'] })
        const expected = [{ alias: '@utils', path: './src/utils' }]
        expect(received).toEqual(expected)
      })

      it('Should return a list of aliases when given a valid `baseUrl` and valid `paths`!', () => {
        const received = parseAliases('./src', { '@utils/': ['utils/'] })
        const expected = [{ alias: '@utils', path: './src/utils' }]
        expect(received).toEqual(expected)
      })

      it('Should return a list of aliases when given a valid `baseUrl` and valid `paths`!', () => {
        const received = parseAliases('./src', { '@utils/': ['utils/*'] })
        const expected = [{ alias: '@utils', path: './src/utils' }]
        expect(received).toEqual(expected)
      })

      it('Should return a list of aliases when given a valid `baseUrl` and valid `paths`!', () => {
        const received = parseAliases('./src', { '@utils/*': ['utils/*'] })
        const expected = [{ alias: '@utils', path: './src/utils' }]
        expect(received).toEqual(expected)
      })

      it('Should return a list of aliases when given a valid `baseUrl` and valid `paths`!', () => {
        const received = parseAliases('./src', { '@utils': ['./utils'] })
        const expected = [{ alias: '@utils', path: './src/utils' }]
        expect(received).toEqual(expected)
      })

      it('Should return a list of aliases when given a valid `baseUrl` and valid `paths`!', () => {
        const received = parseAliases('./src', { '@utils/': ['./utils'] })
        const expected = [{ alias: '@utils', path: './src/utils' }]
        expect(received).toEqual(expected)
      })

      it('Should return a list of aliases when given a valid `baseUrl` and valid `paths`!', () => {
        const received = parseAliases('./src', { '@utils/*': ['./utils'] })
        const expected = [{ alias: '@utils', path: './src/utils' }]
        expect(received).toEqual(expected)
      })

      it('Should return a list of aliases when given a valid `baseUrl` and valid `paths`!', () => {
        const received = parseAliases('./src', { '@utils': ['./utils/'] })
        const expected = [{ alias: '@utils', path: './src/utils' }]
        expect(received).toEqual(expected)
      })

      it('Should return a list of aliases when given a valid `baseUrl` and valid `paths`!', () => {
        const received = parseAliases('./src', { '@utils': ['./utils/*'] })
        const expected = [{ alias: '@utils', path: './src/utils' }]
        expect(received).toEqual(expected)
      })

      it('Should return a list of aliases when given a valid `baseUrl` and valid `paths`!', () => {
        const received = parseAliases('./src', { '@utils/': ['./utils/'] })
        const expected = [{ alias: '@utils', path: './src/utils' }]
        expect(received).toEqual(expected)
      })

      it('Should return a list of aliases when given a valid `baseUrl` and valid `paths`!', () => {
        const received = parseAliases('./src', { '@utils/': ['./utils/*'] })
        const expected = [{ alias: '@utils', path: './src/utils' }]
        expect(received).toEqual(expected)
      })

      it('Should return a list of aliases when given a valid `baseUrl` and valid `paths`!', () => {
        const received = parseAliases('./src', { '@utils/*': ['./utils/*'] })
        const expected = [{ alias: '@utils', path: './src/utils' }]
        expect(received).toEqual(expected)
      })
    })

    describe('Test duplicated aliases:', () => {
      it('Should return the same aliases when given the same alias value!', () => {
        const received = parseAliases('./src', { '@': [''], '@/': [''], '@/*': [''], '@/*/': [''] })
        const expected = [{ alias: '@', path: './src' }]
        expect(received).toEqual(expected)
      })
    })
  })
})
