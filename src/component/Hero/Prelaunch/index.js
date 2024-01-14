import React, { useContext } from 'react';
import { easeInOut } from 'framer-motion';
import { ScreenClassRender } from 'react-grid-system';

import { ContentContext } from '../../../content/config';
import Section from '../../Partial/Section';
import MutedVideo from '../../Partial/MutedVideo';
import LogoOverlay from '../../SVG/Logo/LogoOverlay';
import { useFullHeight } from '../../Partial/FullScreen';
import LogoIcon from '../../SVG/Logo/Logo';
import { HeroLayout, Clip, Prompt, Logo, Text } from './styles';

export default () => {
  const { fullHeight } = useFullHeight();
  const { content } = useContext(ContentContext);

  return (
    <Section paddingY={{ top: false, bottom: false }} background="white">
      <HeroLayout $height={fullHeight}>
        <ScreenClassRender
          render={screenClass => (
            <MutedVideo
              videoSrc={
                ['xs', 'sm', 'md'].includes(screenClass)
                  ? content.hero.prelaunchVideo.srcMobile
                  : content.hero.prelaunchVideo.srcDesktop
              }
              style={{ objectFit: 'cover' }}
            />
          )}
        />

        <Prompt>
          <Logo>
            <LogoIcon />
          </Logo>
          <Text>{content.hero.promptPrelaunch}</Text>
        </Prompt>

        <Clip
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 5, opacity: 0, pointerEvents: 'none' }}
          transition={{ duration: 1, delay: 2, ease: easeInOut }}
        >
          <LogoOverlay />
        </Clip>
      </HeroLayout>
    </Section>
  );
};
