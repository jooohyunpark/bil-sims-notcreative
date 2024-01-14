module.exports = ({ config }) => webpackConfig => ({
  ...webpackConfig,
  devServer: {
    historyApiFallback: true,
    allowedHosts: 'all',
    compress: true,
    host: process.env.HOST || config.devServer.host || '0.0.0.0',
    port: process.env.PORT || config.devServer.port,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
      logging: 'info',
    },
    proxy: config.devServer.proxyTable,
    // quiet: true,
    https: config.devServer.useHttps,
  },
});
