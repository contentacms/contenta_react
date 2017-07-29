import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './routes';
import 'normalize.css/normalize.css';
import { StyleSheet } from 'aphrodite';
const globalSelectorHandler = (selector, _, generateSubtreeStyles) => {
  if (selector[0] !== "*") {
    return null;
  }
  return generateSubtreeStyles(selector.slice(1));
};
const extendedStylesheet = StyleSheet.extend([{selectorHandler: globalSelectorHandler}]);

const App = () => (
  <div className={extendedStylesheet.css(styles.globals)}>
    <Switch>
      {routes.map(route =>
        <Route
          exact={route.exact}
          strict={route.strict}
          path={route.path}
          component={route.component}
          key={route.path}
        />,
      )}
    </Switch>
  </div>
);

const styles = extendedStylesheet.StyleSheet.create({
  globals: {
    '**': {
      boxSizing: 'border-box',
      ':before': {
        boxSizing: 'inherit',
      },
      ':after': {
        boxSizing: 'inherit',
      },
    },
    '*html': {
      lineHeight: 1.5,
      fontFamily: ["Roboto", "sans-serif"],
      fontWeight: 'normal',
    },
    '*a': {
      textDecoration: 'none',
      '-webkit-tap-highlight-color': 'transparent',
    },
    '*h1, h2, h3, h4, h5, h6': {
      fontWeight: 400,
      lineHeight: 1.1,
    },
    '*h1 a, h2 a, h3 a, h4 a, h5 a, h6 a': {
      fontWeight: 'inherit',
    },
    '*h1': {
      fontSize: '4.2rem',
      lineHeight: '110%',
      margin: '2.1rem 0 1.68rem 0',
    },
    '*h2': {
      fontSize: '3.56rem',
      lineHeight: '110%',
      margin: '1.78rem 0 1.424rem 0',
    },
    '*h3': {
      fontSize: '2.9rem',
      lineHeight: '110%',
      margin: '1.45rem 0 1.16rem 0',
    },
    '*h4': {
      fontSize: '2.28rem',
      lineHeight: '110%',
      margin: '1.14rem 0 0.912rem 0',
    },
    '*h5': {
      fontSize: '1.64rem',
      lineHeight: '110%',
      margin: '0.82rem 0 0.656rem 0',
    },
    '*h6': {
      fontSize: '1rem',
      lineHeight: '110%',
      margin: '0.5rem 0 0.4rem 0',
    },
    '*em': {
      fontStyle: 'italic',
    },
    '*strong': {
      fontWeight: 500,
    },
    '*small': {
      fontSize: '75%',
    },
    '*img': {
      maxWidth: '100%',
    }
  }
});

export default App;
