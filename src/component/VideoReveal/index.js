import React, { useRef, useContext } from 'react';
import { ScreenClassRender } from 'react-grid-system';
import { useTransform, useScroll, easeInOut } from 'framer-motion';
import { useTheme } from 'styled-components';

import Section from '../Partial/Section';
import MutedVideo from '../Partial/MutedVideo';
import ScrollLayout from '../Partial/ScrollLayout';
import LogoSolidOverlay from '../SVG/Logo/LogoSolidOverlay';
import { ContentContext } from '../../content/config';

import { VideoRevealLayout, Clip } from './styles';

export default () => {
  const ref = useRef(null);
  const theme = useTheme();

  const { content } = useContext(ContentContext);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const clipScale = useTransform(scrollYProgress, [0, 1], [1, 5], {
    ease: easeInOut,
  });
  const clipOpacity = useTransform(scrollYProgress, [0.5, 1], [1, 0], {
    ease: easeInOut,
  });
  const clipPointerEvents = useTransform(scrollYProgress, latest =>
    latest < 0.6 ? 'auto' : 'none',
  );

  return (
    <Section paddingY={{ top: false, bottom: false }} background="darkGray">
      <ScrollLayout ref={ref} height={'200vh'}>
        <VideoRevealLayout>
          <ScreenClassRender
            render={screenClass => (
              <MutedVideo
                videoSrc={
                  ['xs', 'sm', 'md'].includes(screenClass)
                    ? content.trailer.srcMobile
                    : content.trailer.srcDesktop
                }
              />
            )}
          />

          <Clip
            style={{
              scale: clipScale,
              opacity: clipOpacity,
              pointerEvents: clipPointerEvents,
            }}
          >
            <LogoSolidOverlay color={theme.colors.cyan} />
          </Clip>
        </VideoRevealLayout>
      </ScrollLayout>
    </Section>
  );
};
