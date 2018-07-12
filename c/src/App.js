//App.js
import React, { Component } from 'react';
import './index.css';
import Logreg from './components/Logreg';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";//this is for routing
import Home from './components/Home';


class App extends Component {
  render() {
    return (
      <div className="App">
            <Router>
            <Switch>
            <Route exact path='/' component={Logreg} />
            <Route path='/Home' component={Home} />
            <Route render={function(){
                return (
                <p> Not Found
                <br />
                      <Link className='btn nav-link btn-success' to='/'>
                      Back to log and Reg
                      </Link>
                </p>
                )
            }} />
            </Switch>
            </Router>
      </div>
    );
  }
}

export default App;

