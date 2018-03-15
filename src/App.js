import React, { Component } from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Contact from './Components/Contact';
import Classes from './Components/Class';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'home',
      selectedClass: null
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
          <Classes sClass="Hunter" />
        </div>
      )
    } else if (this.state.currentPage === 'titan') {
      return (
        <div>
          {header}
          <Classes sClass="Titan" />
        </div>
      )
    } else if (this.state.currentPage === 'warlock') {
      return (
        <div>
          {header}
          <Classes sClass="Warlock" />
        </div>
      )
    } else {
      return (header)
    }
  }
}

export default App;
