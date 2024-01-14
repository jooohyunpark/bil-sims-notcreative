import React, { useContext, useEffect, useState, useRef } from 'react';
import { Visible } from 'react-grid-system';
import { Button, Link } from '../../Partial/Button';
import NotifyMe from '../../Partial/NotifyMe';
import { ContentContext } from '../../../content/config';
import { useFullHeight } from '../../Partial/FullScreen';
import SimsSVG from '../../SVG/Logo/Sims';
import ChevronUpIcon from '../../SVG/Icon/ChevronUpIcon';
import ChevronDownIcon from '../../SVG/Icon/ChevronDownIcon';
import CloseIcon from '../../SVG/Icon/CloseIcon';

import { counters, logCount } from '../../../track';

import {
  Nav,
  NavLayout,
  LogoDiv,
  MenuButton,
  MobileMenuLayout,
  ShopThePacksButtonMobile,
} from './styles';

export default ({ ...props }) => {
  const ref = useRef(null);
  const { content } = useContext(ContentContext);
  const { bottomNavHeight } = useFullHeight();

  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToProductGallery = () => {
    const productGallery = document.getElementById('product-gallery');

    productGallery.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });

    logCount(counters.NAV_CLICK_SHOP_PACKS);
  };

  // close mobile menu on hiding nav
  useEffect(() => {
    const onClassChange = () => {
      if (!ref.current.className.includes('show')) setMenuOpen(false);
    };

    const observer = new MutationObserver(onClassChange);
    observer.observe(ref.current, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Nav id="sims-nav" ref={ref} $bottomNavHeight={bottomNavHeight} {...props}>
      {/* mobile menu */}
      <Visible xs sm md>
        <MobileMenuLayout $open={menuOpen} $bottomNavHeight={bottomNavHeight}>
          <MenuButton
            onClick={() => {
              setMenuOpen(false);
            }}
            aria-label={content.ariaLabel.close}
          >
            <ChevronDownIcon />
          </MenuButton>

          <a
            href={content.nav.eaStoreButton.url}
            target="_blank"
            onClick={() => {
              logCount(counters.NAV_CLICK_EA_STORE);
            }}
          >
            {content.nav.eaStoreButton.text}
          </a>

          <a
            href={content.nav.playForFreeButton.url}
            target="_blank"
            onClick={() => {
              logCount(counters.NAV_CLICK_PLAY_FOR_FREE);
            }}
          >
            {content.nav.playForFreeButton.text}
          </a>
        </MobileMenuLayout>
      </Visible>
      {/*  */}

      <NavLayout>
        <LogoDiv>
          <SimsSVG />
        </LogoDiv>

        <Visible xs sm md>
          <ShopThePacksButtonMobile onClick={scrollToProductGallery}>
            {content.nav.shopThePacks.mobile}
          </ShopThePacksButtonMobile>
          <NotifyMe />
          <MenuButton
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
            aria-label={
              menuOpen ? content.ariaLabel.close : content.ariaLabel.open
            }
          >
            {menuOpen ? <CloseIcon /> : <ChevronUpIcon />}
          </MenuButton>
        </Visible>

        <Visible lg xl xxl>
          <Link
            href={content.nav.eaStoreButton.url}
            target="_blank"
            onClick={() => {
              logCount(counters.NAV_CLICK_EA_STORE);
            }}
          >
            {content.nav.eaStoreButton.text}
          </Link>
          <Link
            href={content.nav.playForFreeButton.url}
            target="_blank"
            onClick={() => {
              logCount(counters.NAV_CLICK_PLAY_FOR_FREE);
            }}
          >
            {content.nav.playForFreeButton.text}
          </Link>
          <Button onClick={scrollToProductGallery}>
            {content.nav.shopThePacks.desktop}
          </Button>
          <NotifyMe />
        </Visible>
      </NavLayout>
    </Nav>
  );
};
