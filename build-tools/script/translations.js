/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
require('shelljs/global');

const chalk = require('chalk');

const fs = require('fs-extra');
const inquirer = require('inquirer');
const { execSync } = require('child_process');

const readPantherCfgFile = () =>
  new Promise((resolve, reject) => {
    fs.readFile('./panther.cfg', 'utf8', (err, data) => {
      if (data) {
        console.log(
          'Located a panther config file. Getting latest translations',
        );
        resolve('CONFIGFOUND');
      } else {
        console.log('Panther config file not detected. Generating a new one');
        resolve('NOCONFIG');
      }
    });
  });

const generatePantherCfg = () =>
  new Promise((resolve, reject) => {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'rootResources',
          message: 'Define the path to your resource folder from the root.',
          default: 'src/locale/config',
        },
        {
          type: 'input',
          name: 'sourceLocale',
          message: 'Please enter your source locale',
          default: 'en-US',
        },
        {
          type: 'input',
          name: 'email',
          message: 'Please enter your Amazon email',
        },
        {
          type: 'list',
          name: 'i18nFamily',
          message: 'Please select your i18nFamily from the list below',
          choices: ['general', 'advertising'],
        },
      ])
      .then(answers => {
        fs.writeFileSync(`panther.cfg`, JSON.stringify(answers), 'utf8');
        resolve();
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });

const writeTranslationImportFile = async () => {
  let fileImports = '';
  const files = fs.readdirSync('src/locale/translations');

  files.forEach(file => {
    if (file === undefined || file === 'index.js') return;

    const importName = file
      .replaceAll('-', '')
      .replace('content', '')
      .replace('.puff.json', '');
    const fileString = `export {default as ${importName}} from './${file}';`;
    fileImports += fileString;
  });

  fs.writeFile('src/locale/translations/index.js', fileImports);
};

const generateTranslations = async () => {
  await execSync(
    `panther translate && rm -rf src/locale/translations && mv translations src/locale`,
  );

  await writeTranslationImportFile();
};

module.exports = {
  readPantherCfgFile,
  generatePantherCfg,
  generateTranslations,
  writeTranslationImportFile,
};
