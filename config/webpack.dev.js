const webpack = require('webpack'),
  merge = require('webpack-merge'),
  path = require('path'),
  ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin'),
  baseConfig = require('./webpack.common')

module.exports = merge(baseConfig, {
  entry: ['@babel/polyfill', 'react-hot-loader/patch', './src/index'],
  output: {
    filename: 'mian.js',
    path: path.resolve(__dirname, '../dist')
  },
  mode: 'development',
  devServer: {
    port: 2019,
    hot: true
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ForkTsCheckerWebpackPlugin()
  ],
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false
  }
})
