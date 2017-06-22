'use strict';

let path = require('path');
let webpack = require('webpack');
let baseConfig = require('./base');
let defaultSettings = require('./defaults');

// Add needed plugins here
var HtmlWebpackPlugin = require('html-webpack-plugin')
let ExtractTextPlugin = require('extract-text-webpack-plugin')
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

function getDefaultModules() {
  return {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        include: defaultSettings.srcPath,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
        // loader: 'style-loader!css-loader!postcss-loader'
      },
      {
        test: /\.sass/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader?outputStyle=expanded&indentedSyntax!postcss-loader')
      },
      {
        test: /\.scss/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader?outputStyle=expanded!postcss-loader')
        // loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded!postcss-loader'
      },
      {
        test: /\.less/,
        loader: ExtractTextPlugin.extract('style-loader','css-loader!less-loader!postcss-loader')
      },
      {
        test: /\.styl/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader!postcss-loader')
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=8192&name=imgs/[name].[sha512:hash:base64:7].[ext]'
      },
      {
        test: /\.(mp4|ogg)$/,
        loader: 'file-loader&name=video/[name].[sha512:hash:base64:7].[ext]'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test   : /\.(woff|woff2)/,
        loader : 'file-loader?limit=100000&mimetype=application/font-woff&name=font/[name].[sha512:hash:base64:7].[ext]'
      },
      {
        test   : /\.ttf/,
        loader : 'file?prefix=font&name=font/[name].[sha512:hash:base64:7].[ext]'
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
  entry: path.join(__dirname, '../src/index'),
  cache: false,
  devtool: 'false',
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin('./css/[name].[hash:8].css'),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/favicon.ico',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    })
  ],
  module: getDefaultModules()
});

// Add needed loaders to the defaults here
config.module.loaders.push({
  test: /\.(js|jsx)$/,
  loader: 'babel',
  include: [].concat(
    config.additionalPaths,
    [ path.join(__dirname, '/../src') ]
  )
});

module.exports = config;
