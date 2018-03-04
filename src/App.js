import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Contact from './Components/Contact';

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
    } else {
      return (header)
    }
  }
}

export default App;
