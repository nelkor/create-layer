import { Layer } from '@/types'
import { makeCode } from '@/layers/code/code'
import { getPackage } from '@/tools/dissect-layer'

import webpackTxt from './templates/basic/webpack-config.txt'
import readmeTxt from './templates/basic/readme.txt'
import mainTsTxt from './templates/src/main-ts.txt'

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
      'README.md': readmeTxt,
    },
    getSrc() {
      return {
        'main.ts': mainTsTxt,
      }
    },
  }
}
