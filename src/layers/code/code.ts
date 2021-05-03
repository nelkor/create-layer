import { Layer } from '@/types'

import projectDefaultTxt from './templates/ide/project-default.txt'
import eslintTxt from './templates/ide/eslint.txt'
import watcherTasksTxt from './templates/ide/watcher-tasks.txt'
import vscSettings from './templates/ide/vsc-settings.txt'
import aliasTxt from './templates/basic/alias.txt'
import babelJson from './templates/basic/babel.json'
import eslintJson from './templates/basic/eslint.json'
import prettierJson from './templates/basic/prettier.json'
import gitIgnoreTxt from './templates/basic/git-ignore.txt'
import jestTxt from './templates/basic/jest-config.txt'
import packageJson from './templates/basic/nameless-package.json'
import tsConfigJson from './templates/basic/ts-config.json'
import readmeTxt from './templates/basic/readme.txt'
import arraySumTxt from './templates/src/array-sum.txt'
import arraySumSpecTxt from './templates/src/array-sum-spec.txt'

export const makeCode = (): Layer => ({
  scaffold: {
    '.idea/inspectionProfiles/Project_Default.xml': projectDefaultTxt,
    '.idea/jsLinters/eslint.xml': eslintTxt,
    '.idea/watcherTasks.xml': watcherTasksTxt,
    '.vscode/settings.json': vscSettings,
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
