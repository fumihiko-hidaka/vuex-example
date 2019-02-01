'use strict';
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      './src/main.js'
    ]
  },
  devServer: {
    contentBase: './dist',
    host: '0.0.0.0',
    watchContentBase: true,
    port: 3000,
  },
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.vue'],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules\/.*/,
        query: {
          presets: ['env'],
        },
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.html`,
    }),
  ]
};
