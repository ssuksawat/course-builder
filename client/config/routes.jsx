import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

import App from '../App';
import CalendarsPage from '../calendars/calendars-page/CalendarsPage';
import CalendarBuilderPage from '../calendars/calendar-builder-page/CalendarBuilderPage';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/calendars" />
      <Route path="calendars" component={CalendarsPage} />
      <Route path="calendars/:id" component={CalendarBuilderPage} />
    </Route>
  </Router>
);

export default routes;
