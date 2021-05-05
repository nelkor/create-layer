import { Layer } from '@/types'
import { makeFrontend } from '@/layers/frontend/frontend'
import {
  getPackage,
  getCompilerOptions,
  getEslint,
} from '@/tools/dissect-layer'
import { wrapHtml } from '@/tools/wrap-html'
import faviconTxt from '@/layers/frontend/templates/src/favicon.txt'
import mainScssTxt from '@/layers/frontend/templates/src/main-scss.txt'

import appTxt from './templates/src/app.txt'
import mainTsTxt from './templates/src/main-ts.txt'
import readmeTxt from './templates/readme.txt'

const injectPreset = (layer: Layer) => {
  const babelRc = layer.scaffold['.babelrc'] as {
    presets: string[]
  }

  const lastPreset = babelRc.presets.pop() as string

  babelRc.presets.push('@babel/preset-react')
  babelRc.presets.push(lastPreset)
}

const updatePackage = (layer: Layer) => {
  const layerPackage = getPackage(layer)
  const { devDependencies, scripts } = layerPackage

  scripts.lint = 'eslint . --ext .ts,.tsx --fix'

  layerPackage.devDependencies = {
    ...devDependencies,

    '@types/react': '^17.0.3',
    '@types/react-dom': '^17.0.3',
    '@babel/preset-react': '^7.13.13',
    'eslint-plugin-react': '^7.23.1',
  }

  layerPackage.dependencies = {
    'react': '^17.0.2',
    'react-dom': '^17.0.2',
  }
}

const updateEslint = (layer: Layer) => {
  const eslint = getEslint(layer)

  eslint.extends.push('plugin:react/recommended')
  eslint.settings.react = { version: 'detect' }

  eslint.rules = {
    ...eslint.rules,

    'react/jsx-uses-vars': 2,
    'react/jsx-boolean-value': 2,
    'react/self-closing-comp': 2,
    'react/jsx-fragments': 2,
  }
}

export const makeReact = (): Layer => {
  const frontend = makeFrontend()
  const compilerOptions = getCompilerOptions(frontend)
  const webpackConfigName = 'webpack.config.ts'
  const presetTs = `'@babel/preset-typescript'`
  const presetBoth = `'@babel/preset-react', ${presetTs}`
  const webpackConfig = frontend.scaffold[webpackConfigName] as string

  injectPreset(frontend)
  updatePackage(frontend)
  updateEslint(frontend)

  frontend.scaffold[webpackConfigName] = webpackConfig
    .replace("'.ts'", "'.ts', '.tsx'")
    .replace('.ts$', '.tsx?$')
    .replace(presetTs, presetBoth)

  compilerOptions.jsx = 'react'

  return {
    scaffold: frontend.scaffold,
    getSrc() {
      return {
        'App.tsx': appTxt,
        'main.ts': mainTsTxt,
        'main.scss': mainScssTxt,
        'favicon.svg': faviconTxt,
        'index.html': wrapHtml('React', '<div id="react-root"></div>'),
      }
    },
    getReadme() {
      return readmeTxt
    },
  }
}
