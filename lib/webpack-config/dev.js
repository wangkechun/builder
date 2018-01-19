/*
 * @file webpack config for development
 * @author nighca <nighca@live.cn>
 */

const getCommonConfig = require('./common')

module.exports = () => getCommonConfig().then(
  config => {
    config = require('./addons/sourcemap')(config)
    config = require('./addons/dll')(config)
    console.log(JSON.stringify(config, null, "  "));
    return config
  }
)
