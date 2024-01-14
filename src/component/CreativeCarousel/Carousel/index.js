import React, { Fragment, useRef, useContext } from 'react';
import { ScreenClassRender } from 'react-grid-system';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y } from 'swiper/modules';
import ImageCarousel from '../ImageCarousel';
import getAssetPath from '../../../util/asset';

// Import Swiper styles
import 'swiper/css';

import SetTracking from './SetTracking';

import { ContentContext } from '../../../content/config';
import { CarouselLayout } from './styles';

export default function Carousel({
  activeIndex = 0,
  enableImageCarousel = true,
}) {
  const { content } = useContext(ContentContext);
  const { creatives } = content;

  return (
    <CarouselLayout>
      <Swiper
        className="swiper"
        loop={true}
        loopPreventsSliding={false}
        slidesPerView={1}
        spaceBetween={0}
        allowTouchMove={false}
        modules={[A11y]}
        a11y={true}
        speed={350}
      >
        <Fragment>
          {creatives.map((data, i) => {
            const { imgSrcDesktop, imgSrcMobile, name } = data;

            return (
              <SwiperSlide key={i}>
                <ScreenClassRender
                  render={screenClass => {
                    const isMobile = ['xs', 'sm'].includes(screenClass);

                    return enableImageCarousel ? (
                      <ImageCarousel
                        index={i}
                        data={isMobile ? imgSrcMobile : imgSrcDesktop}
                        name={name}
                      />
                    ) : (
                      <img
                        src={getAssetPath(
                          isMobile ? imgSrcMobile[0] : imgSrcDesktop[0],
                        )}
                        alt={name}
                      />
                    );
                  }}
                />
              </SwiperSlide>
            );
          })}
        </Fragment>

        <SetTracking activeIndex={activeIndex} />
      </Swiper>
    </CarouselLayout>
  );
}
