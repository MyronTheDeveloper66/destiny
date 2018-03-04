import React, { Component } from 'react';
import PageLoader from './PageLoader';

class Header extends Component {
    render() {
        return (
            <header>
                <PageLoader component="navbar"/>
            </header>
        );
    }
}

export default Header;