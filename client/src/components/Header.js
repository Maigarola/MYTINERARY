import React, { Component } from 'react';
import logo from '../images/logo.png';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <img className = "logo" src={logo} alt="logo" width="70%" />
      </div >
    );
  }
}
export default Header;