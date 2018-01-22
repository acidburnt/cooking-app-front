import React from 'react';
import './Register.css';

const Register = () => {
  return (
    <div className="Register">
      <form action="" className="Register__panel">
        <h3>Please, provide your login and password</h3>
        <label htmlFor="login">Login:</label>
        <input type="text" id="login" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />
        <label htmlFor="passwordConf">Confirm Password:</label>
        <input type="password" id="passwordConf" />
      </form>
    </div>
  );
};

export default Register;
