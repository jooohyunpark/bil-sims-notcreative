import React, { Fragment, useRef, useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y } from 'swiper/modules';
import { useTheme } from 'styled-components';

// Import Swiper styles
import 'swiper/css';

import getAssetPath from '../../../util/asset';
import { ContentContext } from '../../../content/config';
import { CarouselLayout, Image, Text } from './styles';

export default function Carousel({
  activeIndex = 0,
  setActiveIndex = () => {},
}) {
  const theme = useTheme();

  const { content } = useContext(ContentContext);
  const { episodes } = content;

  return (
    <CarouselLayout>
      <Swiper
        className="swiper"
        slidesPerView={'auto'}
        direction={'horizontal'}
        breakpoints={{
          [`${theme.breakpoints.sm}`]: {
            slidesPerView: 3,
            direction: 'horizontal',
          },
          [`${theme.breakpoints.md}`]: {
            slidesPerView: 3,
            direction: 'vertical',
          },
        }}
        freeMode={true}
        spaceBetween={10}
        slideToClickedSlide={true}
        modules={[A11y]}
        a11y={true}
      >
        <Fragment>
          {episodes.episodeData.map((data, i) => {
            const { posterSrc, title, shortTitle, length } = data;

            return (
              <SwiperSlide
                key={i}
                onClick={() => {
                  setActiveIndex(i);
                }}
                className={activeIndex === i ? 'active' : ''}
                tabIndex={0}
              >
                <Image src={getAssetPath(posterSrc)} alt={title} />
                <Text>
                  <span>{shortTitle}</span>
                  <span>{length}</span>
                </Text>
              </SwiperSlide>
            );
          })}
        </Fragment>
      </Swiper>
    </CarouselLayout>
  );
}
