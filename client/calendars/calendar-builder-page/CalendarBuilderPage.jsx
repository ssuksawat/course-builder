import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classnames from 'classnames';

import * as calendarActions from '../calendar.action';
import * as courseActions from '../../courses/course.action';
import CourseList from './course-list/CourseList';
import Calendar from './calendar/Calendar';

export class CalendarBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentTab: 'ALL' };
    this.onTabSelect = this.onTabSelect.bind(this);
    this.onItemClick = this.onItemClick.bind(this);
    this.isActiveTab = this.isActiveTab.bind(this);
    this.isSelected = this.isSelected.bind(this);
    this.hasConflict = this.hasConflict.bind(this);
  }

  componentWillMount() {
    const id = this.props.params.id;
    const { getCalendarById, initNewCalendar } = this.props.calendarActions;

    this.props.courseActions.getCourses();
    if (id === 'new') {
      initNewCalendar();
    } else {
      getCalendarById(id);
    }
  }

  onTabSelect(tab) {
    this.setState({
      currentTab: tab,
    });
  }

  onItemClick(course) {
    if (this.isSelected(course.id)) {
      this.props.courseActions.removeCourse(course.id);
    } else {
      this.props.courseActions.selectCourse(course);
    }
  }

  isActiveTab(tab) {
    return this.state.currentTab === tab;
  }

  isSelected(id) {
    return !!this.props.selectedCourses[id];
  }

  hasConflict(id) {
    const course = this.props.selectedCourses[id];
    return course && course.hasConflict;
  }

  render() {
    const { catalog, selectedCourses } = this.props;
    const { currentTab } = this.state;
    const selected = Object.keys(selectedCourses).map(id => selectedCourses[id]);
    const courses = currentTab === 'ALL' ? catalog.courses : selected;

    return (
      <div className="page-wrapper calendar-builder">
        <div className="page-content">
          <section className="catalog-section">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a
                  className={classnames('nav-link', { active: this.isActiveTab('ALL') })}
                  onClick={() => this.onTabSelect('ALL')}
                >All</a>
              </li>
              <li className="nav-item">
                <a
                  className={classnames('nav-link', { active: this.isActiveTab('SELECTED') })}
                  onClick={() => this.onTabSelect('SELECTED')}
                >Selected ({selected.length})</a>
              </li>
            </ul>
            <CourseList
              courses={courses} isSelected={this.isSelected} hasConflict={this.hasConflict}
              onItemClick={this.onItemClick}
            />
          </section>
          <section className="calendar-section">
            <Calendar courses={selected} />
          </section>
        </div>
        <div className="page-footer">
          <button className="btn btn-primary save-btn">Save</button>
        </div>
      </div>
    );
  }
}
CalendarBuilder.propTypes = {
  params: React.PropTypes.object,
  catalog: React.PropTypes.object,
  selectedCourses: React.PropTypes.object,
  loading: React.PropTypes.bool,
  calendarActions: React.PropTypes.object,
  courseActions: React.PropTypes.object,
};

const mapStateToProps = ({ courses }) => ({
  catalog: courses.catalog,
  loading: courses.loading,
  selectedCourses: courses.selectedCourses,
});

const mapDispatchToProps = (dispatch) => ({
  calendarActions: bindActionCreators(calendarActions, dispatch),
  courseActions: bindActionCreators(courseActions, dispatch),
});

const CalendarBuilderPage = connect(mapStateToProps, mapDispatchToProps)(CalendarBuilder);
export default CalendarBuilderPage;
