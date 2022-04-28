import { Layer } from '@/types'
import { makeCode } from '@/layers/code/code'
import { getPackage, getCompilerOptions } from '@/tools/dissect-layer'
import { wrapHtml } from '@/tools/wrap-html'
import arraySumTxt from '@/layers/code/templates/src/array-sum.txt'
import arraySumSpecTxt from '@/layers/code/templates/src/array-sum-spec.txt'

import indexDTxt from './templates/basic/index-d.txt'
import webpackDevTxt from './templates/basic/webpack-dev.txt'
import webpackProdTxt from './templates/basic/webpack-prod.txt'
import webpackTxt from './templates/basic/webpack-config.txt'
import faviconTxt from './templates/src/favicon.txt'
import indexTxt from './templates/src/index.txt'
import mainScssTxt from './templates/src/main-scss.txt'
import mainTsTxt from './templates/src/main-ts.txt'
import readmeTxt from './templates/readme.txt'

export const makeFrontend = (): Layer => {
  const code = makeCode()
  const co = getCompilerOptions(code)
  const codePackage = getPackage(code)
  const { scripts, devDependencies } = codePackage

  co.lib.push('dom')

  code.scaffold['index.d.ts'] = indexDTxt

  scripts['format-scss'] = 'prettier **/*.scss --write'
  scripts.build = 'webpack'
  scripts.serve = 'webpack serve'

  codePackage.devDependencies = {
    ...devDependencies,

    '@types/copy-webpack-plugin': '^10.1.0',
    '@types/mini-css-extract-plugin': '^2.5.1',
    'babel-loader': '^8.2.5',
    'copy-webpack-plugin': '^10.2.4',
    'css-loader': '^6.7.1',
    'html-webpack-plugin': '^5.5.0',
    'mini-css-extract-plugin': '^2.6.0',
    'sass': '^1.51.0',
    'sass-loader': '^12.6.0',
    'style-loader': '^3.3.1',
    'webpack': '^5.72.0',
    'webpack-cli': '^4.9.2',
    'webpack-dev-server': '^4.8.1',
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
        'index.html': wrapHtml('Frontend', indexTxt),
        'main.scss': mainScssTxt,
        'main.ts': mainTsTxt,
        'array-sum.ts': arraySumTxt,
        'array-sum.spec.ts': arraySumSpecTxt,
      }
    },
    getReadme() {
      return readmeTxt
    },
  }
}
