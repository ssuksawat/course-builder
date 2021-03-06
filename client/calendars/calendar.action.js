import { browserHistory } from 'react-router';
import { setSelectedCourses, clearSelectedCourses } from '../courses/course.action';

export function getCalendars() {
  // Note: fake get calendars - use localStorage instead
  const promise = new Promise((resolve, reject) => {
    try {
      let calendars = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.indexOf('calendar:') > -1) {
          calendars.push(key);
        }
      }
      calendars = calendars.map(key => JSON.parse(localStorage.getItem(key)));
      resolve(calendars);
    } catch (e) {
      reject(e);
    }
  });

  return {
    type: 'GET_ALL_CALENDARS',
    payload: promise,
  };
}

export function getCalendarById(id) {
  return (dispatch) => {
    // Note: fake get calendar - use localStorage instead
    const promise = new Promise((resolve, reject) => {
      try {
        const serialized = localStorage.getItem(`calendar:${id}`);
        if (!serialized) { throw new Error(`Calendar with ID ${id} does not exist`); }
        resolve(JSON.parse(serialized));
      } catch (e) {
        reject(e);
      }
    });

    promise
      .then(calendar => {
        dispatch({ type: 'GET_CALENDAR', id, payload: promise });
        dispatch(setSelectedCourses(calendar.courses));
      });
  };
}

export function saveCalendar(calendar) {
  calendar.id = calendar.id || Math.floor(Math.random() * 1000); // generate random id
  calendar.updatedAt = Date.now();
  // Note: fake saving calendar - use localStorage instead
  const promise = new Promise((resolve, reject) => {
    try {
      localStorage.setItem(`calendar:${calendar.id}`, JSON.stringify(calendar));
      resolve();
    } catch (e) {
      reject(new Error('Error saving calendar'));
    }
  }).then(() => browserHistory.push(`/calendars/${calendar.id}`));

  return {
    type: 'SAVE_CALENDAR',
    calendar,
    payload: promise,
  };
}

export function deleteCalendar(id) {
  // Note: fake delete - use localStorage instead
  localStorage.removeItem(`calendar:${id}`);

  return {
    type: 'DELETE_CALENDAR',
    id,
    payload: Promise.resolve(true),
  };
}

export function initNewCalendar() {
  return (dispatch) => {
    dispatch({ type: 'INIT_NEW_CALENDAR' });
    dispatch(clearSelectedCourses());
  };
}
