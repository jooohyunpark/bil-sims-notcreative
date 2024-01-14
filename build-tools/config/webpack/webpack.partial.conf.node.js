module.exports = () => webpackConfig => ({
  ...webpackConfig,
  node: {
    // provides the global variable named "global"
    global: true,
  },
});
