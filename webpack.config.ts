import { resolve } from 'path'

import alias from './dev-helpers/alias'

export default {
  target: 'node',
  mode: 'production',
  entry: resolve('src/main.ts'),
  output: {
    path: resolve('dist'),
    filename: 'index.js',
  },
  resolve: {
    alias,
    extensions: ['.js', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: ['@babel/preset-typescript'],
        },
      },
      {
        test: /\.txt$/,
        type: 'asset/source',
      },
    ],
  },
}
