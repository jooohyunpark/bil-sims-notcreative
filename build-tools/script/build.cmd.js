/* eslint-disable */
require('shelljs/global');

const pkg = require('../../package');
const { argv } = require('yargs');
const webpack = require('webpack');
const webpackConfig = require('../config/webpack/webpack.conf.prod.js');
const fs = require('fs-extra');
const chalk = require('chalk');
const inquirer = require('inquirer');
const { checkManifest } = require('./manifest');
const { uploadBundle } = require('./upload');

const config = require('../config/config');

fs.emptyDirSync(webpackConfig.output.path);

const buildWebpack = async () => {
  return new Promise(resolve => {
    webpack(webpackConfig, (err, stats) => {
      if (err) throw err;

      const info =
        stats.toString({
          colors: true,
          modules: false,
          children: false,
          chunks: false,
          chunkModules: false,
          reasons: false,
        }) + '\n';

      if (stats.hasErrors()) throw info;

      process.stdout.write(info);

      resolve();
    });
  });
};

const build = async () => {
  try {
    await checkManifest();

    await buildWebpack();

    if (argv.deploy) {
      await uploadBundle();

      console.log(
        `\n${chalk.black.bgGreen(' DONE ')} ${chalk.greenBright(
          'Successfully built and deployed to Media Central. Output copied to clipboard.',
        )}\n`,
      );
    }
  } catch (err) {
    console.log(
      `\n${chalk.black.bgRed(' ERROR ')} ${chalk.redBright(err.message)}\n`,
    );

    process.exit(1);
  }
};

build();
