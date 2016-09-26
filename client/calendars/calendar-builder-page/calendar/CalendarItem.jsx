import React from 'react';
import classnames from 'classnames';

// Constants for offsets calculation
const TOP_OFFSET = 36;
const NUM_HOURS = 12;
const NUM_DAYS = 5;
const TIMEBLOCK_HEIGHT = 100 / NUM_HOURS;
const TIMEBLOCK_WIDTH = 100 / NUM_DAYS;

const CalendarItem = ({ course, day, onItemClick }) => {
  const startTime = course.timeIndex[0];
  const endTime = course.timeIndex[1];
  const top = ((startTime - 7) * TIMEBLOCK_HEIGHT);
  const left = ((day - 1) * TIMEBLOCK_WIDTH);
  const height = (endTime - startTime) * TIMEBLOCK_HEIGHT;
  const style = {
    marginTop: TOP_OFFSET,
    width: `${TIMEBLOCK_WIDTH}%`,
    top: `${top}%`,
    left: `${left}%`,
    height: `${height}%`,
  };

  return (
    <div
      className={classnames('calendar__item', { 'has-conflict': course.hasConflict })}
      style={style} title={course.name} onClick={() => onItemClick(course)}
    >
      <div className="calendar__item-title">
        {course.name}
      </div>
    </div>
  );
};
CalendarItem.propTypes = {
  course: React.PropTypes.object,
  day: React.PropTypes.number,
  onItemClick: React.PropTypes.func,
};

export default CalendarItem;
