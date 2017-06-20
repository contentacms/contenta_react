import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './routes';
import { StyleSheet, css } from 'aphrodite';
import { Breakpoints, Colors } from './styles/styles';
import 'normalize.css/normalize.css';
import './styles/base.css';

const App = () => (
  <div className={css(styles.base)}>
    <Switch>
      {routes.map(route =>
        <Route
          exact
          strict
          path={route.path}
          component={route.component}
          key={route.path}
        />,
      )}
    </Switch>
  </div>
);

const styles = StyleSheet.create({
  base: {
    color: Colors.shades.offBlack,
    '@media only screen and (min-width: 0)': {
      fontSize: '14px',
    },
    [`@media only screen and (min-width: ${Breakpoints.medium}px)`]: {
      fontSize: '14.5px',
    },
    [`@media only screen and (min-width: ${Breakpoints.large})px`]: {
      fontSize: '15px',
    },
  },
});

export default App;
