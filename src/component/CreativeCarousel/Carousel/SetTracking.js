import React, { useEffect } from 'react';
import { useSwiper } from 'swiper/react';

export default function({ activeIndex = 0 }) {
  const swiper = useSwiper();

  useEffect(() => {
    if (activeIndex === 0 && swiper.activeIndex === 0 && swiper.realIndex === 0)
      return;

    swiper.slideNext();
  }, [activeIndex]);

  return null;
}
