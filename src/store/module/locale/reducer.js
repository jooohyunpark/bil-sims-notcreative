// @flow

const LocaleNamespace: string = 'locale';

export const CHANGE_LOCALE: string = `${LocaleNamespace}/change`;

const initial = {
  code: 'en-us',
};

const actions = {
  [CHANGE_LOCALE]: (state = initial, { code }) => {
    if (code) {
      return {
        ...state,
        code,
      };
    }
    return state;
  },
};

// eslint-disable-next-line
export default (state: Object = initial, action: Object) => {
  return action && actions[action.type]
    ? actions[action.type](state, action)
    : state;
};
