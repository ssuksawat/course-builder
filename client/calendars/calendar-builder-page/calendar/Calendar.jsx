import React from 'react';

import CalendarItem from './CalendarItem';

const timeLabels = getTimeLabels();
const dayLabels = getDayLabels();

export default class Calendar extends React.Component {
  render() {
    const courses = this.props.courses;
    const calendarItems = [];
    courses.forEach(course => {
      course.dayIndex.forEach(day => {
        calendarItems.push(<CalendarItem key={`${course.id}:${day}`} course={course} day={day} />);
      });
    });

    return (
      <div className="calendar">
        <ul className="calendar__time-labels">
          {
            timeLabels.map((time, i) => <li key={i}>{time}</li>)
          }
        </ul>
        <div className="calendar__days" ref={c => { this.calendarEl = c; }}>
          <ul className="calendar__day-labels">
            {
              dayLabels.map((day, i) => <li key={i}>{day}</li>)
            }
          </ul>
          { calendarItems }
        </div>
      </div>
    );
  }
}
Calendar.propTypes = {
  courses: React.PropTypes.array,
};

/***** PRIVATE *****/

/**
 * Return array of string with labels from '7am' to '6pm'
 */
function getTimeLabels() {
  const hours = [];
  for (let i = 0; i < 12; i++) {
    const hour = ((i + 6) % 12) + 1;
    const period = i < 5 ? 'am' : 'pm';
    hours.push(`${hour} ${period}`);
  }
  return hours;
}

function getDayLabels() {
  return ['Mon', 'Tues', 'Wed', 'Thu', 'Fri'];
}
