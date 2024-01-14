module.exports = ({ isProduction }) => webpackConfig => ({
  ...webpackConfig,

  ...(!!isProduction && {
    externals: {
      // react: {
      //   umd: 'react',
      //   commonjs: 'react',
      //   commonjs2: 'react',
      // },
      // 'react-dom': {
      //   umd: 'react-dom',
      //   commonjs: 'react-dom',
      //   commonjs2: 'react-dom',
      // },
      // 'prop-types': {
      //   umd: 'prop-types',
      //   commonjs: 'prop-types',
      //   commonjs2: 'prop-types',
      // },
    },
  }),
});
