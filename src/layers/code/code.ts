import { Layer } from '@/types'

import aliasTxt from './templates/basic/alias.txt'
import babelJson from './templates/basic/babel.json'
import eslintJson from './templates/basic/eslint.json'
import prettierJson from './templates/basic/prettier.json'
import gitIgnoreTxt from './templates/basic/git-ignore.txt'
import jestTxt from './templates/basic/jest-config.txt'
import packageJson from './templates/basic/nameless-package.json'
import tsConfigJson from './templates/basic/ts-config.json'
import arraySumTxt from './templates/src/array-sum.txt'
import arraySumSpecTxt from './templates/src/array-sum-spec.txt'
import readmeTxt from './templates/readme.txt'

export const makeCode = (): Layer => ({
  scaffold: {
    'dev-helpers/alias.ts': aliasTxt,
    '.babelrc': babelJson,
    '.eslintrc': eslintJson,
    '.prettierrc': prettierJson,
    '.gitignore': gitIgnoreTxt,
    'index.d.ts': '',
    'jest.config.ts': jestTxt,
    'package.json': packageJson,
    'tsconfig.json': tsConfigJson,
  },
  getSrc() {
    return {
      'array-sum.ts': arraySumTxt,
      'array-sum.spec.ts': arraySumSpecTxt,
    }
  },
  getReadme() {
    return readmeTxt
  },
})
