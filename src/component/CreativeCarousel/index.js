import React, {
  Fragment,
  useContext,
  useEffect,
  useState,
  useCallback,
} from 'react';
import {
  ScreenClassRender,
  Visible,
  Container,
  Row,
  Col,
} from 'react-grid-system';
import { useTheme } from 'styled-components';

import LogoSolidOverlayCarouselDesktop from '../SVG/Logo/LogoSolidOverlayCarouselDesktop';
import LogoSolidOverlayCarouselMobile from '../SVG/Logo/LogoSolidOverlayCarouselMobile';
import SwitchTransition from '../Partial/SwitchTransition';
import Section from '../Partial/Section';
import { ContentContext } from '../../content/config';
import { ShopPackContext } from '../../config/ShopPackContext';
import { logCount, counters } from '../../track';
import FadeIn from '../Partial/FadeIn';
import Sticker from '../Sticker';

import Carousel from './Carousel';
import CartIcon from '../SVG/Icon/CartIcon';
import ArrowIcon from '../SVG/Icon/ArrowIcon';
import StickersOnImg from './StickersOnImg';

import {
  CreativeCarouselLayout,
  Overlay,
  CurrentLayoutDesktop,
  CurrentLayoutMobile,
  CurrentImageLayout,
  CurrentTitle,
  CurrentName,
  CurrentDescription,
  NextImageLayout,
  NextLayout,
  NextButton,
  NextName,
  NextTitle,
  CurrentProfile,
  MobileButtonRow,
  NextButtonMobile,
  ShopPackButton,
} from './styles';
import { navHeight } from '../Nav/Launch/styles';

const transitionStyles = {
  entering: { y: 0 },
  entered: { y: 0 },
  exiting: { transform: 'translateY(-20px)' },
  exited: { transform: 'translateY(20px)' },
};

