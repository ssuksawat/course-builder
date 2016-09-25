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
