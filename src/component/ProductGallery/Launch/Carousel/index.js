import React, { Fragment, useRef, useContext } from 'react';
import { Row, Col, ScreenClassRender } from 'react-grid-system';
import { AsinContext, Price } from '@amzn/tina-ui';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import AddToCart from '../../../Partial/AddToCart';
import SetTracking from './SetTracking';
import { ContentContext } from '../../../../content/config';
import getAssetPath from '../../../../util/asset';
import ChevronRightIcon from '../../../SVG/Icon/ChevronRightIcon';
import ChevronLeftIcon from '../../../SVG/Icon/ChevronLeftIcon';
import ShopNow from '../../../Partial/ShopNow';

import {
  CarouselLayout,
  ASINLayout,
  Eyebrow,
  ProductImage,
  PriceDiv,
  ATCDiv,
  ASINRow,
  FeaturedImage,
  ProductDescription,
  Control,
  NavButton,
  ShopNowDiv,
} from './styles';

export default ({ shopNow = false }) => {
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  const { content } = useContext(ContentContext);
  const { productGallery } = content;

  return (
    <CarouselLayout>
      <AsinContext.Consumer>
        {({ asinData }) =>
          asinData && (
            //
            <Swiper
              className="product-gallery-featured-swiper"
              loop={true}
              loopPreventsSliding={false}
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                el: '.swiper-pagination',
                clickable: true,
                bulletClass: 'swiper-pagination-bullet',
              }}
              navigation={{
                prevEl:
                  prevButtonRef.current ||
                  '#productGalleryFeaturedSwiperNavPrev',
                nextEl:
                  nextButtonRef.current ||
                  '#productGalleryFeaturedSwiperNavNext',
              }}
              modules={[A11y, Pagination, Navigation]}
              a11y={true}
            >
              <Fragment>
                {productGallery.featuredCarousel.map((data, i) => {
                  const { asin, imageSrc, eyebrow } = data;
                  const currentASINData = asinData?.find(d => d.asin === asin);
                  const { productImages, featureBullets } = currentASINData;
                  const { physicalId, extension } = productImages[0];

                  return (
                    <SwiperSlide key={i}>
                      <Fragment>
                        <ScreenClassRender
                          render={screenClass => (
                            <Row
                              direction={
                                ['xs', 'sm'].includes(screenClass)
                                  ? 'column-reverse'
                                  : 'row'
                              }
                            >
                              <Col xs={12} md={6}>
                                <ASINRow>
                                  <Col xs={7} md={6}>
                                    <ASINLayout>
                                      <div
                                        style={{
                                          display: 'flex',
                                          flexDirection: 'column',
                                          alignItems: 'flex-start',
                                        }}
                                      >
                                        <Eyebrow>{eyebrow}</Eyebrow>

                                        {featureBullets[0] && (
                                          <ProductDescription>
                                            {featureBullets[0]}
                                          </ProductDescription>
                                        )}

                                        {!shopNow && (
                                          <PriceDiv>
                                            <Price asin={asin} showSalePrice />
                                          </PriceDiv>
                                        )}
                                      </div>

                                      {shopNow ? (
                                        <ShopNowDiv>
                                          <ShopNow asin={asin} />
                                        </ShopNowDiv>
                                      ) : (
                                        <ATCDiv>
                                          <AddToCart asin={asin} />
                                        </ATCDiv>
                                      )}
                                    </ASINLayout>
                                  </Col>

                                  <Col
                                    xs={5}
                                    md={6}
                                    style={{
                                      display: 'grid',
                                      placeContent: 'center',
                                    }}
                                  >
                                    {physicalId && (
                                      <ProductImage
                                        src={`https://m.media-amazon.com/images/I/${physicalId}._AC_SY355_.${extension}`}
                                        alt={asin}
                                      />
                                    )}
                                  </Col>
                                </ASINRow>
                              </Col>

                              <Col
                                xs={12}
                                md={6}
                                style={{
                                  display: 'grid',
                                  placeContent: 'center',
                                }}
                              >
                                <FeaturedImage
                                  src={getAssetPath(imageSrc)}
                                  alt={eyebrow}
                                />
                              </Col>
                            </Row>
                          )}
                        />
                      </Fragment>
                    </SwiperSlide>
                  );
                })}
              </Fragment>

              <Control>
                <NavButton
                  id="productGalleryFeaturedSwiperNavPrev"
                  ref={prevButtonRef}
                >
                  <ChevronLeftIcon />
                </NavButton>
                <div className="swiper-pagination" />
                <NavButton
                  id="productGalleryFeaturedSwiperNavNext"
                  ref={nextButtonRef}
                >
                  <ChevronRightIcon />
                </NavButton>
              </Control>

              <SetTracking />
            </Swiper>
          )
        }
      </AsinContext.Consumer>
    </CarouselLayout>
  );
};
