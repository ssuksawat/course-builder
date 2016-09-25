const initialState = {
  courses: [],
  loading: false,
};

const GET_COURSES_PENDING = 'GET_COURSES_PENDING';
const GET_COURSES_SUCCESS = 'GET_COURSES_FULFILLED';
const GET_COURSES_FAILED = 'GET_COURSES_REJECTED';

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COURSES_PENDING:
      return Object.assign({}, state, { loading: true });
    case GET_COURSES_SUCCESS:
      return Object.assign({}, state, {
        courses: action.payload,
        loading: false,
      });
    case GET_COURSES_FAILED:
      return Object.assign({}, state, {
        error: action.payload.message || 'Failed to retrieve course catalog',
        loading: false,
      });
    default: return state;
  }
};
