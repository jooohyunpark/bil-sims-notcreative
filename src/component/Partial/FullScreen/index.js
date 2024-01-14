import React, { useEffect, useState, useCallback } from 'react';
import { utils } from '@amzn/tina-ui';

export const useFullHeight = () => {
  const [data, setData] = useState({
    fullHeight: 0,
    topNavHeight: 0,
    bottomNavHeight: 0,
  });
  const [isMshop, setIsMshop] = useState(false);
  const [bottomNav, setBottomNav] = useState(0);

  const handleResize = useCallback(() => {
    const getTopNavHeight = () => {
      const navDesktop =
        window?.parent?.document.querySelector('header#navbar-main')
          ?.clientHeight || 0;
      const navMobile =
        window?.parent?.document.querySelector('header#nav-main')
          ?.clientHeight || 0;

      return isMshop ? navMobile : 0;
    };

    const getStoresHeaderHeight = () => {
      const storesHeader =
        window?.parent?.document.querySelector('.stores-page #header')
          ?.clientHeight || 0;

      return isMshop ? storesHeader : 0;
    };

    setData({
      fullHeight: `calc(100vh - ${getTopNavHeight() +
        getStoresHeaderHeight() +
        bottomNav}px)`,
      topNavHeight: getTopNavHeight() + getStoresHeaderHeight(),
      bottomNavHeight: bottomNav,
    });
  }, [bottomNav, isMshop]);

  useEffect(() => {
    utils.detectMShop().then(state => {
      setIsMshop(state);
    });

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  /*
   * Handling bottom navbar height in mShop.
   */
  useEffect(() => {
    if (isMshop) {
      // eslint-disable-next-line
      window.P?.when('ConfigChromeFramework').execute(ext => {
        if (ext.getBottomBarsHeight) {
          ext.getBottomBarsHeight({
            successCallback: result => {
              setBottomNav(+result.visibleHeight);
            },
            failCallback: () => {
              console.log('Failed to fetch bottom nav height');
            },
          });
        } else {
          setBottomNav(99);
        }
      });
    }
  }, [isMshop]);

  useEffect(() => {
    handleResize();
  }, [isMshop, bottomNav]);

  return data;
};

export const FullScreen = ({ children = null, style = {} }) => {
  const { fullHeight } = useFullHeight();

  return (
    <div
      style={{
        width: '100%',
        height: fullHeight,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default FullScreen;
