import React from 'react';
import { Visible } from 'react-grid-system';
import NotCreativeTextSVGDesktop from '../SVG/NotCreativeText/Desktop';
import NotCreativeTextSVGMobile from '../SVG/NotCreativeText/Mobile';

import { NotCreativeLayout } from './styles';

export default props => (
  <NotCreativeLayout {...props}>
    <Visible xs sm md lg>
      <NotCreativeTextSVGMobile />
    </Visible>
    <Visible xl xxl>
      <NotCreativeTextSVGDesktop />
    </Visible>
  </NotCreativeLayout>
);
