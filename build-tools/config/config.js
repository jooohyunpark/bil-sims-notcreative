/* eslint-disable prefer-destructuring */
const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const argv = require('yargs').argv;
const pkg = require('../../package.json');
const mediaCentral = require('./mediacentral');
const manifest = require('../../src/asset-manifest.json');

const customId = `${pkg.campaign.id}` || `adtApp`;
const tileId = `${pkg.campaign.tileId}` || ``;

const version = argv.versionNumber || new Date().getTime();

const versionPath = `version/${version}/`;

const buildTypes = {
  DEVELOPMENT: 'development',
  PRODUCTION: 'production',
};

let publicPath = argv.publicPath || '/';

// force leading /
if (!publicPath.startsWith('/') && !publicPath.startsWith('http')) {
  publicPath = `/${publicPath}`;
}
// force trailing /
if (!publicPath.endsWith('/')) {
  publicPath = `${publicPath}/`;
}

module.exports = {
  customId,
  tileId,

  buildTypes,

  projectRoot: path.resolve(__dirname, '../../'),

  /**
   * Dev config
   */

  devServer: {
    indexHtml: path.resolve(__dirname, '../../dist/index.html'),
    port: process.env.PORT || 8080,
    host: process.env.HOST || '0.0.0.0',
    proxyTable: {},
    autoOpenBrowser: true,
    useHttps: false,
    public: !!(argv.public !== undefined) || false,
  },

  /**
   * Build config
   */

  dist: {
    /* version number */
    version,

    /* version paths */
    // versionPath: `version/${version}/`,
    versionPath: '',

    /* public paths */
    publicPath,

    indexHtml: path.resolve(__dirname, '../../dist/index.html'),
    freeformHtml: path.resolve(__dirname, '../../dist/freeform.html'),

    /* optimization */
    enableGZIP: false, // not yet supported by MC upload
    deleteOriginalGZIP: false,
    enableImageOptimization: true,
    enablePNGQuant: true, // Best PNG optimizer but PNGQuant crashes on some images so use with caution.
    pngQuantQuality: '85',
  },

  /**
   * Media Central config
   */

  mediaCentral,

  /**
   * Manifest config
   */

  manifest,

  /**
   * Tooling
   */

  compileNodeModules: false, // use babel to compile js code in node_modules
  enableBundleAnalyzer: !!argv.analyze,
  lintStaged: {
    eslintEnabled: true,
    tslintEnabled: true,
    stylelintEnabled: true,
  },

  /**
   * Environment
   */

  env: {
    [buildTypes.PRODUCTION]: {
      NODE_ENV: buildTypes.PRODUCTION,
      STATIC_PATH: 'static/',
      PUBLIC_PATH: publicPath,
    },
    [buildTypes.DEVELOPMENT]: {
      NODE_ENV: buildTypes.DEVELOPMENT,
      STATIC_PATH: 'static/',
      PUBLIC_PATH: publicPath,
    },
  },
};
