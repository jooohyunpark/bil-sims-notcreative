import React, { useContext, useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';
import { ShopPackContext } from '../../../../config/ShopPackContext';
import { logCount, counters } from '../../../../track';

export default function() {
  const swiper = useSwiper();
  const { selectedShopPackIndex, setSelectedShopPackIndex } = useContext(
    ShopPackContext,
  );

  useEffect(() => {
    logCount(counters[`VIEW_PRODUCT_GALLERY_FEATURED_CAROUSEL_${0}`]);

    const onRealIndexChange = e => {
      // console.log(`realIndexChange: ${e.realIndex}`);
      logCount(
        counters[`VIEW_PRODUCT_GALLERY_FEATURED_CAROUSEL_${e.realIndex}`],
      );
    };
    swiper.on('realIndexChange', onRealIndexChange);

    return () => {
      swiper.off('realIndexChange', onRealIndexChange);
    };
  }, []);

  useEffect(() => {
    if (selectedShopPackIndex > -1) {
      swiper.slideToLoop(selectedShopPackIndex);
      setSelectedShopPackIndex(-1);
    }
  }, [selectedShopPackIndex]);

  return null;
}
