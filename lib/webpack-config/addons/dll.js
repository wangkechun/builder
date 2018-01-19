/*
 * @file config for configure postcss
 * @author nighca <nighca@live.cn>
 */
const webpack = require("webpack");
const update = require("immutability-helper");
const AddAssetHtmlPlugin = require("add-asset-html-webpack-plugin");
const path = require("path");
const paths = require("../../utils/paths");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = (webpackConfig, options) => {
  webpackConfig = update(webpackConfig, {
    plugins: {
      $push: [
        new ForkTsCheckerWebpackPlugin(),
        new webpack.DllReferencePlugin({
          context: paths.abs("."),
          manifest: paths.abs("./build/manifest.json")
        }),
        new AddAssetHtmlPlugin({
          filepath: paths.abs("./build/vendor.dll.js"),
          hash: true
        })
      ]
    }
  });

  return webpackConfig;
};
