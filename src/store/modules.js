import { combineReducers } from 'redux';

import locale from './module/locale';
import ui from './module/ui';

const moduleReducers = combineReducers({
  locale,
  ui,
});

export default moduleReducers;
