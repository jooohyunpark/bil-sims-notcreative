import React, { Fragment, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import SetTracking from './SetTracking';

import getAssetPath from '../../../util/asset';
import { CarouselLayout } from './styles';

export default function Carousel({ index = 0, data = [], name = '' }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.75,
  });

  return (
    <CarouselLayout ref={ref}>
      <Swiper
        className="image-swiper"
        loop={true}
        slidesPerView={1}
        spaceBetween={0}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
        }}
        modules={[A11y, Pagination]}
        a11y={true}
      >
        <Fragment>
          {data.map((src, i) => (
            <SwiperSlide key={i}>
              <img src={getAssetPath(src)} alt={name} />
            </SwiperSlide>
          ))}
        </Fragment>

        <div className="swiper-pagination" />

        <SetTracking index={index} inView={inView} />
      </Swiper>
    </CarouselLayout>
  );
}
