const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const config = require('./config');

module.exports = (app) => {
  app.use(morgan(config.logLevel));
  app.use(compression());
  app.use(express.static(`${config.rootPath}/public`));

  // Use Webpack HMR in Development
  if (process.env.NODE_ENV !== 'production') {
    /* eslint-disable global-require */
    require('./webpack')(app);
  }
};
