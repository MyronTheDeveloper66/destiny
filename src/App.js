import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Contact from './Components/Contact';
import Hunter from './Components/Class Components/Hunter';
import Titan from './Components/Class Components/Titan';
import Warlock from './Components/Class Components/Warlock';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'home'
    };
    this.changePage = this.changePage.bind(this);
  }
  changePage(page) {
    this.setState({ currentPage: page })
  }
  render() {
    const header = <Header currentPage={this.state.currentPage} change={this.changePage} />
    if (this.state.currentPage === 'about') {
      return (
        <div>
          {header}
          <About />
        </div>
      )
    } else if (this.state.currentPage === 'contact') {
      return (
        <div>
          {header}
          <Contact />
        </div>
      )
    } else if (this.state.currentPage === 'hunter') {
      return (
        <div>
          {header}
          <Hunter />
        </div>
      )
    } else if (this.state.currentPage === 'titan') {
      return (
        <div>
          {header}
          <Titan />
        </div>
      )
    } else if (this.state.currentPage === 'warlock') {
      return (
        <div>
          {header}
          <Warlock />
        </div>
      )
    } else {
      return (header)
    }
  }
}

export default App;
