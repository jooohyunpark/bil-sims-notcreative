const { spawn } = require('child_process');
const chalk = require('chalk');

const asins = require('../../src/data/asins');

const asinsString = asins.join(',');

const pbcopy = data => {
  const proc = spawn('pbcopy');
  proc.stdin.write(data);
  proc.stdin.end();
};

console.log(`${chalk.whiteBright(`${asinsString}`)}\n`);

pbcopy(asinsString);
