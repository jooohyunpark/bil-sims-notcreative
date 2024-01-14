/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
require('shelljs/global');

const fs = require('fs-extra');
const inquirer = require('inquirer');
const fetch = require('node-fetch');

const path = require('path');
const chalk = require('chalk');

const uploader = require('@amzn/ms-ui-asset-uploader');

const packageJSON = require('../../package.json');
const config = require('../config/config');

const { getManifest, updateManifest } = require('./manifest');
const { printFreeform } = require('./freeform');

const args = {
  domain: config.mediaCentral.DOMAIN,
  packageName: packageJSON.displayName,
  packageMajorVersion: config.mediaCentral.VERSION,
};

const getPhysicalIdByName = (name, array) => {
  const item = array.find(a => a.Filename === name);

  if (item) return item.WharfMedia.PhysicalId;

  return null;
};

const uploadAssets = async () => {
  try {
    const manifest = await getManifest();

    const filePaths = Object.keys(manifest).map(k => manifest[k].path);

    const files = filePaths.map(filePath => {
      const fileName = path.basename(filePath);

      return {
        fileName,
        filePath,
      };
    });

    const { Results } = await uploader.uploadAssetFromFilePath(files, args);

    const newManifest = {};

    Object.keys(manifest).forEach(k => {
      const fileName = path.basename(manifest[k].path);
      const PhysicalId = getPhysicalIdByName(fileName, Results);

      newManifest[k] = {
        ...manifest[k],
        physicalId: PhysicalId,
      };
    });

    updateManifest(newManifest);

    // success
  } catch (err) {
    throw err;
  }
};

const getAliasFromUrl = url => {
  const alias = url.split('/')[url.split('/').length - 1];
  return alias;
};

const uploadBundle = async () => {
  try {
    const dist = path.join(config.projectRoot, 'dist/');

    const stylesheet = 'app.css';
    const vendorsBundle = 'vendors.js';
    const appBundle = 'app.js';

    const files = [
      {
        // The file name provided will be used when the assets get uploaded.
        fileName: stylesheet,
        filePath: path.join(dist, `css/${stylesheet}`),
      },
      {
        fileName: vendorsBundle,
        filePath: path.join(dist, `js/${vendorsBundle}`),
      },
      {
        fileName: appBundle,
        filePath: path.join(dist, `js/${appBundle}`),
      },
    ];

    const { Results } = await uploader.uploadAssetFromFilePath(files, args);

    printFreeform({
      stylesheet: getPhysicalIdByName(stylesheet, Results),
      vendorsBundle: getPhysicalIdByName(vendorsBundle, Results),
      appBundle: getPhysicalIdByName(appBundle, Results),
    });
  } catch (err) {
    throw err;
  }
};

module.exports = {
  uploadAssets,
  uploadBundle,
};
