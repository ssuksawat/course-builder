import { combineReducers } from 'redux';
import calendars from '../calendars/calendar.reducer';
import courses from '../courses/course.reducer';

const reducer = combineReducers({
  calendars,
  courses,
});

export default reducer;
