import React, { Component } from 'react';
import { Link } from "react-router-dom";//this is for routing

class Home extends Component {
    state = {  }
    render() {
        return (
            <div className="logreg">This is the Home page
                <Link className = 'btn nav-link btn-success' to='/'> Go Home </Link>
            </div>
        );
    }
}

export default Home;