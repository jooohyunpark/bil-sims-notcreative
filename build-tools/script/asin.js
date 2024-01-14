const { execSync } = require('child_process');
const { subResource, subResourceMap, marketplaceUrls } = require('./constants');

const getExpandSubResourcesExpression = subResources => {
  if (!Array.isArray(subResources)) {
    console.warn(
      'getExpandSubResourcesExpression called with invalid argument',
    );
    return '';
  }

  const validSubResources = Object.keys(subResourceMap);

  subResources.forEach(resource => {
    if (!validSubResources.includes(resource)) {
      console.warn('Unsupported sub-resource: '.concat(resource));
    }
  });

  return subResources
    .filter(resource => validSubResources.includes(resource))
    .map(resource => subResourceMap[resource])
    .join(',');
};

const transformAsinList = asinList => Object.keys(asinList);

const fetchAsinData = async (asinArray, CIA, locale) => {
  const requestUrl = `'${marketplaceUrls[locale]}/products/${asinArray}?ccOverride_customerIntent=${CIA}'`;

  const aapiResponse = execSync(`
        curl -sS --negotiate --location-trusted -u: -c ~/.midway/cookie -b ~/.midway/cookie \
        --request GET \
        --header 'Accept: application/vnd.com.amazon.api+json; type="collection(product/v2)/v1"; expand="${getExpandSubResourcesExpression(
          subResource,
        )}"' \
        --header 'Accept-Language: en-US' \
          ${requestUrl}
        `);

  const response = await JSON.parse(aapiResponse);

  if (response.status === 'error') {
    const { message, desc } = response;

    throw new Error(desc);
  } else {
    return response;
  }
};

module.exports = {
  fetchAsinData,
  getExpandSubResourcesExpression,
  transformAsinList,
};
