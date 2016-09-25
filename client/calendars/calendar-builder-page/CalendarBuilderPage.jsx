import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { saveCalendar } from '../calendar.action';
import { getCourses } from '../../courses/course.action';

export class CalendarBuilder extends React.Component {
  componentWillMount() {
    this.props.getCourses();
  }

  render() {
    return (
      <div className="page-wrapper calendar-builder">
        <div className="page-content">
          <div className="course-list">
            Course List here
          </div>
          <div className="calendar-display">
            Calendar here
          </div>
        </div>
        <div className="page-footer">
          <button className="btn btn-primary save-btn">Save</button>
        </div>
      </div>
    );
  }
}
CalendarBuilder.propTypes = {
  catalog: React.PropTypes.object,
  loading: React.PropTypes.bool,
  getCourses: React.PropTypes.func,
};

const mapStateToProps = ({ courses }) => ({
  catalog: courses.catalog,
  loading: courses.loading,
});

const mapDispatchToProps = (dispatch) => ({
  saveCalendar: bindActionCreators(saveCalendar, dispatch),
  getCourses: bindActionCreators(getCourses, dispatch),
});

const CalendarBuilderPage = connect(mapStateToProps, mapDispatchToProps)(CalendarBuilder);
export default CalendarBuilderPage;
