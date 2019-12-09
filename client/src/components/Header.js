import React, { Component } from 'react';
import logo from '../images/logo.png';
import usuario from '../images/user.png';
import menu from '../images/menu.png';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        {/* <nav className="mynavbar">
          <a href="/users"><img src={usuario} alt="usuario" height="40px" /></a>
          <a href="/menu"><img src={menu} alt="menu" height="40px" /></a>
        </nav> */}
        <img className = "logo" src={logo} alt="logo" width="70%" />
      </div >
    );
  }
}
export default Header;