import React, { Component } from 'react';
import circled from '../images/circled-right-2.png';
import { NavLink } from 'react-router-dom';

class Body extends Component {
  render() {
    return (
      <div className="Body" >
        <p>Find your perfect trip, deisgned by insiders who
          know and love their cities.</p>
        <h3>Start browsing</h3>
        <NavLink to={"/browsing"}> <img src={circled} alt="circle" width="30%"/></NavLink>
      </div >
    );
  }
}
export default Body;
