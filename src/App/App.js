import React, { useEffect, Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { App as TinaApp } from '@amzn/tina-ui';

import asins from '../data/asins';
import WidgetContextProvider from '../config/WidgetContext';
import ContentContextProvider, { LOCALE } from '../content/config';
import TrackingConfig from '../config/TrackingConfig';

import { PagePrelaunch, PageLaunch } from '../component/Page';
import StoresReset from '../component/StoresReset';

import { AppLayout } from './styles';
import { breakpoints, colors } from '../styles/vars';
import './app.css';

const imagesToPreload = [];

const App = () => {
  useEffect(() => {
    // Download all image assets in advance
    imagesToPreload.forEach(preloadAsset => {
      new Image().src = preloadAsset;
    });
  }, []);

  return (
    <Fragment>
      <StoresReset />

      <AppLayout>
        <ContentContextProvider>
          <WidgetContextProvider>
            <ThemeProvider
              theme={{
                colors: {
                  ...colors,
                },
                breakpoints: {
                  ...breakpoints,
                },
              }}
            >
              <TinaApp asinList={asins} defaultLocale={LOCALE} disableTwisters>
                <Router>
                  <TrackingConfig />

                  <Switch>
                    <Route path="/">
                      {/* <PagePrelaunch /> */}
                      <PageLaunch />
                    </Route>
                  </Switch>
                </Router>
              </TinaApp>
            </ThemeProvider>
          </WidgetContextProvider>
        </ContentContextProvider>
      </AppLayout>
    </Fragment>
  );
};

export default App;
