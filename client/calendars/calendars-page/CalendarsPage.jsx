import React from 'react';
import { Link } from 'react-router';

const CalendarsPage = () => (
  <div className="page-wrapper calendars">
    <h1>My Calendars</h1>
    <Link className="btn btn-primary" to="/calendars/new">+ New Calendar</Link>
  </div>
);

export default CalendarsPage;
