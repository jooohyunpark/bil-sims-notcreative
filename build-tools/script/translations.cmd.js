/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
require('shelljs/global');

const chalk = require('chalk');

const fs = require('fs-extra');
const inquirer = require('inquirer');
const { execSync } = require('child_process');

const {
  readPantherCfgFile,
  generatePantherCfg,
  generateTranslations,
} = require('./translations');

const translate = async () => {
  try {
    readPantherCfgFile().then(e => {
      if (e === 'NOCONFIG') {
        generatePantherCfg().then(() => {
          generateTranslations();
        });
        return;
      }

      generateTranslations();
    });
  } catch (err) {
    console.log(
      `\n${chalk.black.bgRed(' ERROR ')} ${chalk.redBright(err.message)}\n`,
    );
    process.exit(1);
  }
};

translate();
