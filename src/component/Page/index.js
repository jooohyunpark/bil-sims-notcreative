import React, { Fragment } from 'react';
import VideoReveal from '../VideoReveal';
import AnimatingText from '../AnimatingText';
import Countdown from '../Countdown';
import { NavPrelaunch, NavLaunch } from '../Nav';
import { HeroPrelaunch, HeroLaunch } from '../Hero';
import {
  ProductGalleryPrelaunch,
  ProductGalleryLaunch,
} from '../ProductGallery';
import CreativeCarousel from '../CreativeCarousel';
import Episodes from '../Episodes';
import NotifyMeContextProvider from '../../config/NotifyMeContext';
import ShopPackContextProvider from '../../config/ShopPackContext';
import Disclaimer from '../Disclaimer';

export const PagePrelaunch = () => (
  <Fragment>
    <NotifyMeContextProvider>
      <HeroPrelaunch />
      <Countdown />
      <NavPrelaunch />
      <AnimatingText />
      <VideoReveal />
      <ProductGalleryPrelaunch />
      <Disclaimer />
    </NotifyMeContextProvider>
  </Fragment>
);

export const PageLaunch = () => (
  <Fragment>
    <ShopPackContextProvider>
      <NavLaunch />
      <HeroLaunch />
      <Episodes />
      <CreativeCarousel />
      <AnimatingText />
      <ProductGalleryLaunch />
      <Disclaimer />
    </ShopPackContextProvider>
  </Fragment>
);
