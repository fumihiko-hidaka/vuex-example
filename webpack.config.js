'use strict';
const HtmlWebpackPlugin = require('html-webpack-plugin');

const eventName = process.env.npm_lifecycle_event;

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
    publicPath: eventName === 'build' ? './' : '/',
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
        exclude: /node_modules\/.*/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.html`,
    }),
  ]
};
