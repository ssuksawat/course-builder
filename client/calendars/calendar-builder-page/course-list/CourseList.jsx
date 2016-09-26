import React from 'react';

const CourseList = ({ courses }) => (
  <div className="course-list">
    {
      courses.map(course => (
        <div className="course-list__item" key={course.id}>
          <div className="course-list__item-title">{course.name}</div>
          <ul className="course-list__item-info">
            <li title={course.author}>By: {course.author}</li>
            <li title={course.days.join(' ')}>{course.days.join(' ')}</li>
            <li title={`${course.time[0]} - ${course.time[1]}`}>{`${course.time[0]} - ${course.time[1]}`}</li>
          </ul>
        </div>
      ))
    }
  </div>
);
CourseList.propTypes = {
  courses: React.PropTypes.array,
};

export default CourseList;
