import React, { createContext, useState, useEffect } from 'react';
import testData from './testData.json';

const pkg = require('../../../package.json');

const { tileId } = pkg.campaign;

export const WidgetContext = createContext();

const devMode = window.location.href.indexOf('localhost') > -1;

export const useWidgetContext = () => {
  const [widgetContext, setWidgetContext] = useState({});

  useEffect(() => {
    if (devMode) {
      setWidgetContext(testData);
      return;
    }

    if (tileId.length === 0) return;

    if (ESCAPE_IFRAME) {
      const data = document.querySelector(`#${tileId} iframe`)?.contentWindow
        ?.widgetContext;
      setWidgetContext(data);
    } else {
      setWidgetContext(window.widgetContext);
    }
  }, []);

  return widgetContext;
};

export const WidgetContextProvider = ({ children = null }) => {
  const widgetContext = useWidgetContext();

  return (
    <WidgetContext.Provider value={{ widgetContext }}>
      {children}
    </WidgetContext.Provider>
  );
};

export default WidgetContextProvider;
