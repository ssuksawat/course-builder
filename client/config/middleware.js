import { applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;
const middlewares = [thunk, promiseMiddleware()];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger());
}

export default compose(applyMiddleware(...middlewares), devTools);
