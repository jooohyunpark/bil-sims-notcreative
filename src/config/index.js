import { URLNames } from 'data/enum/configNames';

export const environment = process.env.NODE_ENV;

export const variables = {};

export const urls = {
  [URLNames.API]: `https://my-api.com/get/`,
};

export default {
  environment,
  variables,
  urls,
};
