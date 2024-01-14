/* eslint-disable import/no-extraneous-dependencies */
require('shelljs/global');

const chalk = require('chalk');
const fs = require('fs-extra');
const { argv } = require('yargs');
const { transformAsinList, fetchAsinData } = require('./asin');

const asinList = require('../../src/data/asinList.json');

const asinChunkSize = 30;
const asinDataRequests = [];
const mockAsinFile = './src/data/mockAsinData.json';
const CIA = '%7B%7D';

const generateAsin = async () => {
  const asinArray = transformAsinList(asinList);
  const { locale } = argv;

  try {
    console.log(
      `${chalk.greenBright(
        `Fetching data for ${Object.keys(asinArray).length} ASINs.`,
      )}\n`,
    );

    for (let i = 0; i < asinArray.length; i += asinChunkSize) {
      const chunk = asinArray.slice(i, i + asinChunkSize);
      asinDataRequests.push(fetchAsinData(chunk, CIA, locale));
    }

    Promise.all(asinDataRequests)
      .then(data => {
        if (data && data.length) {
          const entities = [];

          data.forEach(d => {
            entities.push(d.entities);
          });

          fs.writeFileSync(mockAsinFile, JSON.stringify(entities.flat(1)));

          console.log(
            `\n${chalk.black.bgGreen(' DONE ')} ${chalk.greenBright(
              'Successfully fetched ASIN data.',
            )}\n`,
          );
        }
      })
      .catch(e =>
        console.log(
          `\n${chalk.black.bgRed(' ERROR ')} ${chalk.redBright(e.message)}\n`,
        ),
      );
  } catch (err) {
    console.log(
      `\n${chalk.black.bgRed(' ERROR ')} ${chalk.redBright(err.message)}\n`,
    );
    process.exit(1);
  }
};

generateAsin();
