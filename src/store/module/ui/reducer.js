const namespace = 'ui';

export const CHANGE_UI = `${namespace}/change`;

const initial = {
  overlay: false,
  bgContext: 'dark',
};

const actions = {
  [CHANGE_UI]: (state = initial, { overlay, bgContext }) => {
    // Check for undefined because overlay can be false
    if (overlay !== undefined) {
      return {
        ...state,
        overlay,
      };
    }
    if (bgContext) {
      return {
        ...state,
        bgContext,
      };
    }
    return state;
  },
};

// eslint-disable-next-line
export default (state = initial, action) => {
  return action && actions[action.type]
    ? actions[action.type](state, action)
    : state;
};
