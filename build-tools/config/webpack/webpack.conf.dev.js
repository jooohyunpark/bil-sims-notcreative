// eslint-disable-next-line import/no-extraneous-dependencies
const detectPort = require('detect-port');
// eslint-disable-next-line import/no-extraneous-dependencies
const FriendlyErrorsWebpackPlugin = require('@soda/friendly-errors-webpack-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack');

const { detectHost, getManifest } = require('./webpack.helpers');

const WebpackBaseConfig = require('./webpack.conf.base');

const config = require('../config');

const packageJSON = require('../../../package.json');

const { DEVELOPMENT } = config.buildTypes;

module.exports = async () => {
  const devWebpackConfig = WebpackBaseConfig(DEVELOPMENT);

  // set PORT
  const port = await detectPort(config.devServer.port);

  process.env.PORT = port;
  devWebpackConfig.devServer.port = port;

  // set HOST
  const host = await detectHost(port);

  process.env.PUBLIC_PATH = host;
  devWebpackConfig.output.publicPath = host;

  // note: we inject this plugin here because we need access to the port
  devWebpackConfig.plugins.push(
    new webpack.DefinePlugin({
      'process.env': JSON.stringify({
        ...config.env[DEVELOPMENT],
        PUBLIC_PATH: host,
      }),
      CUSTOM_ID: JSON.stringify(`${packageJSON.campaign.id}`),
      ESCAPE_IFRAME: false,
      __DEV__: true,
      __ASSET_MANIFEST__: JSON.stringify(getManifest(DEVELOPMENT)),
    }),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [
          `Your application is running here: ${
            config.devServer.useHttps ? 'https' : 'http'
          }://localhost:${port}`,
        ],
      },
    }),
  );

  return devWebpackConfig;
};
