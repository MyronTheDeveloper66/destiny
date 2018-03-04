import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import PageLoader from './Components/PageLoader';

class App extends Component {
  render() {
    return (
      <div className = "App">
        <Header />
      </div>
    );
  }
}

export default App;
