import React, { Component } from 'react';
import Header from './Header';
import About from './About';
import Contact from './Contact';

class PageLoader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 'home'
        }
    }
    componentDidMount() {
        this.changePage()
    }
    changePage() {
        this.setState({currentPage: this.props.comp})
    }
    render() {
        const header = <Header currentPage={this.state.currentPage} />
        if(this.props.comp == 'about') {
            return(
                <div>
                    {header}
                    <About />
                </div>
            )
        } else if (this.props.comp == 'contact') {
            return (
                <div>
                    {header}
                    <Contact />
                </div>
            )
        } else {
            return(header)
        }
    }
}

export default PageLoader;