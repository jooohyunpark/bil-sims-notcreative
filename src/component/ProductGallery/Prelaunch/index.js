import React, { useContext, useRef, useEffect, Fragment } from 'react';
import {
  Container,
  Row,
  Col,
  ScreenClassRender,
  Visible,
} from 'react-grid-system';
import { useScroll } from 'framer-motion';

import Section from '../../Partial/Section';
import ProductCard from '../../ProductCard';
import FadeIn from '../../Partial/FadeIn';
import { ContentContext, Content } from '../../../content/config';
import getAssetPath from '../../../util/asset';
import GridBackgroundSVGDesktop from '../../SVG/Grid/ProductGallery/Desktop';
import GridBackgroundSVGMobile from '../../SVG/Grid/ProductGallery/Mobile';
import PlayIcon from '../../SVG/Icon/PlayIcon';
import Sticker from '../../Sticker';
import { counters, logCount } from '../../../track';

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

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', ['end', 'end']],
  });

  useEffect(() => {
    const nav = document.getElementById('sims-nav');

    const unsubscribe = scrollYProgress.on('change', value => {
      if (value < 0.9) nav.classList.add('show');
      else nav.classList.remove('show');
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Section id="product-gallery" ref={ref} background="darkGray">
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
          </Row>

          <ScreenClassRender
            render={screenClass => {
              const isMobile = ['xs', 'sm', 'md'].includes(screenClass);

              return (
                <Row>
                  <Col xs={12} xxl={10} offset={{ xxl: 1 }}>
                    <ProductCardRow gutterWidth={isMobile ? 10 : 20}>
                      <Fragment>
                        {productGallery.asins.prelaunch.map((asin, i) => (
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

                      <Sticker
                        id={10}
                        style={{
                          position: 'absolute',
                          right: ['xs', 'sm', 'md', 'lg'].includes(screenClass)
                            ? '8%'
                            : 0,
                          bottom: ['xs', 'sm', 'md', 'lg'].includes(screenClass)
                            ? -100
                            : -240,
                          transform: ['xs', 'sm', 'md'].includes(screenClass)
                            ? 1.2
                            : 1,
                        }}
                      />
                    </ProductCardRow>
                  </Col>
                </Row>
              );
            }}
          />

          {/* Alexa theme */}
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
                    {productGallery.getTheTheme.text} <PlayIcon />
                  </GetTheThemeLink>
                </AlexaContent>
              </FadeIn>
            </Col>
          </Row>
        </Container>
      </ProductGalleryLayout>

      <Visible lg xl xxl>
        <Sticker
          id={11}
          style={{
            position: 'absolute',
            top: '2%',
            left: '5%',
          }}
        />
      </Visible>
    </Section>
  );
};
