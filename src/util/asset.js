const STATIC_BASE_PATH_FIND_REPLACE = '/static/';

const getAssetPath = assetId => {
  const asset = __ASSET_MANIFEST__ ? __ASSET_MANIFEST__[assetId] : '';

  if (__DEV__ && asset?.indexOf(STATIC_BASE_PATH_FIND_REPLACE) === 0) {
    // NOTE:
    // For local development we use require to pull in the static asset
    // Webpack needs the actual 'static/' path in a string so it knows where the folder is
    // Example input path: /static/image/test.jpg
    // Example output path: static/image/test.jpg
    const assetPath = asset.replace(STATIC_BASE_PATH_FIND_REPLACE, '');
    // eslint-disable-next-line import/no-dynamic-require, global-require
    return require(`static/${assetPath}`);
  }
  return asset;
};

export default getAssetPath;
