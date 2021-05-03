import { Layer } from '@/types'
import { makeFrontend } from '@/layers/frontend/frontend'
import { getPackage, getCompilerOptions } from '@/tools/dissect-layer'

import readmeTxt from './templates/readme.txt'

const injectPreset = (layer: Layer) => {
  const babelRc = layer.scaffold['.babelrc'] as {
    presets: string[]
  }

  const lastPreset = babelRc.presets.pop() as string

  babelRc.presets.push('@babel/preset-react')
  babelRc.presets.push(lastPreset)
}

export const makeReact = (): Layer => {
  const frontend = makeFrontend()
  const co = getCompilerOptions(frontend)
  const fePackage = getPackage(frontend)
  const { devDependencies } = fePackage
  const webpackConfigName = 'webpack.config.ts'
  const presetTs = `'@babel/preset-typescript'`
  const presetBoth = `'@babel/preset-react', ${presetTs}`
  const webpackConfig = frontend.scaffold[webpackConfigName] as string

  injectPreset(frontend)

  frontend.scaffold[webpackConfigName] = webpackConfig
    .replace('.ts$', '.tsx?$')
    .replace(presetTs, presetBoth)

  co.jsx = 'react'

  fePackage.devDependencies = {
    ...devDependencies,

    '@types/react': '^17.0.3',
    '@types/react-dom': '^17.0.3',
    '@babel/preset-react': '^7.13.13',
    'eslint-plugin-react': '^7.23.1',
  }

  fePackage.dependencies = {
    'react': '^17.0.2',
    'react-dom': '^17.0.2',
  }

  return {
    scaffold: frontend.scaffold,
    getSrc() {
      return {}
    },
    getReadme() {
      return readmeTxt
    },
  }
}
