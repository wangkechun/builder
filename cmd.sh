#!/bin/bash

# 安装输入（被构建）项目的依赖
cd ${BUILD_ROOT:="/fec/input"}
yarn install --pure-lockfile

# work around for postcss
# TODO: remove me
echo "/* work around for postcss */ module.exports = {}" > postcss.config.js

cd /fec

# 开发环境执行 serve
if [[ "${BUILD_ENV}" == "development" ]]; then
  NODE_ENV=$BUILD_ENV BUILD_ROOT=$BUILD_ROOT npm run serve
fi

# 生产环境执行 build
if [[ "${BUILD_ENV}" == "production" ]]; then
  NODE_ENV=$BUILD_ENV BUILD_ROOT=$BUILD_ROOT npm run build
fi