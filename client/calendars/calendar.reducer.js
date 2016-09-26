const initialState = {
  calendars: [],
  calendar: { name: '', courses: [] },
  loading: false,
  error: undefined,
};

const INIT_NEW_CALENDAR = 'INIT_NEW_CALENDAR';
const GET_ALL_CALENDARS_PENDING = 'GET_ALL_CALENDARS_PENDING';
const GET_ALL_CALENDARS_SUCCESS = 'GET_ALL_CALENDARS_FULFILLED';
const GET_ALL_CALENDARS_FAILED = 'GET_ALL_CALENDARS_REJECTED';
const GET_CALENDAR_PENDING = 'GET_CALENDAR_PENDING';
const GET_CALENDAR_SUCCESS = 'GET_CALENDAR_FULFILLED';
const GET_CALENDAR_FAILED = 'GET_CALENDAR_REJECTED';
const SAVE_CALENDAR_PENDING = 'SAVE_CALENDAR_PENDING';
const SAVE_CALENDAR_SUCCESS = 'SAVE_CALENDAR_FULFILLED';
const SAVE_CALENDAR_FAILED = 'SAVE_CALENDAR_REJECTED';
const DELETE_CALENDAR_PENDING = 'DELETE_CALENDAR_PENDING';
const DELETE_CALENDAR_SUCCESS = 'DELETE_CALENDAR_FULFILLED';
const DELETE_CALENDAR_FAILED = 'DELETE_CALENDAR_REJECTED';

export default (state = initialState, action) => {
  switch (action.type) {
    case INIT_NEW_CALENDAR:
      return Object.assign({}, state);

    case GET_ALL_CALENDARS_PENDING:
    case GET_CALENDAR_PENDING:
    case SAVE_CALENDAR_PENDING:
    case DELETE_CALENDAR_PENDING:
      return Object.assign({}, state, {
        loading: true,
        error: undefined,
      });

    case GET_ALL_CALENDARS_SUCCESS:
      return Object.assign({}, state, {
        calendars: action.payload,
        loading: false,
        error: undefined,
      });
    case GET_CALENDAR_SUCCESS:
      return Object.assign({}, state, {
        calendar: action.payload,
        loading: false,
        error: undefined,
      });
    case SAVE_CALENDAR_SUCCESS:
    case DELETE_CALENDAR_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        error: undefined,
      });

    case GET_ALL_CALENDARS_FAILED:
      return Object.assign({}, state, {
        loading: false,
        error: action.payload.message || 'Failed to retrieve your calendars',
      });
    case GET_CALENDAR_FAILED:
      return Object.assign({}, state, {
        loading: false,
        error: action.payload.message || `Failed to retrieve calendar by ID ${action.id}`,
      });
    case SAVE_CALENDAR_FAILED:
      return Object.assign({}, state, {
        loading: false,
        error: action.payload.message || 'Failed to save calendar',
      });
    case DELETE_CALENDAR_FAILED:
      return Object.assign({}, state, {
        loading: false,
        error: action.payload.message || `Failed to delete calendar by ID ${action.id}`,
      });
    default: return state;
  }
};
