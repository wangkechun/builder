/*
 * @file webpack config for development
 * @author nighca <nighca@live.cn>
 */

const getCommonConfig = require('./common')
const findBuildConfig = require('../utils/build-conf').find

module.exports = () =>
  Promise.all([getCommonConfig(), findBuildConfig()]).then(
    ([config, buildConfig]) => {
      config = require('./addons/sourcemap')(config)
      config = require('./addons/fork-ts-checker-webpack-plugin')(config)
      config = require('./addons/autodll')(config, buildConfig.dll)
      return config
    }
  )
