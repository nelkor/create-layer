import { Layer } from '@/types'
import { makeCode } from '@/layers/code/code'
import { getPackage } from '@/tools/dissect-layer'

import indexDTxt from './templates/basic/index-d.txt'
import webpackDevTxt from './templates/basic/webpack-dev.txt'
import webpackProdTxt from './templates/basic/webpack-prod.txt'
import webpackTxt from './templates/basic/webpack-config.txt'
import readmeTxt from './templates/basic/readme.txt'
import faviconTxt from './templates/src/favicon.txt'
import indexTxt from './templates/src/index.txt'
import mainScssTxt from './templates/src/main-scss.txt'
import mainTsTxt from './templates/src/main-ts.txt'

export const makeFrontend = (): Layer => {
  const code = makeCode()

  const tsConfig = code.scaffold['tsconfig.json'] as {
    compilerOptions: { lib: string[] }
  }

  tsConfig.compilerOptions.lib.push('dom')

  code.scaffold['index.d.ts'] = indexDTxt

  const codePackage = getPackage(code)
  const { scripts, devDependencies } = codePackage

  scripts.build = 'webpack'
  scripts.serve = 'webpack serve'

  codePackage.devDependencies = {
    ...devDependencies,

    'webpack': '^5.28.0',
    'webpack-cli': '^4.6.0',
    'webpack-dev-server': '^3.11.2',
    'babel-loader': '^8.2.2',
    'css-loader': '^5.2.0',
    'sass-loader': '^11.0.1',
    'style-loader': '^2.0.0',
    'mini-css-extract-plugin': '^1.4.0',
    'sass': '^1.32.8',
    'html-webpack-plugin': '^5.3.1',
    'clean-webpack-plugin': '^3.0.0',
    'copy-webpack-plugin': '^8.1.0',
    '@types/mini-css-extract-plugin': '^1.4.1',
    '@types/copy-webpack-plugin': '^6.4.1',
  }

  return {
    scaffold: {
      ...code.scaffold,

      'dev-helpers/webpack-dev.ts': webpackDevTxt,
      'dev-helpers/webpack-prod.ts': webpackProdTxt,
      'webpack.config.ts': webpackTxt,
    },
    getSrc() {
      return {
        'favicon.svg': faviconTxt,
        'index.html': indexTxt,
        'main.scss': mainScssTxt,
        'main.ts': mainTsTxt,
      }
    },
    getReadme() {
      return readmeTxt
    },
  }
}
