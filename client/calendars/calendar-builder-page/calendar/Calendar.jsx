import React from 'react';

const timeLabels = getTimeLabels();
const dayLabels = getDayLabels();

const Calendar = () => {
  return (
    <div className="calendar">
      <ul className="calendar__time-labels">
        {
          timeLabels.map((time, i) => <li key={i}>{time}</li>)
        }
      </ul>
      <div className="calendar__days">
        <ul className="calendar__day-labels">
          {
            dayLabels.map((day, i) => <li key={i}>{day}</li>)
          }
        </ul>
      </div>
    </div>
  );
};
Calendar.propTypes = {
  courses: React.PropTypes.array,
};

export default Calendar;

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
