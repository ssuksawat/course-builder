import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import moment from 'moment';

import * as calendarActionCreators from '../calendar.action';

export class Calendars extends React.Component {
  componentWillMount() {
    this.props.calendarActions.getCalendars();
  }

  render() {
    return (
      <div className="page-wrapper calendars">
        <div className="page-header">
          <h1>My Calendars</h1>
          <Link className="btn btn-primary" to="/calendars/new">+ New Calendar</Link>
        </div>
        <div className="page-content">
          <ul className="calendar-list">
            {
              this.props.calendars.map(calendar => (
                <li key={calendar.id}>
                  <Link className="calendar-list__item" to={`/calendars/${calendar.id}`}>
                    <div className="calendar-list__item-title">{calendar.name}</div>
                    <div className="calendar-list__item-info">
                      {moment(calendar.updatedAt).fromNow()}
                    </div>
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}
Calendars.propTypes = {
  calendars: React.PropTypes.array,
  calendarActions: React.PropTypes.object,
};

const mapStateToProps = (state) => ({
  calendars: state.calendars.calendars,
});

const mapDispatchToProps = (dispatch) => ({
  calendarActions: bindActionCreators(calendarActionCreators, dispatch),
});

const CalendarsPage = connect(mapStateToProps, mapDispatchToProps)(Calendars);
export default CalendarsPage;
