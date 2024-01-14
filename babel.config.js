// eslint-disable-next-line func-names
module.exports = function(api) {
  api.cache(!api.env('production'));

  return {
    sourceType: 'unambiguous',
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false,
          useBuiltIns: 'entry',
          corejs: 3,
          exclude: ['transform-typeof-symbol'],
        },
      ],
    ],
    plugins: [
      [
        '@babel/plugin-transform-runtime',
        {
          corejs: 3,
        },
      ],
      'babel-plugin-styled-components',
      '@babel/plugin-transform-react-jsx',
      '@babel/plugin-transform-flow-strip-types',
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-syntax-import-meta',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-json-strings',
      [
        '@babel/plugin-proposal-decorators',
        {
          legacy: true,
        },
      ],
      '@babel/plugin-proposal-function-sent',
      '@babel/plugin-proposal-export-namespace-from',
      '@babel/plugin-proposal-numeric-separator',
      '@babel/plugin-proposal-throw-expressions',
    ],
    comments: true,

    env: {
      test: {
        plugins: [
          '@babel/plugin-transform-modules-commonjs',
          '@babel/plugin-transform-react-jsx',
          '@babel/plugin-transform-flow-strip-types',
          '@babel/plugin-proposal-class-properties',
        ],
      },
    },
  };
};
