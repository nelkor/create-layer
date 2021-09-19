import { resolve } from 'path'

import HtmlPlugin from 'html-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import MiniCssPlugin from 'mini-css-extract-plugin'

import { alias } from './dev-helpers/alias'
import { devRoot } from './dev-helpers/webpack-dev'
import { prodRoot, prodPlugins } from './dev-helpers/webpack-prod'

const isDev = process.argv[2] == 'serve'

export default {
  ...(isDev ? devRoot : prodRoot),

  entry: resolve('src/main.ts'),
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
        test: /\.s[ac]ss$/,
        use: [
          isDev ? 'style-loader' : MiniCssPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(woff2|jpg|png|webp|svg)$/,
        type: 'asset',
      },
    ],
  },
  plugins: [
    ...(isDev ? [] : prodPlugins),

    new HtmlPlugin({ template: resolve('src/index.html') }),
    new CopyPlugin({
      patterns: [
        {
          from: resolve('src/favicon.svg'),
          to: resolve('dist'),
        },
      ],
    }),
  ],
}
