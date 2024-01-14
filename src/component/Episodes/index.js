import React, { useEffect, useContext, useState } from 'react';
import { Visible, Container, Row, Col } from 'react-grid-system';
import { Video } from '@amzn/tina-ui';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import getAssetPath from '../../util/asset';
import Section from '../Partial/Section';
import { ContentContext, Content } from '../../content/config';
import FadeIn from '../Partial/FadeIn';
import GridBackgroundSVGMobile from '../SVG/Grid/Episode/Mobile';
import GridBackgroundSVGDesktop from '../SVG/Grid/Episode/Desktop';
import NotCreativeText from '../NotCreativeText';
import Carousel from './Carousel';
import SwitchTransition from '../Partial/SwitchTransition';
import Sticker from '../Sticker';
import { logCount, counters } from '../../track';

import {
  EpisodesLayout,
  Background,
  Headline,
  NotCreativeTextDiv,
  HeadlineRow,
  VideoRow,
  CarouselDiv,
  VideoDiv,
  CarouselWrapper,
  Description,
  Title,
  AccordionLayout,
} from './styles';

export default () => {
  const { content } = useContext(ContentContext);
  const { episodes } = content;

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    logCount(
      counters[`EPISODE_${episodes.episodeData[activeIndex].id}_LOADED`],
    );
  }, [activeIndex]);

  return (
    <Section id="episodes" background="darkGray">
      <Background>
        <Visible xs sm md>
          <GridBackgroundSVGMobile />
        </Visible>
        <Visible lg xl xxl>
          <GridBackgroundSVGDesktop />
        </Visible>
      </Background>

      <EpisodesLayout>
        <Container>
          <HeadlineRow>
            <Col xs={12} lg={5}>
              <NotCreativeTextDiv>
                <NotCreativeText style={{ margin: 0 }} />
              </NotCreativeTextDiv>
            </Col>
            <Col
              xs={12}
              lg={6}
              xl={5}
              xxl={4}
              offset={{ lg: 1, xl: 2, xxl: 3 }}
            >
              <Headline>
                <FadeIn>
                  <Content id="episodes.headline" />
                </FadeIn>
              </Headline>
            </Col>
          </HeadlineRow>

          <FadeIn>
            <VideoRow gutterWidth={20}>
              <Col xs={12} md={9}>
                <VideoDiv>
                  <SwitchTransition transitionKey={activeIndex}>
                    <Video
                      vidUrl={getAssetPath(
                        episodes.episodeData[activeIndex].videoSrc,
                      )}
                      thumb={getAssetPath(
                        episodes.episodeData[activeIndex].posterSrc,
                      )}
                      textTrackUrl={
                        episodes.episodeData[activeIndex].textTrackUrl
                      }
                      setRef={e => {
                        e.current.onplay = () => {
                          logCount(
                            counters[
                              `EPISODE_${episodes.episodeData[activeIndex].id}_PLAY`
                            ],
                          );
                        };
                        e.current.onpause = () => {
                          logCount(
                            counters[
                              `EPISODE_${episodes.episodeData[activeIndex].id}_PAUSE`
                            ],
                          );
                        };
                        e.current.onended = () => {
                          logCount(
                            counters[
                              `EPISODE_${episodes.episodeData[activeIndex].id}_ENDED`
                            ],
                          );
                        };
                      }}
                    />
                  </SwitchTransition>
                </VideoDiv>
              </Col>

              {/* mobile title/description */}
              <Visible xs sm>
                <Col xs={12}>
                  <SwitchTransition transitionKey={activeIndex} delay={100}>
                    <AccordionLayout>
                      <Accordion disableGutters>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Title>
                            {episodes.episodeData[activeIndex].title}
                          </Title>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Description>
                            {episodes.episodeData[activeIndex].description}
                          </Description>
                        </AccordionDetails>
                      </Accordion>
                    </AccordionLayout>
                  </SwitchTransition>
                </Col>
              </Visible>

              {/* tiles */}
              <Col xs={12} md={3}>
                <CarouselWrapper>
                  <CarouselDiv>
                    <Carousel
                      activeIndex={activeIndex}
                      setActiveIndex={setActiveIndex}
                    />
                  </CarouselDiv>
                </CarouselWrapper>
              </Col>
            </VideoRow>
          </FadeIn>

          <Visible md lg xl xxl>
            <FadeIn>
              <Row>
                <Col xs={12} xl={9}>
                  <SwitchTransition transitionKey={activeIndex} delay={100}>
                    <Row>
                      <Col xs={12} lg={4}>
                        <Title>{episodes.episodeData[activeIndex].title}</Title>
                      </Col>
                      <Col xs={12} lg={8}>
                        <Description>
                          {episodes.episodeData[activeIndex].description}
                        </Description>
                      </Col>
                    </Row>
                  </SwitchTransition>
                </Col>
              </Row>
            </FadeIn>
          </Visible>
        </Container>
      </EpisodesLayout>

      <Sticker
        id={7}
        style={{ position: 'absolute', right: '5%', top: '1%' }}
      />
    </Section>
  );
};
