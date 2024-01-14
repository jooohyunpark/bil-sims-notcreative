import React, { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import { useWidgetContext } from '../WidgetContext';
import {
  publisher,
  counters,
  logCount,
  trackDwellTime,
  trackScrollDepth,
  bindLogCountAll,
} from '../../track';
import { SERVICE_NAME } from '../../track/constants';

const useQuery = () => {
  const { search } = useLocation();
  return useMemo(
    () => new URLSearchParams(search.concat(window.location.search)), // had to merge these due to hash router's nature
    [search],
  );
};

const TrackingConfig = () => {
  const query = useQuery();

  const widgetContext = useWidgetContext();
  const domain = window.location.host.includes('www.amazon.') ? 'prod' : 'test';

  useEffect(() => {
    publisher.init({
      monitorEndpoint:
        'https://qbkb765hhl.execute-api.us-east-1.amazonaws.com/prod/v1/monitoring',
      site: 'BrandStores',
      realm: 'USAmazon',
      domain,
      logToConsole: false,
      serviceName: SERVICE_NAME,
    });

    logCount(counters.PAGE_VIEW);
    trackScrollDepth();
    trackDwellTime();

    const channel = query.get('channel');
    const counter = counters[`MEDIA_${channel}`];
    logCount(counters.MEDIA_TOTAL);
    if (counter) logCount(counter);
  }, []);

  useEffect(() => {
    if (widgetContext?.requestContext?.internal) bindLogCountAll();
  }, [widgetContext]);

  return <></>;
};

export default TrackingConfig;
