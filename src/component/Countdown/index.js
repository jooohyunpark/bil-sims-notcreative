import React, { Fragment, useContext, useRef, useEffect } from 'react';
import Countdown from 'react-countdown';
import { useScroll, useInView } from 'framer-motion';
import {
  ScreenClassRender,
  Visible,
  Container,
  Row,
  Col,
} from 'react-grid-system';

import Section from '../Partial/Section';
import { ContentContext, Content } from '../../content/config';
import GridBackgroundSVGDesktop from '../SVG/Grid/Countdown/Desktop';
import GridBackgroundSVGMobile from '../SVG/Grid/Countdown/Mobile';
import Sticker from '../Sticker';
import NotCreativeText from '../NotCreativeText';
import SimsSVG from '../SVG/Logo/Sims';

import {
  CountdownLayout,
  Grid,
  PanelLayout,
  PanelLabel,
  PanelNumber,
  CountdownContent,
  Headline,
  Description,
  Caption,
  Eyebrow,
  EyebrowLayout,
  LogoDiv,
} from './styles';
import FadeIn from '../Partial/FadeIn';

const pkg = require('../../../package.json');

const Panel = ({ targetId = '', children = null }) => {
  const panelRef = useRef(null);
  const isInView = useInView(panelRef);

  const setPosition = () => {
    const targetPath = document.querySelector(
      `#${pkg.campaign.id} #${targetId}`,
    );

    if (targetPath) {
      const { left, top, width, height } = targetPath.getBoundingClientRect();
      const grid = targetPath.closest('#countdown-grid');
      const gridTop = grid.getBoundingClientRect().top;

      panelRef.current.style.left = `${left + width / 2}px`;
      panelRef.current.style.top = `${top - gridTop + height / 2}px`;
      panelRef.current.style.fontSize = `${width * 0.5}px`;
    }
  };

  useEffect(() => {
    window.addEventListener('resize', setPosition);
    setPosition();

    return () => {
      window.removeEventListener('resize', setPosition);
    };
  }, []);

  useEffect(() => {
    if (useInView) setPosition();
  }, [isInView]);

  return <PanelLayout ref={panelRef}>{children}</PanelLayout>;
};

const renderer = ({ days, hours, minutes, seconds, completed }) =>
  completed ? (
    <></>
  ) : (
    <Fragment>
      <Panel targetId="simsCountdownDays">
        <FadeIn delay={0} once={false}>
          <PanelNumber>{days}</PanelNumber>
          <PanelLabel>
            <Content id="countdown.days" />
          </PanelLabel>
        </FadeIn>
      </Panel>
      <Panel targetId="simsCountdownHours">
        <FadeIn delay={0.1} once={false}>
          <PanelNumber>{hours}</PanelNumber>
          <PanelLabel>
            <Content id="countdown.hours" />
          </PanelLabel>
        </FadeIn>
      </Panel>
      <Panel targetId="simsCountdownMinutes">
        <FadeIn delay={0.2} once={false}>
          <PanelNumber>{minutes}</PanelNumber>
          <PanelLabel>
            <Content id="countdown.minutes" />
          </PanelLabel>
        </FadeIn>
      </Panel>
      <Panel targetId="simsCountdownSeconds">
        <FadeIn delay={0.3} once={false}>
          <PanelNumber>{seconds}</PanelNumber>
          <PanelLabel>
            <Content id="countdown.seconds" />
          </PanelLabel>
        </FadeIn>
      </Panel>
    </Fragment>
  );

const CaptionText = () => {
  const { content } = useContext(ContentContext);

  return (
    <Caption>
      <span>{content.countdown.caption}</span>
      <LogoDiv>
        <SimsSVG />
      </LogoDiv>
    </Caption>
  );
};

export default () => {
  const { content } = useContext(ContentContext);

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  });

  useEffect(() => {
    const nav = document.getElementById('sims-nav');

    const unsubscribe = scrollYProgress.on('change', value => {
      if (value > 0.9) nav.classList.add('show');
      else nav.classList.remove('show');
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Fragment>
      <Section
        ref={ref}
        background="darkGray"
        paddingY={{ top: false, bottom: true }}
      >
        <CountdownLayout>
          <EyebrowLayout>
            <Container>
              <Row>
                <Col xs={12}>
                  <FadeIn>
                    <Eyebrow>{content.countdown.eyebrow}</Eyebrow>
                  </FadeIn>
                </Col>
              </Row>
            </Container>
          </EyebrowLayout>

          <Grid id="countdown-grid">
            <Fragment>
              <Visible xs sm md>
                <GridBackgroundSVGMobile />
              </Visible>
              <Visible lg xl xxl>
                <GridBackgroundSVGDesktop />
              </Visible>
            </Fragment>

            <Countdown
              date={content.countdown.launchDate}
              renderer={renderer}
            />
          </Grid>

          <CountdownContent>
            <FadeIn>
              <Container>
                <Row>
                  <Col xs={12} lg={6} xl={4} offset={{ lg: 3, xl: 2 }}>
                    <Headline>
                      <NotCreativeText />
                    </Headline>
                    <Visible xs sm md lg>
                      <CaptionText />
                    </Visible>
                  </Col>
                  <Col xs={12} lg={6} xl={4} offset={{ lg: 3, xl: 0 }}>
                    <Description>
                      <Content id="countdown.description" />
                    </Description>
                  </Col>

                  <Visible xl xxl>
                    <Col xs={12} xl={6} offset={{ xl: 3 }}>
                      <CaptionText />
                    </Col>
                  </Visible>
                </Row>
              </Container>
            </FadeIn>
          </CountdownContent>
        </CountdownLayout>

        {/* stickers */}
        <ScreenClassRender
          render={screenClass => {
            const isMobile = ['xs', 'sm', 'md'].includes(screenClass);

            return (
              <Fragment>
                <Sticker
                  id={5}
                  style={{
                    position: 'absolute',
                    bottom: isMobile ? '-4%' : '-5%',
                    left: '18%',
                  }}
                />
                {!isMobile && (
                  <Sticker
                    id={6}
                    style={{
                      position: 'absolute',
                      top: '18%',
                      left: isMobile ? '1%' : '8%',
                    }}
                  />
                )}
                {!isMobile && (
                  <Sticker
                    id={7}
                    style={{
                      position: 'absolute',
                      top: isMobile ? '0%' : '10%',
                      right: isMobile ? '0%' : '8%',
                    }}
                  />
                )}
              </Fragment>
            );
          }}
        />
      </Section>
    </Fragment>
  );
};
