import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './config/vendor';
import routes from './config/routes';
import reducer from './config/reducer';
import middleware from './config/middleware';

const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('app')
);
