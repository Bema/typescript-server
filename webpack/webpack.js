const nodeExternals = require('webpack-node-externals');
const loaders = require("./loaders")
const path = require('path')
const fs = require('fs')

const BUILD_PATH = path.resolve('./build')
const SRC_PATH = path.resolve('./src')
const NODE_ENV =  process.env.NODE_ENV
const PORT = process.env.PORT


module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  context: SRC_PATH,
  entry: 'app.ts',
  output: {
    path: BUILD_PATH,
    filename: 'app.js',
  },
  resolve: {
    extensions: [
      '.ts',
      '.js',
      '.json'
    ],
    modules: [
      SRC_PATH,
      'node_modules',
    ],
  },
  module:{
    loaders: loaders
  }
}
