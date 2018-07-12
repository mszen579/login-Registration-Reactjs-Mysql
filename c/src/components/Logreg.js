//Logreg.js
import React, { Component } from 'react';
import  Login from "./Login";
import Register from "./Register";
import { Link } from "react-router-dom";//this is for routing

export default class Logreg extends Component {
 render() {
   return <div className="logreg">
       <Login history={this.props.history} />
       <hr />
       <Register />
     </div>;
 }
};

//you need to add history funciton so it will direct the user after login