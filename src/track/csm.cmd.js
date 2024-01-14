const fetch = require('node-fetch');
/* eslint-disable import/no-extraneous-dependencies */
const chalk = require('chalk');
const { COUNTER_TYPES } = require('./constants');

const { countersAvgCount, countersCount } = require('./counters');
const { counterDynamicCount } = require('./countersDynamic');

const pkg = require('../../package.json');

const metricsCount = Object.values({
  ...countersCount,
  ...counterDynamicCount,
}).map(
  counter =>
    `AmazonStoresReactWidgets:CustomCode-${pkg.campaign.tileId}:${counter}${COUNTER_TYPES.COUNT}`,
);

const metricsAvgCount = Object.values(countersAvgCount).map(
  counter =>
    `AmazonStoresReactWidgets:CustomCode-${pkg.campaign.tileId}:${counter}${COUNTER_TYPES.AVG}`,
);

const metrics = [...metricsCount, ...metricsAvgCount];

// const modifierLogin = 'bil-us-endemic';
const modifierLogin = 'bil-us-endemic';

const getBody = bodyMetrics => ({
  // modifierLogin replaces your alias in the CSM dashboard and
  // can be used to create a bucket to store metric lists
  modifierLogin,
  ldapGroup: 'None',
  expirationDate: 253392484149000,
  dataset: 'ClientLogs',
  threshold: 1,
  feeds: ['us'],
  breakdowns: { pageType: ['amazonstores'] },
  metrics: bodyMetrics,
});
