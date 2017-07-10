import express from 'express';
import compression from 'compression';
import path from 'path';
import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StyleSheetServer } from 'aphrodite'
import { StaticRouter, matchPath } from 'react-router';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import routes from './src/routes';
import reducers from './src/reducers/index';
import App from './src/App';

const app = express();
app.use(compression());
const store = createStore(
  combineReducers(reducers),
  compose(
    applyMiddleware(thunkMiddleware),
  ),
);

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function (req, res) {
  let template = fs.readFileSync(path.join(__dirname, 'build', '_index.html')).toString();
  const context = {};
  let promises = [];

  routes.some(route => {
    const match = matchPath(req.url, route);
    if (match && typeof route.component.loadData !== 'undefined') {
      const loadData = route.component.loadData;
      loadData.forEach(item => {
        promises.push(store.dispatch(item()));
      });
    }
    return match
  });

  Promise.all(promises).then((result) => {
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

    // This is quite a hack because we don't want to deviate from create-react-app and continue using
    // the same index.html file. If we add a templating indicator e.g. mustache, then it shows up
    // when doing client-side development.
    template = template.replace('<div id="root"></div>', `<div id="root">${html}</div><script>window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState()).replace(/</g, '\\u003c')}</script>`)
      .replace('</head>', `<style>${css.content}</style></head>`);

    if (context.url) {
      res.redirect(301, context.url);
    }
    else {
      res.send(template);
    }
  });
});

app.listen(process.env.PORT);
