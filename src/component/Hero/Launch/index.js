import React, { useContext } from 'react';
import { ScreenClassRender } from 'react-grid-system';

import { ContentContext } from '../../../content/config';
import Section from '../../Partial/Section';
import MutedVideo from '../../Partial/MutedVideo';
import { useFullHeight } from '../../Partial/FullScreen';
import LogoIcon from '../../SVG/Logo/Logo';
import { HeroLayout, Prompt, Logo, Text } from './styles';

export default () => {
  const { content } = useContext(ContentContext);
  const { fullHeight, topNavHeight, bottomNavHeight } = useFullHeight();

  return (
    <Section
      id="hero"
      paddingY={{ top: false, bottom: false }}
      background="darkGray"
    >
      <HeroLayout $height={fullHeight} $offset={topNavHeight + bottomNavHeight}>
        <ScreenClassRender
          render={screenClass => (
            <MutedVideo
              videoSrc={
                ['xs', 'sm', 'md'].includes(screenClass)
                  ? content.hero.launchVideo.srcMobile
                  : content.hero.launchVideo.srcDesktop
              }
              style={{ objectFit: 'contain' }}
            />
          )}
        />

        <Prompt>
          <Logo>
            <LogoIcon />
          </Logo>

          <Text>{content.hero.promptLaunch}</Text>
        </Prompt>
      </HeroLayout>
    </Section>
  );
};
