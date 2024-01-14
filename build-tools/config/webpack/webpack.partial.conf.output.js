const path = require('path');

module.exports = ({ config, buildType, isDevelopment }) => webpackConfig => ({
  ...webpackConfig,

  // output: {
  //   path: path.join(config.projectRoot, 'demo', 'dist'),
  //   globalObject: 'this',
  //   filename: '[name].js',
  //   library: 'dsm',
  //   libraryTarget: 'umd',
  // },

  output: {
    clean: true,
    path: path.join(config.projectRoot, 'dist'),
    publicPath: config.dist.publicPath,
    globalObject: 'this',
    globalObject: 'self',
    filename: isDevelopment
      ? '[name].js'
      : path.posix.join('', `${config.dist.versionPath}js/[name].js`),
    chunkFilename: isDevelopment
      ? '[id].js'
      : path.posix.join('', `${config.dist.versionPath}js/[id].js`),
  },
});
