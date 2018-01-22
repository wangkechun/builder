const update = require('immutability-helper')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const fs = require('fs')

module.exports = (webpackConfig, options) => {
  if (fs.existsSync('tsconfig.json')) {
    webpackConfig = update(webpackConfig, {
      plugins: {
        $push: [new ForkTsCheckerWebpackPlugin()]
      }
    })
  }
  return webpackConfig
}
