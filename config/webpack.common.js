const path = require('path'),
  // webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jsx|tsx|ts|js)?$/,
        use: [
          { loader: 'babel-loader', options: { cacheDirectory: true } },
          { loader: 'eslint-loader', options: { fix: true } }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: ['url-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'just dodo',
      favicon: './src/images/favicon.ico'
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  }
}
