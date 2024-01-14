// eslint-disable-next-line import/no-extraneous-dependencies
const chalk = require('chalk');
const packageJSON = require('../../package.json');

const { tileId } = packageJSON.campaign;

if (tileId.length === 0) {
  // eslint-disable-next-line
  console.log(
    `${chalk.yellowBright(
      '\nNo tileId found in package.json. Please add in your Stores Custom Code tileId to deploy and escape iframe.\n',
    )}`,
  );

  process.exit(1);
} else {
  // eslint-disable-next-line
  console.log(`\n${chalk.whiteBright(`Your tileId is: ${tileId}`)}\n`);
}
