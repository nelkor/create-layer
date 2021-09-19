export const devRoot = {
  mode: 'development',
  output: {
    publicPath: '/',
  },
  devServer: {
    hot: true,
    port: 5445,
    historyApiFallback: true,
  },
  devtool: 'inline-source-map',
}
