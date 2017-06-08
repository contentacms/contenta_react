import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './routes';
import 'normalize.css/normalize.css';
import './base.css';

const App = () => (
  <div>
    <Switch>
      {routes.map(route =>
        <Route exact strict path={route.path} component={route.component} key={route.path} />
      )}
    </Switch>
  </div>
);

export default App;
