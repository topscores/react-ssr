var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = [{
  entry: './client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve('./dist'),
    publicPath: '/dist/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
      },
      {
        test: /\.css$/,
        loader: 'style!css?module',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./client/index.html'),
    }),
  ],
}]