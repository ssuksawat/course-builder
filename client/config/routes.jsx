import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

import App from '../App';
import Home from '../home/Home';
import CalendarsPage from '../calendars/CalendarsPage';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/calendars" />
      <Route path="calendars" component={CalendarsPage} />
    </Route>
  </Router>
);

export default routes;
