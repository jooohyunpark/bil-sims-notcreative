/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
require('shelljs/global');

const { generateFreeform, printFreeform } = require('./freeform');

const freeform = async () => {
  const { stylesheet, vendorsBundle, appBundle } = await generateFreeform();

  printFreeform({ stylesheet, vendorsBundle, appBundle });
};

freeform();
