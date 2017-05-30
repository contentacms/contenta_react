import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import 'normalize.css';
import 'css-type-base.css';
import './base.css';
import Home from './components/04_template/Home/Home';
import RecipeLanding from './components/04_template/RecipeLanding/RecipeLanding';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/recipes" component={RecipeLanding} />
    </div>
  </Router>
);

export default App;
