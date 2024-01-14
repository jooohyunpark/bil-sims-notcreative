const asins = require('../data/asins');
const { enUS } = require('../content/translations');

const { resources } = enUS;

const addToCart = {};
const shopNow = {};
const creativeCarousel = {};
const creativeCarouselImage = {};
const creativeCarouselClickShopPack = {};
const featuredCarousel = {};
const episodes = {};

asins.forEach(asin => {
  addToCart[`ADD_TO_CART_${asin}`] = `add_to_cart_${asin}`;
  shopNow[`SHOP_NOW_${asin}`] = `shop_now_${asin}`;
});

resources.creatives.forEach((creative, i) => {
  creativeCarousel[
    `VIEW_CREATIVE_CAROUSEL_ITEM_${i}`
  ] = `view_creative_carousel_item_${i}`;

  creativeCarouselClickShopPack[
    `CREATIVE_CAROUSEL_CLICK_SHOP_PACK_${i}`
  ] = `creative_carousel_click_shop_pack_${i}`;

  creativeCarouselImage[
    `VIEW_CREATIVE_CAROUSEL_ITEM_${i}_IMAGE_0`
  ] = `view-creative-carousel-item-${i}-image-0`;
  creativeCarouselImage[
    `VIEW_CREATIVE_CAROUSEL_ITEM_${i}_IMAGE_1`
  ] = `view-creative-carousel-item-${i}-image-1`;
});

resources.productGallery.featuredCarousel.forEach((d, i) => {
  featuredCarousel[
    `VIEW_PRODUCT_GALLERY_FEATURED_CAROUSEL_${i}`
  ] = `view_product_gallery_featured_carousel_${i}`;
});

resources.episodes.episodeData.forEach((d, i) => {
  episodes[`EPISODE_${d.id}_LOADED`] = `episode_${d.id}_loaded`;
  episodes[`EPISODE_${d.id}_PLAY`] = `episode_${d.id}_play`;
  episodes[`EPISODE_${d.id}_PAUSE`] = `episode_${d.id}_pause`;
  episodes[`EPISODE_${d.id}_ENDED`] = `episode_${d.id}_ended`;
});

const counterDynamicCount = {
  ...addToCart,
  ...shopNow,
  ...creativeCarousel,
  ...creativeCarouselImage,
  ...creativeCarouselClickShopPack,
  ...featuredCarousel,
  ...episodes,
};

module.exports = { counterDynamicCount, addToCart };
