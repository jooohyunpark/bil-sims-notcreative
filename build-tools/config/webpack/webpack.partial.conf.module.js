const path = require('path');

// eslint-disable-next-line import/no-extraneous-dependencies
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const postcssPresetEnv = require('postcss-preset-env');

module.exports = ({ config, isDevelopment }) => webpackConfig => ({
  ...webpackConfig,
  module: {
    rules: [
      /*
       * ------------------------------------------------
       * Styling (css)
       * ------------------------------------------------
       */
      {
        test: /\.css$/,
        oneOf: (() => {
          function getCssLoaders(cssModules) {
            const loaders = [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: isDevelopment,
                  importLoaders: 2,
                  // 0 => no loaders (default);
                  // 1 => postcss-loader;
                  // 2 => postcss-loader, sass-loader
                  modules: cssModules,
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: isDevelopment,
                  plugins: [postcssPresetEnv()],
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: isDevelopment,
                  plugins: [postcssPresetEnv()],
                },
              },
            ];

            if (isDevelopment) {
              loaders.unshift('style-loader');
            } else {
              loaders.unshift({
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: `${config.dist.publicPath}`,
                },
              });
            }

            return loaders;
          }

          return [
            {
              resourceQuery: /module/,
              use: getCssLoaders(true),
            },
            {
              use: getCssLoaders(false),
            },
          ];
        })(),
      },
      /*
       * ------------------------------------------------
       * JavaScript and TypeScript
       * ------------------------------------------------
       */
      ...(() => {
        const babelLoaderConfig = {
          loader: 'babel-loader',
          options: {
            cacheDirectory: isDevelopment,
            configFile: path.join(config.projectRoot, './babel.config.js'),
          },
        };

        return [
          {
            test: /\.js$/,
            use: babelLoaderConfig,
            include: [path.join(config.projectRoot, 'src')],
            exclude: config.compileNodeModules
              ? /@babel(?:\/|\\{1,2})runtime/
              : /node_modules/,
          },
          {
            test: /\.ts$/,
            use: [
              babelLoaderConfig,
              {
                loader: 'awesome-typescript-loader',
                options: {
                  configFileName: path.resolve(
                    config.projectRoot,
                    './tsconfig.json',
                  ),
                },
              },
            ],
          },
        ];
      })(),
      /*
       * ------------------------------------------------
       * Images, SVG, Audio and Video
       * ------------------------------------------------
       */
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 10kb
          },
        },
        generator: {
          filename: path.posix.join(
            isDevelopment ? '' : config.dist.versionPath,
            'image/[name].[contenthash:7][ext]',
          ),
        },
      },
      {
        test: /\.(mp4|webm|ogv)(\?.*)?$/,
        type: 'asset/resource',
        generator: {
          filename: path.posix.join(
            isDevelopment ? '' : config.dist.versionPath,
            'video/[name].[contenthash:7][ext]',
          ),
        },
      },
      {
        test: /\.(mp3|ogg|wav)(\?.*)?$/,
        type: 'asset/resource',
        generator: {
          filename: path.posix.join(
            isDevelopment ? '' : config.dist.versionPath,
            'audio/[name].[contenthash:7][ext]',
          ),
        },
      },
      {
        test: /\.svg$/,
        oneOf: (() => {
          const svgoLoaderConfig = {
            loader: 'svgo-loader',
            options: {
              plugins: [
                { removeViewBox: false },
                { removeStyleElement: true },
                { removeComments: true },
                { removeDesc: true },
                { removeUselessDefs: true },
                { removeTitle: true },
                { removeMetadata: true },
                { removeComments: true },
                { cleanupIDs: { remove: true, prefix: '' } },
                { convertColors: { shorthex: false } },
              ],
            },
          };

          return [
            {
              resourceQuery: /inline/,
              use: [{ loader: 'svg-inline-loader' }, svgoLoaderConfig],
            },
            {
              use: [
                {
                  loader: '@svgr/webpack',
                  options: {
                    prettier: false,
                    svgo: false,
                  },
                },
              ],
            },
          ];
        })(),
      },
      /*
       * ------------------------------------------------
       * Fonts
       * ------------------------------------------------
       */
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 10kb
          },
        },
        generator: {
          filename: path.posix.join(
            isDevelopment ? '' : config.dist.versionPath,
            'font/[name].[contenthash:7][ext]',
          ),
        },
      },
      /*
       * ------------------------------------------------
       * Other
       * ------------------------------------------------
       */
      {
        test: /\.(glsl|txt)$/,
        use: 'raw-loader',
      },
    ],
  },
});