export default () => {
  const { content } = useContext(ContentContext);
  const { setSelectedShopPackIndex } = useContext(ShopPackContext);
  const { creatives } = content;

  const theme = useTheme();

  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = useCallback(() => {
    if (activeIndex === creatives.length - 1) setActiveIndex(0);
    else setActiveIndex(activeIndex + 1);
  }, [activeIndex]);

  useEffect(() => {
    // console.log(activeIndex);
    logCount(counters[`VIEW_CREATIVE_CAROUSEL_ITEM_${activeIndex}`]);
  }, [activeIndex]);

  const scrollIntoView = (index = 0) => {
    const el = document.getElementById('product-gallery');
    const offset =
      window.innerWidth > theme.breakpoints.lg
        ? navHeight.desktop
        : navHeight.mobile;

    if (el)
      window.scrollTo({
        behavior: 'smooth',
        top:
          el.getBoundingClientRect().top -
          document.body.getBoundingClientRect().top -
          offset,
      });

    setSelectedShopPackIndex(index);
    logCount(counters[`CREATIVE_CAROUSEL_CLICK_SHOP_PACK_${index}`]);
  };

  return (
    <Fragment>
      <Section
        id="creatives"
        background="white"
        paddingY={{ top: false, bottom: false }}
      >
        <CreativeCarouselLayout>
          <FadeIn>
            <ScreenClassRender
              render={screenClass => (
                <Container fluid={['xs', 'sm'].includes(screenClass)}>
                  <Row>
                    {/* desktop left content */}
                    <Visible md lg xl xxl>
                      <Col md={3}>
                        <CurrentLayoutDesktop>
                          <SwitchTransition
                            transitionKey={activeIndex}
                            transitionStyles={transitionStyles}
                          >
                            <CurrentProfile>
                              <CurrentTitle>
                                {creatives[activeIndex].title}
                              </CurrentTitle>
                              <CurrentName>
                                {creatives[activeIndex].name}
                              </CurrentName>
                            </CurrentProfile>
                          </SwitchTransition>

                          <SwitchTransition
                            transitionKey={activeIndex}
                            delay={100}
                            transitionStyles={transitionStyles}
                          >
                            <CurrentDescription>
                              {creatives[activeIndex].description}
                            </CurrentDescription>

                            <ShopPackButton
                              onClick={() => {
                                scrollIntoView(activeIndex);
                              }}
                            >
                              <CartIcon />{' '}
                              <span>
                                {creatives[activeIndex].shopPackButtonText}
                              </span>
                            </ShopPackButton>
                          </SwitchTransition>
                        </CurrentLayoutDesktop>
                      </Col>
                    </Visible>

                    {/* current image */}
                    <Col xs={12} md={6}>
                      <CurrentImageLayout>
                        <Carousel
                          activeIndex={activeIndex}
                          enableImageCarousel={true}
                        />
                        <Overlay>
                          <Visible xs sm>
                            <LogoSolidOverlayCarouselMobile />
                          </Visible>
                          <Visible md lg xl xxl>
                            <LogoSolidOverlayCarouselDesktop />
                          </Visible>
                        </Overlay>

                        <StickersOnImg activeIndex={activeIndex} />
                      </CurrentImageLayout>

                      {/* mobile bottom content */}
                      <Visible xs sm>
                        <CurrentLayoutMobile>
                          <SwitchTransition
                            transitionKey={activeIndex}
                            transitionStyles={transitionStyles}
                          >
                            <CurrentProfile>
                              <CurrentTitle>
                                {creatives[activeIndex].title}
                              </CurrentTitle>
                              <CurrentName>
                                {creatives[activeIndex].name}
                              </CurrentName>
                            </CurrentProfile>

                            <CurrentDescription>
                              {creatives[activeIndex].description}
                            </CurrentDescription>
                          </SwitchTransition>

                          <SwitchTransition
                            transitionKey={activeIndex}
                            delay={100}
                            transitionStyles={transitionStyles}
                          >
                            <MobileButtonRow>
                              <ShopPackButton
                                onClick={() => {
                                  scrollIntoView(activeIndex);
                                }}
                              >
                                <CartIcon />{' '}
                                <span>
                                  {creatives[activeIndex].shopPackButtonText}
                                </span>
                              </ShopPackButton>

                              <NextButtonMobile
                                onClick={() => {
                                  updateIndex();
                                }}
                                aria-label={content.ariaLabel.next}
                              >
                                <ArrowIcon />
                              </NextButtonMobile>
                            </MobileButtonRow>
                          </SwitchTransition>
                        </CurrentLayoutMobile>
                      </Visible>
                    </Col>

                    {/* next  */}
                    <Visible md lg xl xxl>
                      <Col md={3}>
                        <NextLayout>
                          <NextButton
                            onClick={() => {
                              updateIndex();
                            }}
                          >
                            <SwitchTransition
                              transitionKey={activeIndex}
                              delay={200}
                              transitionStyles={transitionStyles}
                            >
                              <NextName>
                                {
                                  creatives[
                                    (activeIndex + 1) % creatives.length
                                  ].name
                                }
                              </NextName>
                              <NextTitle>
                                {
                                  creatives[
                                    (activeIndex + 1) % creatives.length
                                  ].title
                                }{' '}
                                <ArrowIcon />
                              </NextTitle>
                            </SwitchTransition>
                          </NextButton>
                          <NextImageLayout>
                            <Carousel
                              activeIndex={activeIndex + 1}
                              enableImageCarousel={false}
                            />

                            <Overlay>
                              <LogoSolidOverlayCarouselDesktop />
                            </Overlay>
                          </NextImageLayout>
                        </NextLayout>
                      </Col>
                    </Visible>
                  </Row>
                </Container>
              )}
            />
          </FadeIn>
        </CreativeCarouselLayout>

        <ScreenClassRender
          render={screenClass => (
            <Fragment>
              <Sticker
                id={5}
                style={{
                  position: 'absolute',
                  bottom: ['xs'].includes(screenClass) ? '-6%' : '-10%',
                  left: '15%',
                }}
              />
            </Fragment>
          )}
        />
      </Section>
    </Fragment>
  );
};
