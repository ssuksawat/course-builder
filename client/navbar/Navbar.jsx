import React from 'react';
import { Link } from 'react-router';

const Navbar = () => (
  <nav className="navbar navbar-light navbar-full">
    <Link className="navbar-brand" to="/">CourseBuilder</Link>
    <div className="nav navbar-nav">
      <Link
        className="nav-item nav-link" to="/calendars" activeClassName="active"
      >
        My Calendars
      </Link>
    </div>
  </nav>
);

export default Navbar;
