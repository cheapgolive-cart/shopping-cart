'use strict';
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
resolve: {
        modules: [path.resolve('./src/server/'),'node_modules'],
		extensions: ['.js']
    },
	devtool: 'cheap-eval-source-map',
	
  entry: {
  server :'server.js'
  },
  output: {
    path: __dirname+'/target/server',
    filename: '[name].bundle.js'
  },
  module:{
    rules: [
	  {
	    test: /\.js$/,
		exclude: /node_modules/,
		enforce: 'pre',
		use: [{loader : 'eslint-loader', options: { configFile:'.eslintrc'}}]

	  }
	]
  },
  target : 'node',
  externals: nodeExternals(),
  node: {
     __dirname: false
  }
  
};