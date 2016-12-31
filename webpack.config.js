var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = [
  {
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
  },
  {
    entry: './server/renderHtml.js',
    output: {
      filename: 'renderHtml.generated.js',
      path: path.resolve('./server/'),
      libraryTarget: 'commonjs2',
    },
    target: 'node',
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
  }
]