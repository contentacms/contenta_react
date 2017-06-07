import express from 'express';
import path from 'path';
import fs from 'fs';
import mustache from 'mustache';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StyleSheetServer } from 'aphrodite'
import { StaticRouter, matchPath } from 'react-router';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import routes from './src/routes';
import api from './src/reducers/api';
import App from './src/App';

const app = express();
const store = createStore(
  combineReducers({ api }),
  compose(
    applyMiddleware(thunkMiddleware),
  ),
);

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function (req, res) {
  const template = fs.readFileSync(path.join(__dirname, 'build', '_index.html')).toString();
  const context = {};
  let promises = [];

  routes.some(route => {
    const match = matchPath(req.url, route);
    if (match && typeof route.loadData !== 'undefined') {
      const loadData = route.loadData;
      loadData.forEach(item => {
        promises.push(store.dispatch(item('server')));
      });
    }
    return match
  });

  const { html, css } = StyleSheetServer.renderStatic(() => ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter
        location={req.url}
        context={context}
      >
        <App/>
      </StaticRouter>
    </Provider>
  ));

  Promise.all(promises).then(() => {
    const data = {
      initialRender: html,
      inlineCss: `<style>${css.content}</style>`,
      reduxState: `${JSON.stringify(store.getState()).replace(/</g, '\\u003c')}`
    };

    if (context.url) {
      res.redirect(301, context.url);
    }
    else {
      res.send(mustache.render(template, data));
    }
  });
});

app.listen(process.env.REACT_APP_EXPRESS_PORT);
