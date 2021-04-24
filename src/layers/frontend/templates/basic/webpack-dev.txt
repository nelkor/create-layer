import { HotModuleReplacementPlugin } from 'webpack'

export const devRoot = {
  mode: 'development',
  devServer: {
    hot: true,
    port: 5445,
  },
  devtool: 'inline-source-map',
}

export const devPlugins = [new HotModuleReplacementPlugin]
