const initialState = {
  catalog: {},
  loading: false,
  selectedCourses: {},
};

const GET_COURSES_PENDING = 'GET_COURSES_PENDING';
const GET_COURSES_SUCCESS = 'GET_COURSES_FULFILLED';
const GET_COURSES_FAILED = 'GET_COURSES_REJECTED';
const SELECT_COURSE = 'SELECT_COURSE';
const REMOVE_COURSE = 'REMOVE_COURSE';
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
      return Object.assign({}, state, { selectedCourses: newSelected });
    }
    case REMOVE_COURSE: {
      const newSelected = Object.assign({}, state.selectedCourses);
      delete newSelected[action.payload];
      return Object.assign({}, state, { selectedCourses: newSelected });
    }
    case CLEAR_SELECTED_COURSES:
      return Object.assign({}, state, { selectedCourses: {} });

    default: return state;
  }
};
