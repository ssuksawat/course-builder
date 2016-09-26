import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classnames from 'classnames';

import * as calendarActions from '../calendar.action';
import * as courseActions from '../../courses/course.action';
import CourseList from './course-list/CourseList';

export class CalendarBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentTab: 'ALL' };
    this.onTabSelect = this.onTabSelect.bind(this);
    this.isActiveTab = this.isActiveTab.bind(this);
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

  isActiveTab(tab) {
    return this.state.currentTab === tab;
  }

  render() {
    const { catalog, selectedCourses } = this.props;
    const { currentTab } = this.state;
    const selectedCount = Object.keys(selectedCourses).length;

    let courses;
    if (currentTab === 'ALL') {
      courses = catalog.courses;
    } else {
      courses = Object.keys(selectedCourses).map(({ id }) => catalog.courses[id]);
    }

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
                >Selected ({selectedCount})</a>
              </li>
            </ul>
            <CourseList courses={courses} />
          </section>
          <section className="calendar-section">
            Calendar here
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
