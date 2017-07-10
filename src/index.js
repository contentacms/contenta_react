import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reducers from './reducers/index';
import App from './App';

/* eslint-disable no-underscore-dangle */
const preloadedState = typeof window.__PRELOADED_STATE__ !== 'undefined'
  ? window.__PRELOADED_STATE__
  : {};
delete window.__PRELOADED_STATE__;
/* eslint-enable no-underscore-dangle */

const store = createStore(
  combineReducers(reducers),
  preloadedState,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware),
  ),
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
// registerServiceWorker();
