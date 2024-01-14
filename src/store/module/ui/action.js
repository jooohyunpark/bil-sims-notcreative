import { CHANGE_UI } from 'store/module/ui/reducer';

const _changeUi = ui => ({
  type: CHANGE_UI,
  ...ui,
});

export const changeUi = ui => async dispatch => {
  try {
    dispatch(_changeUi(ui));
  } catch (e) {
    throw new Error(e);
  }
};

export const toggleOverlay = overlayVisible => async dispatch => {
  try {
    dispatch(_changeUi({ overlay: overlayVisible }));
  } catch (e) {
    throw new Error(e);
  }
};

export const toggleBgContextLight = () => async dispatch => {
  try {
    dispatch(_changeUi({ bgContext: 'light' }));
  } catch (e) {
    throw new Error(e);
  }
};

export const toggleBgContextDark = () => async dispatch => {
  try {
    dispatch(_changeUi({ bgContext: 'dark' }));
  } catch (e) {
    throw new Error(e);
  }
};

export default {};
