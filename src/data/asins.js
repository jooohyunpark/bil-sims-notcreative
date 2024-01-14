const pkg = require('../../package.json');
const config = require('../content/translations');

const LOCALE = pkg.campaign.locale;

const { resources } = config[LOCALE];

const set = new Set();

resources.productGallery.asins.prelaunch.forEach(asin => {
  set.add(asin);
});

resources.productGallery.asins.launch.forEach(asin => {
  set.add(asin);
});

resources.productGallery.featuredCarousel.forEach(data => {
  set.add(data.asin);
});

module.exports = [...set];
