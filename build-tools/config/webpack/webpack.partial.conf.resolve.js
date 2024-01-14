const path = require('path');

module.exports = ({ config }) => webpackConfig => ({
  ...webpackConfig,
  resolve: {
    extensions: ['.jsx', '.js', '.ts', '.css', '.scss', '.json'],
    modules: [
      path.join(config.projectRoot, 'src'),
      path.join(config.projectRoot, 'node_modules'),
    ],
    alias: {
      'react-spring$': 'react-spring/web.cjs',
      'react-spring/renderprops$': 'react-spring/renderprops.cjs',
      static: path.resolve(config.projectRoot, 'static'),
    },
    fallback: {
      fs: false,
      dgram: false,
      net: false,
      tls: false,
      child_process: false,
      // prevent webpack from injecting useless setImmediate polyfill because Vue
      // source contains it (although only uses it if it's native).
      setImmediate: false,
    },
  },
});
