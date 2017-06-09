import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import api from './reducers/api';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const preloadedState = typeof window.__PRELOADED_STATE__ !== 'undefined' ? window.__PRELOADED_STATE__ : {};
delete window.__PRELOADED_STATE__;

/* eslint-disable no-underscore-dangle */
const store = createStore(
  combineReducers({ api }),
  preloadedState,
  compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
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
registerServiceWorker();
