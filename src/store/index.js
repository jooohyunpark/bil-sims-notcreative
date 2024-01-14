// @flow

import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import modules from 'store/modules';

const initialState = {};

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(modules, initialState, enhancer);

export default store;
