import { Layer } from '@/types'
import { makeCode } from '@/layers/code/code'
import { getPackage } from '@/tools/dissect-layer'

import dependenciesTxt from './templates/basic/dependencies.txt'
import createPackageTxt from './templates/basic/create-package.txt'
import webpackTxt from './templates/basic/webpack-config.txt'
import mainTxt from './templates/src/main.txt'
import appTxt from './templates/src/app.txt'
import appSpecTxt from './templates/src/app-spec.txt'
import readmeTxt from './templates/readme.txt'

export const makeBackend = (): Layer => {
  const code = makeCode()

  const codePackage = getPackage(code)
  const { scripts, devDependencies } = codePackage

  scripts.build = 'webpack && ts-node dev-helpers/create-package.ts'
  scripts.start = 'node dist'

  codePackage.devDependencies = {
    ...devDependencies,

    '@types/node': '^14.14.39',
    'webpack': '^5.28.0',
    'webpack-cli': '^4.6.0',
    'babel-loader': '^8.2.2',
  }

  return {
    scaffold: {
      ...code.scaffold,

      'dev-helpers/dependencies.ts': dependenciesTxt,
      'dev-helpers/create-package.ts': createPackageTxt,
      'webpack.config.ts': webpackTxt,
    },
    getSrc() {
      return {
        'main.ts': mainTxt,
        'app.ts': appTxt,
        'app.spec.ts': appSpecTxt,
      }
    },
    getReadme() {
      return readmeTxt
    },
  }
}
