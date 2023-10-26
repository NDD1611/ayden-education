import { formatter } from '@lingui/format-json'

import { defaultLocale, locales } from './src/i18n.ts'

const linguiConfig = {
  catalogs: [
    {
      path: '<rootDir>/locales/{locale}',
      include: ['<rootDir>/src'],
      exclude: ['**/node_modules/**'],
    },
  ],
  locales,
  pseudoLocale: 'pseudo',
  format: formatter({ style: 'minimal' }),
  orderBy: 'messageId',
  rootDir: '.',
  runtimeConfigModule: {
    i18n: ['@lingui/core', 'i18n'],
    Trans: ['@lingui/react', 'Trans'],
  },
  sourceLocale: defaultLocale,
}

export default linguiConfig
