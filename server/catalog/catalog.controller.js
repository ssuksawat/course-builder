const catalog = require('./data/catalog');

module.exports = {
  getCatalog,
  getBigCatalog,
};

const DAY = {
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
};

/***** PUBLIC *****/

function getCatalog(req, res) {
  res.send(catalog);
}

function getBigCatalog(req, res) {
  const courses = [];
  let startTime;
  let endTime;
  let days;
  for (let i = 0; i < 100; i++) {
    startTime = (i % 9) + 7;
    endTime = startTime + 2;
    days = getDays(i);
    courses.push({
      id: i,
      name: `Spectaular Course ${i}`,
      author: `Jeannie Doe ${i}`,
      timeIndex: [startTime, endTime],
      dayIndex: days,
      time: [formatTime(startTime), formatTime(endTime)],
      days: days.map((day) => DAY[day]),
    });
  }
  res.json({ courses });
}

/***** PRIVATE *****/

function formatTime(time) {
  if (time < 12) {
    return `${time}am`;
  } else if (time === 12) {
    return '12pm';
  }
  return `${time - 12}pm`;
}

function getDays(i) {
  const remainder = i % 3;
  if (remainder === 0) {
    return [1, 3, 5];
  } else if (remainder === 1) {
    return [2, 4];
  }
  return [3];
}
