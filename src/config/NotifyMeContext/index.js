import React, { useState, useEffect, createContext, useContext } from 'react';
import { isSignedIn } from '@amzn/adt-utils';
import { isSubscribed, subscribe, unsubscribe } from './api';
import { logCount, counters } from '../../track';
import { ContentContext } from '../../content/config';

export const NotifyMeContext = createContext();

const NotifyMeContextProvider = ({ children }) => {
  const { content } = useContext(ContentContext);

  const SUBSCRIPTION_LIST_ID = content.nav.notifyMe.subscriptionListId;

  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [authed, setAuthed] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const toggleSubscription = async () => {
    setLoaded(false);

    setTimeout(async () => {
      try {
        if (subscribed) {
          logCount(counters.NOTIFY_ME_UNSUBSCRIBE);
          await unsubscribe(SUBSCRIPTION_LIST_ID, setLoaded);
        } else {
          logCount(counters.NOTIFY_ME_SUBSCRIBE);
          await subscribe(SUBSCRIPTION_LIST_ID, setLoaded);
        }
        setSubscribed(!subscribed);
      } catch (e) {
        setError(true);
      }
    }, 1000);
  };

  const fetchOnload = async () => {
    try {
      setAuthed(isSignedIn());

      const subscribedRes = await isSubscribed(SUBSCRIPTION_LIST_ID, setLoaded);

      setSubscribed(subscribedRes);
      setLoaded(true);
    } catch (e) {
      setError(true);
      setLoaded(true);
    }
  };

  useEffect(() => {
    fetchOnload();
  }, []);

  return (
    <NotifyMeContext.Provider
      value={{
        loaded,
        setLoaded,
        authed,
        subscribed,
        error,
        toggleSubscription,
      }}
    >
      {children}
    </NotifyMeContext.Provider>
  );
};

export default NotifyMeContextProvider;
