import React, { Component } from 'react';
import './App.css';
import Display from './components/Display.js';
import Dashboard from './components/Dashboard.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome To The Baseball App, By Cash Globe</h1>
        <Display />
        <Dashboard />
      </div>
    );
  }
}

export default App;
