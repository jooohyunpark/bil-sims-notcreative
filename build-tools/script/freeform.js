/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
require('shelljs/global');

const fs = require('fs-extra');
const inquirer = require('inquirer');
const { spawn } = require('child_process');
const path = require('path');
const chalk = require('chalk');
const ejs = require('ejs');
const { argv } = require('yargs');

const config = require('../config/config');

const getMCPath = (physicalId, ext) =>
  `${config.mediaCentral.PHYSICAL_URL}${physicalId}.${ext}`;

const pbcopy = data => {
  const proc = spawn('pbcopy');
  proc.stdin.write(data);
  proc.stdin.end();
};

// eslint-disable-next-line consistent-return
const generateFreeform = async () => {
  const validate = async input => {
    if (input && input.length) return true;

    return 'Please enter a valid PhysicalId.';
  };

  try {
    const freeform = fs.readFileSync(
      path.join(config.projectRoot, 'src/template/index.freeform.ejs'),
      'utf8',
    );

    const physicalIds = await inquirer.prompt([
      {
        type: 'input',
        name: 'stylesheet',
        message: 'Please enter the PhysicalId for app.css',
        validate,
      },
      {
        type: 'input',
        name: 'vendorsBundle',
        message: 'Please enter the PhysicalId for vendors.js',
        validate,
      },
      {
        type: 'input',
        name: 'appBundle',
        message: 'Please enter the PhysicalId for app.js',
        validate,
      },
    ]);

    return {
      ...physicalIds,
    };
  } catch (err) {
    throw err;
  }
};

const printFreeform = async ({ stylesheet, vendorsBundle, appBundle }) => {
  try {
    ejs.renderFile(
      path.join(config.projectRoot, 'src/template/index.freeform.ejs'),
      {
        escape: argv.escape,
        customId: config.customId,
        tileId: config.tileId,
        stylesheet: getMCPath(stylesheet, 'css'),
        vendorsBundle: getMCPath(vendorsBundle, 'js'),
        appBundle: getMCPath(appBundle, 'js'),
      },
      { rmWhitespace: true },
      (err, str) => {
        if (err) {
          console.log(err);
        } else {
          // str => Rendered HTML string
          console.log(`\n${chalk.whiteBright(str)}\n`); // eslint-disable-line
          pbcopy(str);
        }
      },
    );
  } catch (err) {
    throw err;
  }
};

module.exports = {
  generateFreeform,
  printFreeform,
};
