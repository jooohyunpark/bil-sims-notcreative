import { MetricPublisher } from '@amzn/tina-tracking';
import { MetricPublisher as AdtPublisher } from '@amzn/adt-metrics';

const { countersAvgCount, countersCount } = require('./counters');
const { counterDynamicCount } = require('./countersDynamic');
const { SERVICE_NAME } = require('./constants');

const pkg = require('../../package.json');

export const publisher = new MetricPublisher();
export const appMetricPublisherBuilder = AdtPublisher.builder().app(
  SERVICE_NAME,
);

export const logCount = (name, message = null, value = 1) => {
  if (name.length === 0 || !name) {
    console.error(`Please check your metrics "${name}" again.`); // eslint-disable-line
  }

  // ADT RUM
  const rumPublisher = appMetricPublisherBuilder
    .namespace('AmazonStores')
    .name('BASE')
    .attachNewActionId()
    .buildThrowing();

  // cloudwatch
  publisher.publishCount('BASE', name, 1);
  rumPublisher.publishCounterMonitor(name, 1);

  const iframeWindow = document
    .getElementById(pkg.campaign.tileId)
    ?.querySelector('iframe').contentWindow;

  const logCountFunction = iframeWindow?.logCount || window.logCount;

  if (logCountFunction) logCountFunction(name, message, value);

  console.log(`track: ${name}: ${message}: ${value}`);
};

export const counters = {
  ...countersCount,
  ...countersAvgCount,
  ...counterDynamicCount,
};

export const root = window === window.parent ? window : window.parent;

export const trackDwellTime = () => {
  const start = Date.now();
  root.addEventListener('beforeunload', () => {
    let delta = Date.now() - start;
    delta = Math.floor(delta / 1000);
    logCount(counters.DWELL_TIME, null, delta);
  });
};

const scrollThresholds = [0, 25, 50, 75, 100];

const getHeight = () => {
  const { document } = root;
  const { body } = document;
  const html = document.documentElement;
  const height = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight,
  );
  return height;
};

const onScroll = () => {
  const height = getHeight();
  const scroll = root.scrollY + root.innerHeight;
  const percent = Math.floor((scroll / height) * 100);

  scrollThresholds.forEach(threshold => {
    if (percent >= threshold) {
      scrollThresholds.splice(scrollThresholds.indexOf(threshold), 1);
      logCount(counters[`SCROLL_DEPTH_${threshold}`]);
    }
  });
  if (!scrollThresholds.length) {
    root.removeEventListener('scroll', onScroll);
  }
};

export const trackScrollDepth = () => {
  root.addEventListener('scroll', onScroll);
};

export const bindLogCountAll = () => {
  // ctrl + shift + l -> log all counter events
  document.onkeydown = e => {
    if (e.ctrlKey && e.shiftKey && e.key.toLocaleLowerCase() === 'l') {
      Object.values(counters).forEach(counter => {
        logCount(counter);
      });
    }
  };
};
