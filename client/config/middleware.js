import promiseMiddleware from 'redux-promise-middleware';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const middleware = [thunk, promiseMiddleware()];
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger());
}

export default middleware;
