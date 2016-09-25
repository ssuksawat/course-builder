import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from '../App';
import Home from '../home/Home';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);

export default routes;
