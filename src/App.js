import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';


import './App.css';
import Navigation from './components/Navigation/Navigation';
import Main from './components/Main/Main';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

class App extends Component {
  state = {

  }
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />

          <Route exact path="/" component={Main} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
