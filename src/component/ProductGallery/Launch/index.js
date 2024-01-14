import React, { useContext, useEffect, Fragment, useState } from 'react';
import {
  Container,
  Row,
  Col,
  ScreenClassRender,
  Visible,
} from 'react-grid-system';

import Section from '../../Partial/Section';
import ProductCard from '../../ProductCard';
import FadeIn from '../../Partial/FadeIn';
import { ContentContext, Content } from '../../../content/config';
import getAssetPath from '../../../util/asset';
import GridBackgroundSVGDesktop from '../../SVG/Grid/ProductGallery/Desktop';
import GridBackgroundSVGMobile from '../../SVG/Grid/ProductGallery/Mobile';
import PlayIcon from '../../SVG/Icon/PlayIcon';
import Sticker from '../../Sticker';
import FeaturedCarousel from './Carousel';
import { logCount, counters } from '../../../track';
import {
  ProductGalleryLayout,
  ProductCardRow,
  Headline,
  Background,
  EchoImg,
  AlexaHeadline,
  AlexaDescription,
  AlexaContent,
  GetTheThemeLink,
} from './styles';

export default () => {
  const { content } = useContext(ContentContext);
  const { productGallery } = content;

  return (
    <Fragment>
      <Section id="product-gallery" background="darkGray">
        <Background>
          <Visible xs sm md>
            <GridBackgroundSVGMobile />
          </Visible>
          <Visible lg xl xxl>
            <GridBackgroundSVGDesktop />
          </Visible>
        </Background>

        <ProductGalleryLayout>
          <Container>
            <Row>
              <Col xs={10} offset={{ xs: 1 }}>
                <FadeIn>
                  <Headline>{productGallery.headline}</Headline>
                </FadeIn>
              </Col>

              <Col xs={12} xxl={10} offset={{ xxl: 1 }}>
                <FadeIn>
                  <FeaturedCarousel shopNow={productGallery.shopNow} />
                </FadeIn>
              </Col>
            </Row>

            <ScreenClassRender
              render={screenClass => {
                const isMobile = ['xs', 'sm', 'md'].includes(screenClass);

                return (
                  <Row>
                    <Col xs={12} xxl={10} offset={{ xxl: 1 }}>
                      <ProductCardRow gutterWidth={isMobile ? 10 : 20}>
                        <Fragment>
                          {productGallery.asins.launch.map((asin, i) => (
                            <Col xs={6} lg={4} xl={3} key={`product-card-${i}`}>
                              <FadeIn delay={i * 0.05}>
                                <ProductCard
                                  asin={asin}
                                  shopNow={productGallery.shopNow}
                                />
                              </FadeIn>
                            </Col>
                          ))}
                        </Fragment>
                      </ProductCardRow>
                    </Col>
                  </Row>
                );
              }}
            />
          </Container>
        </ProductGalleryLayout>

        <Sticker
          id={11}
          style={{
            position: 'absolute',
            top: '-2%',
            right: '5%',
          }}
        />

        <Visible lg xl xxl>
          <Sticker
            id={13}
            style={{
              position: 'absolute',
              bottom: '1%',
              left: '5%',
            }}
          />
        </Visible>
      </Section>

      {/* Alexa theme */}
      <Section>
        <Container>
          <Row>
            <Col xs={12} lg={5} xl={4} offset={{ lg: 1, xl: 2 }}>
              <ScreenClassRender
                render={screenClass => (
                  <FadeIn>
                    <EchoImg
                      src={
                        ['xs', 'sm', 'md'].includes(screenClass)
                          ? getAssetPath('echo_show_mobile')
                          : getAssetPath('echo_show_desktop')
                      }
                      alt={productGallery.alexaHeadline}
                    />
                  </FadeIn>
                )}
              />
            </Col>

            <Col xs={12} lg={5} xl={4}>
              <FadeIn delay={0.05} style={{ height: '100%' }}>
                <AlexaContent>
                  <AlexaHeadline>
                    <Content id="productGallery.alexaHeadline" />
                  </AlexaHeadline>
                  <AlexaDescription>
                    <Content id="productGallery.alexaDescription" />
                  </AlexaDescription>
                  <GetTheThemeLink
                    href={productGallery.getTheTheme.url}
                    target="_blank"
                    onClick={() => {
                      logCount(counters.GET_THE_THEME_CLICK);
                    }}
                  >
                    {productGallery.getTheTheme.text} <PlayIcon color="black" />
                  </GetTheThemeLink>
                </AlexaContent>
              </FadeIn>
            </Col>
          </Row>
        </Container>

        <ScreenClassRender
          render={screenClass => {
            const isMobile = ['xs', 'sm', 'md'].includes(screenClass);

            return (
              <Fragment>
                <Sticker
                  id={15}
                  style={{
                    position: 'absolute',
                    top: !isMobile && '2%',
                    bottom: isMobile && '10px',
                    right: '7%',
                  }}
                />
                <Sticker
                  id={14}
                  style={{
                    position: 'absolute',
                    bottom: isMobile ? '-30px' : '0',
                    left: '6%',
                  }}
                />
              </Fragment>
            );
          }}
        />
      </Section>
    </Fragment>
  );
};
