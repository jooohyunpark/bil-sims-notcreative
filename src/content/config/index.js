import React, { createContext, useEffect, useState } from 'react';
import { get } from 'lodash';

import * as config from '../translations';

const pkg = require('../../../package.json');

// define locale here
export const LOCALE = pkg.campaign.locale;

export const contentJSON = config[LOCALE];

export const ContentContext = createContext();

export const ContentContextProvider = ({ children = null }) => {
  const [locale, setLocale] = useState(LOCALE);
  const [content, setContent] = useState(
    config[LOCALE]?.resources || config.enUS.resources,
  );

  useEffect(() => {
    if (!config[LOCALE]) {
      // eslint-disable-next-line
      console.error('No matching locale.json found! Falling back to "enUS"');
    }

    setContent(config[LOCALE]?.resources || config.enUS.resources);
  }, [locale]);

  return (
    <ContentContext.Provider value={{ locale, setLocale, content }}>
      {children}
    </ContentContext.Provider>
  );
};

export const Content = ({ id = '' }) => (
  <ContentContext.Consumer>
    {({ content }) => {
      if (get(content, id).includes('™')) {
        const str = get(content, id).replaceAll('™', '<sup>™</sup>');

        return <span dangerouslySetInnerHTML={{ __html: str }}></span>;
      }

      if (get(content, id).includes('{{Not}}')) {
        const str = get(content, id).replaceAll(
          '{{Not}}',
          '<span class="line-through">Not</span>',
        );

        return <span dangerouslySetInnerHTML={{ __html: str }}></span>;
      }

      if (get(content, id).includes('\n')) {
        return (
          <span style={{ whiteSpace: 'pre-line' }}>{get(content, id)}</span>
        );
      }

      return <>{get(content, id) || null}</>;
    }}
  </ContentContext.Consumer>
);

export default ContentContextProvider;
