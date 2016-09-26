export function getCourses() {
  return {
    type: 'GET_COURSES',
    payload: fetch('/api/catalog').then(res => res.json()),
  };
}

export function selectCourse(course) {
  return {
    type: 'SELECT_COURSE',
    payload: course,
  };
}

export function removeCourse(id) {
  return {
    type: 'REMOVE_COURSE',
    payload: id,
  };
}

export function setSelectedCourses(courses) {
  return {
    type: 'SET_SELECTED_COURSES',
    payload: courses,
  };
}

export function clearSelectedCourses() {
  return {
    type: 'CLEAR_SELECTED_COURSES',
  };
}
