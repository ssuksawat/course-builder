const initialState = {
  catalog: { courses: [] },
  loading: false,
  selectedCourses: {},
};

const GET_COURSES_PENDING = 'GET_COURSES_PENDING';
const GET_COURSES_SUCCESS = 'GET_COURSES_FULFILLED';
const GET_COURSES_FAILED = 'GET_COURSES_REJECTED';
const SELECT_COURSE = 'SELECT_COURSE';
const REMOVE_COURSE = 'REMOVE_COURSE';
const SET_SELECTED_COURSES = 'SET_SELECTED_COURSES';
const CLEAR_SELECTED_COURSES = 'CLEAR_SELECTED_COURSES';

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COURSES_PENDING:
      return Object.assign({}, state, { loading: true });
    case GET_COURSES_SUCCESS:
      return Object.assign({}, state, {
        catalog: action.payload,
        loading: false,
      });
    case GET_COURSES_FAILED:
      return Object.assign({}, state, {
        error: action.payload.message || 'Failed to retrieve course catalog',
        loading: false,
      });
    case SELECT_COURSE: {
      const newSelected = Object.assign({}, state.selectedCourses, {
        [action.payload.id]: action.payload,
      });
      return Object.assign({}, state, { selectedCourses: checkConflict(newSelected) });
    }
    case REMOVE_COURSE: {
      const { selectedCourses, catalog } = state;
      const newCatalogCourses = catalog.courses.map(course => {
        return Object.assign({}, course, { hasConflict: undefined });
      });
      const newSelected = Object.assign({}, selectedCourses);
      delete newSelected[action.payload];
      return Object.assign({}, state, {
        selectedCourses: checkConflict(newSelected),
        catalog: { courses: newCatalogCourses },
      });
    }
    case SET_SELECTED_COURSES: {
      const newSelected = {};
      action.payload.forEach(course => {
        newSelected[course.id] = course;
      });
      return Object.assign({}, state, { selectedCourses: newSelected });
    }
    case CLEAR_SELECTED_COURSES:
      return Object.assign({}, state, { selectedCourses: {} });

    default: return state;
  }
};

/***** PRIVATE *****/

function checkConflict(selectedCourses) {
  const conflictMap = {};
  const results = Object.assign({}, selectedCourses); // clone old object
  const courses = Object.keys(results).map(id => {
    delete results[id].hasConflict; // reset all to no conflict
    return results[id];
  });

  // build conflict mapping for each day and hour
  courses.forEach(course => {
    const start = course.timeIndex[0];
    const end = course.timeIndex[1];
    const days = course.dayIndex;
    days.forEach(day => {
      for (let i = start; i < end; i++) {
        conflictMap[day] = conflictMap[day] || {};
        conflictMap[day][i] = conflictMap[day][i] || [];
        conflictMap[day][i].push(course.id);
      }
    });
  });

  // check course conflicts for each day
  courses.forEach(course => {
    const days = course.dayIndex;
    const start = course.timeIndex[0];
    days.forEach(day => {
      if (!conflictMap[day]) { return; }
      const conflicts = conflictMap[day][start];

      if (!conflicts || conflicts.length < 2) { return; }
      conflicts.forEach(id => {
        results[id].hasConflict = true;
      });
    });
  });

  return results;
}
