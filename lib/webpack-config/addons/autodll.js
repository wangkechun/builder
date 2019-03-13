const update = require('immutability-helper')
const AutoDllPlugin = require('autodll-webpack-plugin')
const paths = require('../../utils/paths')
const fs = require('fs')

const _ = require('lodash')
module.exports = (webpackConfig, openDll) => {
  if (fs.existsSync(paths.abs('dll.config.js')) && openDll !== false) {
    const dllConfig = require(paths.abs('dll.config.js'))
    webpackConfig = update(webpackConfig, {
      plugins: {
        $push: [
          new AutoDllPlugin({
            inject: true,
            debug: true,
            path: './tmp/autodll',
            filename: '[name].dll.js',
            entry: {
              vendor: dllConfig.vendor
            }
          })
        ]
      }
    })
  }
  return webpackConfig
}
