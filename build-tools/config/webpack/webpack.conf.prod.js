const WebpackBaseConfig = require('./webpack.conf.base');

const config = require('../config');

const { PRODUCTION } = config.buildTypes;

module.exports = WebpackBaseConfig(PRODUCTION);
