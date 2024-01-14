const subResource = [
  'availability',
  'byLine',
  'callToAction',
  'customerReviewsSummary',
  'dealDetails',
  'description',
  'energyEfficiency',
  'energyEfficiencyV2',
  'featureBullets',
  'fulfillment',
  'links',
  'marketplaceOfferSummary',
  'merchant',
  'offer',
  'price',
  'productDetails',
  'productImages',
  'promotionsUnified',
  'quantity',
  'subscribeAndSave',
  'title',
  'twisterVariations',
];

const subResourceMap = {
  availability: 'buyingOptions[].availability(product.availability/v2)',
  byLine: 'byLine(product.by-line/v2)',
  callToAction: 'buyingOptions[].callToAction(product.call-to-action/v1)',
  customerReviewsSummary:
    'customerReviewsSummary(product.customer-reviews-summary/v1)',
  dealDetails: 'buyingOptions[].dealDetails(product.deal-details/v1)',
  description: 'description(product.description/v1)',
  energyEfficiency: 'energyEfficiency(product.offer.energy-efficiency/v1)',
  energyEfficiencyV2: 'energyEfficiency(product.energy-efficiency/v2)',
  featureBullets: 'featureBullets(product.offer.feature-bullets/v1)',
  fulfillment: 'buyingOptions[].fulfillment(product.fulfillment/v2',
  links: 'links(product.links/v2)',
  marketplaceOfferSummary:
    'marketplaceOfferSummary(product.marketplace-offer-summary/v2',
  merchant: 'buyingOptions[].merchant(product.offer.merchant/v1)',
  offer: 'buyingOptions[].offer(product.bo-offer/v1)',
  price: 'buyingOptions[].price(product.price/v1)',
  productDetails: 'productDetails(product.offer.product-details/v1)',
  productImages: 'productImages(product.product-images/v2)',
  promotionsUnified:
    'buyingOptions[].promotionsUnified(product.promotions-unified/v1)',
  quantity: 'buyingOptions[].quantity(product.quantity/v2)',
  subscribeAndSave:
    'buyingOptions[].subscribeAndSave(product.subscribe-and-save-v2/v2)',
  title: 'title(product.offer.title/v1)',
  twisterVariations: 'twisterVariations(product.twister-variations/v2)',
};

const marketplaceUrls = {
  us: 'https://api-sso-access.corp.amazon.com/api/marketplaces/ATVPDKIKX0DER',
  jp:
    'https://api-sso-access.corp.amazon.com/fe-pre-prod-api-pdx.pdx.proxy.amazon.com/--/api/marketplaces/A1VC38T7YXB528',
  ca: 'https://api-sso-access.corp.amazon.com/api/marketplaces/A2EUQ1WTGCTBG2',
  de:
    'https://api-sso-access.corp.amazon.com/eu-pre-prod-api-dub.dub.proxy.amazon.com/--/api/marketplaces/A1PA6795UKMFR9',
  uk:
    'https://api-sso-access.corp.amazon.com/eu-pre-prod-api-dub.dub.proxy.amazon.com/--/api/marketplaces/A1F83G8C2ARO7P',
};

module.exports = {
  subResource,
  subResourceMap,
  marketplaceUrls,
};
