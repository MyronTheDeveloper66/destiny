import React, { Component } from 'react';
import './App.css';
import PageLoader from './Components/PageLoader';

class App extends Component {
  render() {
    return (
      <div className = "App">
        <PageLoader comp="home"/>
      </div>
    );
  }
}

export default App;
