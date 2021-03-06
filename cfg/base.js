'use strict';
let path = require('path');
let defaultSettings = require('./defaults');

// Additional npm or bower modules to include in builds
// Add all foreign plugins you may need into this array
// @example:
// let npmBase = path.join(__dirname, '../node_modules');
// let additionalPaths = [ path.join(npmBase, 'react-bootstrap') ];
let additionalPaths = [];

module.exports = {
  additionalPaths: additionalPaths,
  port: defaultSettings.port,
  debug: true,
  devtool: 'eval',
  output: {
    path: path.join(__dirname, '/../dist'),
    filename: 'js/[name].[hash:8].js',
    publicPath: defaultSettings.publicPath,
    chunkFilename: 'js/[name].[chunkhash:5].min.js'
  },
  devServer: {
    contentBase: './src/',
    historyApiFallback: true,
    hot: true,
    port: defaultSettings.port,
    publicPath: defaultSettings.publicPath,
    noInfo: false,
    disableHostCheck: true
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      '@components': `${defaultSettings.srcPath}/components/`,
      '@containers': `${defaultSettings.srcPath}/containers`,
      '@styles': `${defaultSettings.srcPath}/styles/`,
      '@config': `${defaultSettings.srcPath}/config/` + process.env.REACT_WEBPACK_ENV,
      'react/lib/ReactMount': 'react-dom/lib/ReactMount',
      '@actionTypes': `${defaultSettings.srcPath}/redux/actionTypes/`,
      '@actions': `${defaultSettings.srcPath}/redux/actions/`,
      '@reducers': `${defaultSettings.srcPath}/redux/reducers/`,
      '@store': `${defaultSettings.srcPath}/redux/store/`,
      '@service': `${defaultSettings.srcPath}/service/`,
      '@template': `${defaultSettings.srcPath}/template/`,
      '@pages':  `${defaultSettings.srcPath}/pages/`,
      '@utils': `${defaultSettings.srcPath}/utils/`,
      '@assets': `${defaultSettings.srcPath}/assets`
    }
  },
  module: {}
};
