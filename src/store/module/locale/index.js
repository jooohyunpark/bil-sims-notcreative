// @flow

import reducer, * as actionTypes from 'store/module/locale/reducer';
import * as actions from 'store/module/locale/action';

/**
 * Action types available in the Locale Module
 */
export const LocaleActionTypes = {
  ...actionTypes,
};

/**
 * Actions availables in the Locale Module
 * @example
 * import { LocaleActions } from 'store/module/locale';
 * {ReactComponent}.props.dispatch(LocaleActions.changeLocale({ code: 'en-gb' }));
 */
export const LocaleActions = {
  ...actions,
};

export default reducer;
