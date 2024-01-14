const readline = require('readline');
const fetch = require('node-fetch');
/* eslint-disable import/no-extraneous-dependencies */
const chalk = require('chalk');

const { countersAvgCount, countersCount } = require('./counters');
const { counterDynamicCount } = require('./countersDynamic');

const pkg = require('../../package.json');

const metricsCount = Object.values({
  ...countersCount,
  ...counterDynamicCount,
}).map(
  counter =>
    `AmazonStoresReactWidgets:CustomCode-${pkg.campaign.tileId}:${counter}`,
);

const metricsAvgCount = Object.values(countersAvgCount).map(
  counter =>
    `AmazonStoresReactWidgets:CustomCode-${pkg.campaign.tileId}:${counter}`,
);

const metrics = [...metricsCount, ...metricsAvgCount];

const csmChunkSize = 50;
for (let i = 0; i < metrics.length; i += csmChunkSize) {
  const chunk = metrics.slice(i, i + csmChunkSize);

  console.log(chunk.join(' '));
  console.log(
    '-----------------------------------------------------------------------------',
  );
}
