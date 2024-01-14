import React, { Fragment, useContext } from 'react';
import { signIn } from '@amzn/adt-utils';
import { Spinner } from '@amzn/tina-ui';

import { Content } from '../../../content/config';
import { logCount, counters } from '../../../track';
import { RenderWhen } from '../RenderWhen';
import { NotifyMeContext } from '../../../config/NotifyMeContext';

import { NotifyMeLayout, Button, ErrorText } from './styles';

const NotifyMe = () => {
  const { loaded, authed, subscribed, toggleSubscription } = useContext(
    NotifyMeContext,
  );

  const handleButtonClick = () => {
    if (authed && loaded) {
      toggleSubscription();
    } else if (!authed && loaded) {
      logCount(counters.NOTIFY_ME_SIGN_IN);
      signIn();
    } else {
      return null;
    }

    return null;
  };

  return (
    <NotifyMeLayout>
      <Button
        disabled={!loaded}
        onClick={e => {
          e.preventDefault();
          handleButtonClick();
        }}
        $subscribed={subscribed}
      >
        <Fragment>
          <RenderWhen id="notify-me">
            <RenderWhen.If isTrue={loaded === false}>
              <Spinner size="sm" />
            </RenderWhen.If>

            <RenderWhen.If isTrue={authed === true}>
              <Fragment>
                {subscribed ? (
                  <Content id="nav.notifyMe.unsubscribe" />
                ) : (
                  <Content id="nav.notifyMe.subscribe" />
                )}
              </Fragment>
            </RenderWhen.If>

            <RenderWhen.If isTrue={authed === false}>
              <Fragment>
                <Content id="nav.notifyMe.signIn" />
              </Fragment>
            </RenderWhen.If>

            <RenderWhen.If isTrue>
              <Fragment>
                <Content id="nav.notifyMe.signIn" />
              </Fragment>
            </RenderWhen.If>
          </RenderWhen>
        </Fragment>
      </Button>
    </NotifyMeLayout>
  );
};

export default NotifyMe;
