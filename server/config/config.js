const path = require('path');

const env = process.env.NODE_ENV || 'development';
const rootPath = path.join(__dirname, '../..');

const config = {
  development: {
    rootPath,
    port: process.env.PORT || 3000,
    logLevel: process.env.LOG_LEVEL || 'dev',
  },
  production: {
    rootPath,
    port: process.env.PORT || 80,
    logLevel: process.env.LOG_LEVEL || 'tiny',
  },
};

module.exports = config[env];
