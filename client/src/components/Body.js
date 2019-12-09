import React, { Component } from 'react';
import circled from '../images/circled-right-3.png';
import { NavLink } from 'react-router-dom';
import Header from './Header';

class Body extends Component {
  render() {
    return (
      <div className="Body" >
        <Header/>
        <p>Find your perfect trip, designed by insiders who
          know and love their cities.</p>
        <NavLink to={"/cities"}> <img src={circled} alt="circle" width="20%"/></NavLink>
      </div >
    );
  }
}
export default Body;
