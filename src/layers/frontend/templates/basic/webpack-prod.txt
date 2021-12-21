import { resolve } from 'path'

import MiniCssPlugin from 'mini-css-extract-plugin'

export const prodRoot = {
  mode: 'production',
  output: {
    publicPath: '/',
    filename: 'bundle.[contenthash].js',
    path: resolve('dist'),
    clean: true,
  },
}

export const prodPlugins = [
  new MiniCssPlugin({ filename: '[contenthash].css' }),
]
