// Averages all the values within logCountFunction
const countersAvgCount = {
  DWELL_TIME: 'dwell-time',
};

// Counts the number of times a counter was logged for a single hit
const countersCount = {
  PAGE_VIEW: 'page-view',
  SCROLL_DEPTH_0: 'scroll-depth-0',
  SCROLL_DEPTH_25: 'scroll-depth-25',
  SCROLL_DEPTH_50: 'scroll-depth-50',
  SCROLL_DEPTH_75: 'scroll-depth-75',
  SCROLL_DEPTH_100: 'scroll-depth-100',

  MEDIA_TOTAL: 'media_total',
  // media channel US
  MEDIA_US_NotCreative_FRSOV: 'media_US_NotCreative_FRSOV',
  MEDIA_US_NotCreative_FRROS: 'media_US_NotCreative_FRROS',
  MEDIA_US_NotCreativeILBSOV: 'media_US_NotCreativeILBSOV',
  MEDIA_US_NotCreativeILBROS: 'media_US_NotCreativeILBROS',
  MEDIA_US_NotCreative_ILBAV: 'media_US_NotCreative_ILBAV',
  MEDIA_US_NotCreative_SS: 'media_US_NotCreative_SS',
  MEDIA_US_NotCreative_STV15: 'media_US_NotCreative_STV15',
  MEDIA_US_NotCreative_STV30: 'media_US_NotCreative_STV30',
  MEDIA_US_NotCreative_STV60: 'media_US_NotCreative_STV60',
  MEDIA_US_NotCreative_OLV: 'media_US_NotCreative_OLV',
  MEDIA_US_NotCreative_DSP: 'media_US_NotCreative_DSP',
  MEDIA_US_NotCreativeSocial: 'media_US_NotCreativeSocial',
  MEDIA_US_NotCreative_Audio: 'media_US_NotCreative_Audio',
  MEDIA_US_NotCreative_Alexa: 'media_US_NotCreative_Alexa',
  MEDIA_USNotCreativeFreevee: 'media_USNotCreativeFreevee',
  MEDIA_US_NotCreative_Home: 'media_US_NotCreative_Home',
  MEDIA_US_NotCreativeRetail: 'media_US_NotCreativeRetail',
  'MEDIA_us-notcreative-email': 'media_us-notcreative-email',
  // media channel UK (optional)

  NOTIFY_ME_SUBSCRIBE: 'notify-me-subscribe',
  NOTIFY_ME_UNSUBSCRIBE: 'notify-me-unsubscribe',
  NOTIFY_ME_SIGN_IN: 'notify-me-sign-in',

  NAV_CLICK_NOT_CREATIVE: 'nav-click-not-creative',
  NAV_CLICK_EPISODES: 'nav-click-episodes',
  NAV_CLICK_CREATIVES: 'nav-click-creatives',
  NAV_CLICK_SHOP_PACKS: 'nav-click-shop-packs',
  NAV_CLICK_EA_STORE: 'nav-click-ea-store',
  NAV_CLICK_PLAY_FOR_FREE: 'nav-click-play-for-free',

  CLICK_SHOW_MORE_ASINS: 'click-show-more-asins',
  GET_THE_THEME_CLICK: 'get-the-theme-click',
};

module.exports = { countersAvgCount, countersCount };
