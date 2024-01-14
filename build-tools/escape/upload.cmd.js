// eslint-disable-next-line import/no-extraneous-dependencies
const chalk = require('chalk');
const msAssetUploader = require('@amzn/ms-ui-asset-uploader'); // eslint-disable-line
const { spawn } = require('child_process');
const packageJSON = require('../../package.json');

const filesToUpload = [
  {
    fileName: 'createTag.bundle.js',
    filePath: `src/escape/script/createTag.bundle.js`,
  },
];

const args = {
  domain: 'prod',
  packageName: packageJSON.name,
  packageMajorVersion: '1.0',
};

const pbcopy = data => {
  const proc = spawn('pbcopy');
  proc.stdin.write(data);
  proc.stdin.end();

  console.log(`\n${chalk.whiteBright(data)}\n`); // eslint-disable-line
};

const uploadFiles = files => {
  msAssetUploader
    .uploadAssetFromFilePath(files, args)
    .then(response => {
      response.Results.forEach(result => {
        const fileType = result.Filename.split('.')[
          result.Filename.split('.').length - 1
        ];

        pbcopy(
          `https://m.media-amazon.com/images/I/${result.WharfMedia.PhysicalId}.${fileType}`,
        );
        // eslint-disable-next-line
        console.log(
          'Tag generation script copied. Place this in "index.freeform.escape.ejs"!',
        );
      });
    })
    .catch(e => {
      console.error(e); // eslint-disable-line
    });
};

uploadFiles(filesToUpload);
