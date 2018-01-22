import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="Login">
      <form action="" className="Login__panel">
        <h3>Please, provide your login and password</h3>
        <label htmlFor="login">Login:</label>
        <input type="text" id="login" />
        <label htmlFor="password">Password:</label>
        <input type="passworda" id="password" />
      </form>
    </div>
  );
};

export default Login;
