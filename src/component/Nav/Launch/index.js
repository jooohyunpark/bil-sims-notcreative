import React, { useContext, useState, useEffect } from 'react';
import { Container, Row, Col, Visible } from 'react-grid-system';
import { useTheme } from 'styled-components';
import SimsWithLogoSVG from '../../SVG/Logo/SimsWithLogo';
import { Content, ContentContext } from '../../../content/config';
import ChevronDownIcon from '../../SVG/Icon/ChevronDownIcon';
import ChevronUpIcon from '../../SVG/Icon/ChevronUpIcon';
import CloseIcon from '../../SVG/Icon/CloseIcon';
import SwitchTransition from '../../Partial/SwitchTransition';
import { useFullHeight } from '../../Partial/FullScreen';
import { logCount, counters } from '../../../track';
import {
  NavLayout,
  NavContent,
  Logo,
  PlayLink,
  ButtonRow,
  Button,
  navHeight,
  MobileMenuLayout,
  MobileMenu,
  CloseMenuButton,
  MobileMenuButton,
  Link,
  MobileMenuLink,
} from './styles';

export default () => {
  const { content } = useContext(ContentContext);
  const { nav } = content;
  const { fullHeight } = useFullHeight();

  const sectionData = [
    {
      key: 'nav.notCreative',
      target: 'hero',
      metricName: 'NAV_CLICK_NOT_CREATIVE',
    },
    {
      key: 'nav.episodes',
      target: 'episodes',
      metricName: 'NAV_CLICK_EPISODES',
    },
    {
      key: 'nav.creatives',
      target: 'creatives',
      metricName: 'NAV_CLICK_CREATIVES',
    },
    {
      key: 'nav.shopThePacks.desktop',
      target: 'product-gallery',
      metricName: 'NAV_CLICK_SHOP_PACKS',
    },
  ];

  const theme = useTheme();

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollIntoView = (id = '', index = 0, metricName = '') => {
    const el = document.getElementById(id);
    const offset =
      window.innerWidth > theme.breakpoints.lg
        ? navHeight.desktop
        : navHeight.mobile;

    setCurrentSectionIndex(index);

    if (el)
      window.scrollTo({
        behavior: 'smooth',
        top:
          el.getBoundingClientRect().top -
          document.body.getBoundingClientRect().top -
          offset,
      });

    if (counters[metricName]) logCount(counters[metricName]);
  };

  useEffect(() => {
    const onScroll = () => {
      sectionData.forEach((section, i) => {
        const targetSection = document.getElementById(section.target);

        if (
          targetSection &&
          targetSection.getBoundingClientRect().top <= window.innerHeight * 0.5
        ) {
          setCurrentSectionIndex(i);
        }
      });
    };
    window.addEventListener('scroll', onScroll);
    onScroll();

    const onResize = () => {
      if (window.innerWidth >= theme.breakpoints.lg) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', onResize);
    onResize();

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // useEffect(() => {
  //   console.log(currentSectionIndex);
  // }, [currentSectionIndex]);

  useEffect(() => {
    if (mobileMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [mobileMenuOpen]);

  return (
    <NavLayout
      id="sims-nav"
      // initial={{ y: -80 }}
      // animate={{ y: 0 }}
      // transition={{ duration: 0.5, delay: 1, ease: 'easeOut' }}
    >
      <Container style={{ background: 'inherit' }}>
        <Row>
          <Col xs={12}>
            <NavContent>
              <Logo>
                <SimsWithLogoSVG />
              </Logo>

              <ButtonRow>
                {/* desktop */}
                <Visible lg xl xxl>
                  {sectionData.map((d, i) => (
                    <Button
                      onClick={() => {
                        scrollIntoView(d.target, i, d.metricName);
                      }}
                      key={i}
                      $active={i === currentSectionIndex}
                    >
                      <Content id={d.key} />
                    </Button>
                  ))}

                  <Link
                    href={content.nav.eaStoreButton.url}
                    target="_blank"
                    onClick={() => {
                      logCount(counters.NAV_CLICK_EA_STORE);
                    }}
                  >
                    {content.nav.eaStoreButton.text}
                  </Link>
                </Visible>

                <SwitchTransition transitionKey={mobileMenuOpen}>
                  {!mobileMenuOpen && (
                    <PlayLink
                      href={nav.playForFreeButton.url}
                      target="_blank"
                      onClick={() => {
                        logCount(counters.NAV_CLICK_PLAY_FOR_FREE);
                      }}
                    >
                      {nav.playForFreeButton.text}
                    </PlayLink>
                  )}
                </SwitchTransition>

                <Visible xs sm md>
                  <Button
                    onClick={() => {
                      setMobileMenuOpen(!mobileMenuOpen);
                    }}
                    aria-label={
                      mobileMenuOpen
                        ? content.ariaLabel.close
                        : content.ariaLabel.open
                    }
                  >
                    {mobileMenuOpen ? (
                      <ChevronUpIcon color={'green'} />
                    ) : (
                      <ChevronDownIcon color={'green'} />
                    )}
                  </Button>
                </Visible>
              </ButtonRow>
            </NavContent>
          </Col>
        </Row>
      </Container>

      {/* mobile menu */}
      <Visible xs sm md>
        <MobileMenuLayout $open={mobileMenuOpen} $height={fullHeight}>
          <MobileMenu>
            {sectionData.map((d, i) => (
              <MobileMenuButton
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 0.15, delay: 0.15 + 0.05 * i },
                }}
                onClick={() => {
                  scrollIntoView(d.target, i, d.metricName);
                  setMobileMenuOpen(false);
                }}
                key={i}
                $active={i === currentSectionIndex}
              >
                <Content id={d.key} />
              </MobileMenuButton>
            ))}

            <MobileMenuLink
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.15,
                  delay: 0.15 + 0.05 * sectionData.length,
                },
              }}
              href={content.nav.eaStoreButton.url}
              target="_blank"
              onClick={() => {
                logCount(counters.NAV_CLICK_EA_STORE);
              }}
            >
              {content.nav.eaStoreButton.text}
            </MobileMenuLink>

            <PlayLink
              href={nav.playForFreeButton.url}
              target="_blank"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.15,
                  delay: 0.15 + 0.05 * (sectionData.length + 1),
                },
              }}
              onClick={() => {
                logCount(counters.NAV_CLICK_PLAY_FOR_FREE);
              }}
            >
              {nav.playForFreeButton.text}
            </PlayLink>

            <CloseMenuButton
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.15,
                  delay: 0.15 + 0.05 * (sectionData.length + 2),
                },
              }}
              onClick={() => {
                setMobileMenuOpen(false);
              }}
              aria-label={content.ariaLabel.close}
            >
              <CloseIcon /> Close menu
            </CloseMenuButton>
          </MobileMenu>
        </MobileMenuLayout>
      </Visible>
      {/*  */}
    </NavLayout>
  );
};
