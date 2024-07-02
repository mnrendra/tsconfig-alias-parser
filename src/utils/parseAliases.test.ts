import parseAliases from './parseAliases'

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
