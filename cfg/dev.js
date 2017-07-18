'use strict';

let path = require('path');
let webpack = require('webpack');
let baseConfig = require('./base');
let defaultSettings = require('./defaults');

// Add needed plugins here
var HtmlWebpackPlugin = require('html-webpack-plugin')

function getDefaultModules() {
  return {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        include: defaultSettings.srcPath,
        exclude: /third/,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      },
      {
        test: /\.sass/,
        loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax!postcss-loader'
      },
      {
        test: /\.scss/,
        loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded!postcss-loader'
      },
      {
        test: /\.less/,
        loader: 'style-loader!css-loader!less-loader!postcss-loader'
      },
      {
        test: /\.styl/,
        loader: 'style-loader!css-loader!stylus-loader!postcss-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.(mp4|ogg)$/,
        loader: 'file-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test   : /\.(woff|woff2)/,
        loader : 'file-loader?limit=100000&mimetype=application/font-woff'
      },
      {
        test   : /\.ttf/,
        loader : 'file?prefix=font'
      },
      {
        test   : /\.eot/,
        loader : 'file?prefix=font/'
      },
      {
        test   : /\.svg$/i,
        loader : 'svg-sprite'
      }
    ]
  };
}

let config = Object.assign({}, baseConfig, {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:' + defaultSettings.port,
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  cache: true,
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/favicon.ico'
    })
  ],
  module: getDefaultModules()
});

// Add needed loaders to the defaults here
config.module.loaders.push({
  test: /\.(js|jsx)$/,
  loader: 'react-hot!babel-loader',
  include: [].concat(
    config.additionalPaths,
    [ path.join(__dirname, '/../src') ]
  )
});

module.exports = config;
