import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';

class App extends Component {
  render() {
    return (
      <div className = "myApp">
        <h1>My App</h1>
        <Header />
      </div>
    );
  }
}

export default App;
