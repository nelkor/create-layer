import { Layer } from '@/types'
import { makeCode } from '@/layers/code/code'
import { getPackage } from '@/tools/dissect-layer'

import webpackTxt from './templates/basic/webpack-config.txt'
import readmeTxt from './templates/basic/readme.txt'
import mainTxt from './templates/src/main.txt'
import appTxt from './templates/src/app.txt'
import appSpecTxt from './templates/src/app-spec.txt'

export const makeBackend = (): Layer => {
  const code = makeCode()

  const codePackage = getPackage(code)
  const { scripts, devDependencies } = codePackage

  scripts.build = 'webpack'
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
