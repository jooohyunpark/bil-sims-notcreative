import React, { Fragment } from 'react';
import { ScreenClassRender } from 'react-grid-system';
import Sticker from '../../Sticker';
import SwitchTransition from '../../Partial/SwitchTransition';

export default ({ activeIndex = 0 }) => {
  const stickerIdConfig = [12, 16, 17, 6];

  return (
    <Fragment>
      <SwitchTransition transitionKey={activeIndex}>
        <ScreenClassRender
          render={screenClass => {
            const isMobile = ['xs', 'sm'].includes(screenClass);

            return (
              <Sticker
                id={stickerIdConfig[activeIndex] || 1}
                style={{
                  position: 'absolute',
                  left: !isMobile && '15%',
                  right: isMobile && '5%',
                  top: isMobile ? '8%' : '2%',
                }}
              />
            );
          }}
        />
      </SwitchTransition>
    </Fragment>
  );
};
