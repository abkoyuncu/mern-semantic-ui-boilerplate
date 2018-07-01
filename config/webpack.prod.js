const webpack = require('webpack');
const merge = require('webpack-merge');

const helpers = require('./helpers');
const commonConfig = require('./webpack.common');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


module.exports = merge(commonConfig, {
  output: {
    filename: 'js/[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  plugins:[
  new UglifyJSPlugin()        // Replaced the reference to webpack.optimize.UglifyJsPlugin
]
});
