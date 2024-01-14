/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const chalk = require('chalk');
const { argv } = require('yargs');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const { getManifest } = require('./webpack.helpers');

const packageJSON = require('../../../package.json');

module.exports = ({
  config,
  isDevelopment,
  isProduction,
  buildType,
}) => webpackConfig => {
  /*
   * ------------------------------------------------
   * Common plugins (for development and production)
   * ------------------------------------------------
   */
  const plugins = [];

  if (isDevelopment) {
    /*
     * ------------------------------------------------
     * Development-only plugins
     * ------------------------------------------------
     */
    plugins.push(
      // note: the FriendlyErrorsWebpackPlugin is injected from webpack.conf.dev.js

      new HtmlWebpackPlugin({
        filename: config.devServer.indexHtml,
        template: path.join(config.projectRoot, 'src/template/index.ejs'),
        inject: true,
        version: config.dist.versionPath,
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: false,
        },

        customId: config.customId,
        tileId: config.tileId,
        campaignTitle: packageJSON.campaign.title,
        campaignDescription: packageJSON.campaign.description,
      }),
    );
  } else {
    /*
     * ------------------------------------------------
     * Production-only plugins
     * ------------------------------------------------
     */
    plugins.push(
      // __DEV__ webpack.DefinePlugin is added from webpack.conf.dev.js
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(config.env[buildType]),
        CUSTOM_ID: JSON.stringify(`${packageJSON.campaign.id}`),
        ESCAPE_IFRAME: argv.escape || false,
        __DEV__: false,
        __ASSET_MANIFEST__: JSON.stringify(getManifest(buildType)),
      }),
    );

    plugins.push(
      new MiniCssExtractPlugin({
        filename: path.posix.join(config.dist.versionPath, `css/[name].css`),
      }),
      new ImageminPlugin({
        disable: !config.dist.enableImageOptimization,
        svgo: null,
        gifsicle: null,
        pngquant: config.dist.enablePNGQuant
          ? { quality: config.dist.pngQuantQuality }
          : null,
      }),
    );

    if (config.dist.enableGZIP) {
      plugins.push(
        new CompressionPlugin({
          test: /\.(js|css)$/,
          algorithm: 'gzip',
          deleteOriginalAssets: config.dist.deleteOriginalGZIP,
        }),
      );
    }

    if (config.enableBundleAnalyzer) {
      plugins.push(
        new BundleAnalyzerPlugin({
          defaultSizes: 'gzip',
        }),
      );
    }

    if (isProduction) {
      plugins.push(
        new ProgressBarPlugin({
          format: `${chalk.green.bold(
            'Building for production',
          )} [:bar] ${chalk.green.bold(':percent')} (:elapsed seconds)`,
        }),
      );
    }
  }

  return {
    ...webpackConfig,
    plugins,
  };
};
