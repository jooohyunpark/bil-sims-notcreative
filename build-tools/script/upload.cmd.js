/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
require('shelljs/global');

const chalk = require('chalk');
const { argv } = require('yargs');

const { uploadAssets, uploadBundle } = require('./upload');

const upload = async () => {
  try {
    if (argv.assets) {
      await uploadAssets();
    }

    if (argv.bundle) {
      await uploadBundle();
    }
  } catch (err) {
    console.log(err);
    console.log(
      `\n${chalk.black.bgRed(' ERROR ')} ${chalk.redBright(err.message)}\n`,
    );

    process.exit(1);
  }
};

upload();
