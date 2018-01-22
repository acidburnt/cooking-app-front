import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css';

const Navigation = () => {
  return (
    <div className="Navigation">
      <h2><Link to="/">Home </Link></h2>
      <ul className="Navigation__list">
        <li className="Navigation__list-item"><Link to="/register">Register </Link></li>
        <li className="Navigation__list-item"><Link to="/login">Login </Link></li>
      </ul>
    </div>
  );
};

export default Navigation;
