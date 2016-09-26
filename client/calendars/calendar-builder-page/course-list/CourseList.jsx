import React from 'react';
import classnames from 'classnames';

const CourseList = ({ courses, isSelected, onItemClick }) => (
  <div className="course-list">
    {
      courses.map(course => (
        <div
          className={classnames('course-list__item', { 'is-selected': isSelected(course.id) })}
          key={course.id}
          onClick={() => onItemClick(course)}
        >
          <div className="course-list__item-title">{course.name}</div>
          <ul className="course-list__item-info">
            <li title={course.author}>By: {course.author}</li>
            <li title={course.days.join(' ')}>{course.days.join(' ')}</li>
            <li title={`${course.time[0]} - ${course.time[1]}`}>
              {`${course.time[0]} - ${course.time[1]}`}
            </li>
          </ul>
        </div>
      ))
    }
  </div>
);
CourseList.propTypes = {
  courses: React.PropTypes.array,
  isSelected: React.PropTypes.func,
  onItemClick: React.PropTypes.func,
};

export default CourseList;
