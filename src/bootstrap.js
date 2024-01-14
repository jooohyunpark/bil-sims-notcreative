import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from 'store';
import App from 'App';

if (__DEV__) {
  // only include reaxt-axe in dev
  // eslint-disable-next-line global-require, import/no-extraneous-dependencies
  const axe = require('react-axe');
  axe(React, ReactDOM, 3000, undefined, { include: [[`#${CUSTOM_ID}`]] });
}

/**
 * Mounts the React App
 */
const target = document.getElementById(CUSTOM_ID); // auto generated CUSTOM_ID based on { campaign.id }
const root = createRoot(target); // createRoot(container!) if you use TypeScript
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
