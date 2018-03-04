import React, { Component } from 'react';
import Navbar from './Navbar';
import About from './About';

class PageLoader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 'home'
        }
    }
    render() {
        if(this.props.component == 'navbar'){
            return (
            <Navbar currentPage = {this.state.currentPage} />
            )
        } else {
            return (<h1>No component </h1>)
        }
    }
}

export default PageLoader;