// @flow

import { CHANGE_LOCALE } from 'store/module/locale/reducer';

/*
 * Format actions for the Store
 */
const _changeLocale = (locale: Object) => ({
  type: CHANGE_LOCALE,
  ...locale,
});

/*
 * Define actions
 */

/**
 * Update the current Locale - async
 * @param {Object} locale
 */
export const changeLocale = (locale: Object) => async (dispatch: Function) => {
  try {
    // e.g
    // const copy = await getLocale(locale.code);
    // Do something with the copy

    dispatch(_changeLocale(locale));
  } catch (e) {
    throw new Error(e);
  }
};

export default {};
