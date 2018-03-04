import React, { Component } from 'react';
import Jumbotron from './Jumbotron';

class Header extends Component {
    render() {
        let jumbotron;
        if(this.props.currentPage == 'home') {
            jumbotron = <Jumbotron />
        } else {jumbotron = null}
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Dossier of Destiny</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className={(this.props.currentPage === 'home') ? 'active nav-item' : 'nav-item'}>
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className={(this.props.currentPage === 'about') ? 'active nav-item' : 'nav-item'}>
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className={(this.props.currentPage === 'contact') ? 'active nav-item' : 'nav-item'}>
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Classes
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Hunter</a>
                                    <a className="dropdown-item" href="#">Titan</a>
                                    <a className="dropdown-item" href="#">Warlock</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
                {jumbotron}
            </header>
        );
    }
}

export default Header;