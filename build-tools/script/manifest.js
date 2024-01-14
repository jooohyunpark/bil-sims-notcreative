/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
require('shelljs/global');

const fs = require('fs-extra');
const inquirer = require('inquirer');

const path = require('path');
const chalk = require('chalk');

const config = require('../config/config');
const manifest = require('../../src/asset-manifest.json');

const getManifest = async () => manifest;

const validateManifest = async () => {
  const missingIds = Object.keys(manifest).filter(k => {
    const id = manifest[k].physicalId;

    return !id || !id.length;
  });

  return missingIds;
};

// eslint-disable-next-line consistent-return
const checkManifest = async () => {
  try {
    const errors = await validateManifest();

    if (errors.length) {
      console.log(
        `\n${chalk.black.bgRed(' ERROR ')} ${chalk.redBright(
          `PhysicalIds are missing for ${chalk.redBright.bold(
            errors.join(','),
          )}.\n`,
        )}`,
      );

      console.log(
        `${chalk.whiteBright(
          `PhysicalIds can be generated automatically by running:`,
        )} ${chalk.whiteBright.bold(`yarn run upload:assets`)}\n`,
      );

      const answer = await inquirer.prompt([
        {
          type: 'confirm',
          name: 'proceed',
          message: `Do you want to proceed?`,
        },
      ]);

      if (!answer.proceed) {
        throw new Error('Operation cancelled.');
      }
    }

    return true;
  } catch (err) {
    throw err;
  }
};

const updateManifest = async newManifest => {
  const m = path.join(config.projectRoot, 'src/asset-manifest.json');

  const o = await fs.writeFileSync(m, JSON.stringify(newManifest, null, 2));

  console.log(
    `\n${chalk.black.bgGreen(' DONE ')} ${chalk.greenBright(
      'Successfully updated src/asset-manifest.json with new Physical IDs.',
    )}\n`,
  );

  return true;
};

module.exports = {
  getManifest,
  checkManifest,
  updateManifest,
};
