import React from 'react';
import './app.scss';

import Navbar from './navbar/Navbar';

const App = ({ children }) => (
  <div className="page-container">
    <Navbar />
    {children}
  </div>
);
App.propTypes = {
  children: React.PropTypes.object,
};

export default App;
