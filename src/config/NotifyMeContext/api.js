export const getOrigin = () =>
  __DEV__ ? 'https://www.amazon.com' : window.location.origin;

const operationError = (operation, res) => {
  const error = new Error(`Failed to fetch Operation "${operation}"`);
  error.response = res;
  return error;
};

const fetchSubscriptionOperation = (
  subscriptionListId,
  operation,
  setLoaded,
) => {
  const url = `${getOrigin()}/adscta/creative/notifyme/${operation}?subscriptionListId=${subscriptionListId}&ref=wwca_cta_s`;

  return window
    .fetch(url, {
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res => {
      setLoaded(true);
      if (res.status >= 200 && res.status < 300) return res;

      throw operationError(operation, res);
    })
    .then(res => res.json())
    .then(res => {
      if (typeof res.status === 'boolean') return res.status;

      if (res.status === 'true') return true;
      if (res.status === 'false') return false;

      switch (res.status) {
        case '0':
        case '3':
          return true;
        case '1':
        case '2':
        default:
          return false;
      }
    })
    .catch(e => {
      setLoaded(true);
      throw operationError(operation, e);
    });
};

export const isSubscribed = (subscriptionListId, setLoaded) =>
  fetchSubscriptionOperation(subscriptionListId, 'issubscribed', setLoaded);

export const subscribe = (subscriptionListId, setLoaded) =>
  fetchSubscriptionOperation(subscriptionListId, 'subscribe', setLoaded);

export const unsubscribe = (subscriptionListId, setLoaded) =>
  fetchSubscriptionOperation(subscriptionListId, 'unsubscribe', setLoaded);

export const getSubscriptionsLink = () =>
  `${getOrigin()}/preferences/subscriptions/your-subscriptions/current-subscriptions`;

export default {
  isSubscribed,
  subscribe,
  unsubscribe,
  getSubscriptionsLink,
};
