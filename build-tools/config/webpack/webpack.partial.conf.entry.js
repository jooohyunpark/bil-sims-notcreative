const path = require('path');

module.exports = ({ config }) => webpackConfig => ({
  ...webpackConfig,
  context: path.join(config.projectRoot),
  entry: {
    app: ['./src/polyfill/index.js', './src/bootstrap.js'],
  },
});
