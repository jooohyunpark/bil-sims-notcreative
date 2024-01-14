import React, { useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';
import { logCount, counters } from '../../../track';

export default function({ index = 0, inView = false }) {
  const swiper = useSwiper();
  const [hasSlided, setHasSlided] = useState(false);

  useEffect(() => {
    logCount(counters[`VIEW_CREATIVE_CAROUSEL_ITEM_${index}_IMAGE_${0}`]);

    const onRealIndexChange = e => {
      setHasSlided(true);
      logCount(
        counters[`VIEW_CREATIVE_CAROUSEL_ITEM_${index}_IMAGE_${e.realIndex}`],
      );
    };
    swiper.on('realIndexChange', onRealIndexChange);

    return () => {
      swiper.off('realIndexChange', onRealIndexChange);
    };
  }, []);

  // slide image crousel on initial load
  useEffect(() => {
    let timeoutId = null;

    if (index === 0 && inView && !hasSlided) {
      timeoutId = setTimeout(() => {
        swiper.slideNext();
      }, 3000);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [inView, index, hasSlided]);

  return null;
}
