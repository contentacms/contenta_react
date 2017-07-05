import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import api from './reducers/api';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

const preloadedState = typeof window.__PRELOADED_STATE__ !== 'undefined' ? window.__PRELOADED_STATE__ : {};
delete window.__PRELOADED_STATE__;

/* eslint-disable no-underscore-dangle */
const store = createStore(
  combineReducers({ api }),
  preloadedState,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware)
  ),
);
/* eslint-enable no-underscore-dangle */

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
// registerServiceWorker();
