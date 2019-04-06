const webpack = require('webpack'),
  merge = require('webpack-merge'),
  path = require('path'),
  baseConfig = require('./webpack.common'),
  CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = merge(baseConfig, {
  entry: ['@babel/polyfill', './src/index'],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, '../dist'),
    chunkFilename: '[name].[contenthash].js',
    pathinfo: false
  },
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [new CleanWebpackPlugin(), new webpack.HashedModuleIdsPlugin()]
})
