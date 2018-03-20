import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Jaipur from './components/Jaipur';
import Home from './components/Home';

/*import { Link } from 'react-router-dom'; */
class App extends Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default App;
