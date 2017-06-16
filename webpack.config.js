const path = require('path');
const webpack = require('webpack');

var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: "source-map",
  context: __dirname,
  entry: [ "babel-polyfill", './app/server.js'],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'server.js'
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: /app/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0']
        }
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new CopyWebpackPlugin([
        { from: 'resources', to: 'resources'},
        { from: 'templates.js' },
        { from: 'index.html'}
    ]),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
          screw_ie8: true,
          keep_fnames: true
      },
      compress: {
          screw_ie8: true
      },
      comments: false,
      dead_code: true
    }),
  ]
};