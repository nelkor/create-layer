import { resolve } from 'path'

import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import MiniCssPlugin from 'mini-css-extract-plugin'

export const prodRoot = {
  mode: 'production',
  output: {
    filename: 'bundle.[contenthash].js',
    path: resolve('dist'),
  },
}

export const prodPlugins = [
  new CleanWebpackPlugin,
  new MiniCssPlugin({ filename: '[contenthash].css' }),
]
