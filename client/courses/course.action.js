export default function getCourses() {
  return {
    type: 'GET_COURSES',
    payload: fetch('/api/catalog').then(res => res.json()),
  };
}
