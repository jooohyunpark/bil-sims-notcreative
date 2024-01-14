const config = require('../config');

const { DEVELOPMENT, PRODUCTION } = config.buildTypes;

/* eslint-disable func-names */
exports.compose = function(funcs) {
  if (funcs.length === 0) {
    return arg => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)));
};

exports.detectHost = port =>
  Promise.resolve(
    `${config.devServer.useHttps ? 'https' : 'http'}://localhost:${port}/`,
  );

const getAssetById = assetId => config.manifest[assetId];

const getAssetPath = (assetId, buildType = PRODUCTION) => {
  const asset = getAssetById(assetId);

  const { path, physicalId } = asset;

  const extension = path.split('.').pop();

  const env = config.env[buildType];

  const paths = {
    [DEVELOPMENT]: `${env.PUBLIC_PATH}${path.replace(
      'static/',
      env.STATIC_PATH,
    )}`,
    [PRODUCTION]: `${config.mediaCentral.PHYSICAL_URL}${physicalId}.${extension}`,
  };

  return paths[buildType];
};

const getManifest = (buildType = PRODUCTION) => {
  const { manifest } = config;

  const output = {};

  Object.keys(manifest).forEach(key => {
    output[key] = getAssetPath(key, buildType);
  });

  return output;
};

exports.getAssetById = getAssetById;
exports.getAssetPath = getAssetPath;
exports.getManifest = getManifest;
