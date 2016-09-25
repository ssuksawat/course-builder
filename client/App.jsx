import React from 'react';
import './app.scss';

const App = ({ children }) => (
  <div className="page-container">
    {children}
  </div>
);
App.propTypes = {
  children: React.PropTypes.object,
};

export default App;
