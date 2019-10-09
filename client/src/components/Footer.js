import React, { Component } from 'react';
import iconhome from '../images/homeIcon.png'
import {NavLink} from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div className="Footer" >
        <NavLink to={"/"}><img src={iconhome} alt="iconhome" width="10%" /></NavLink>
      </div >
    );
  }
}
export default Footer;
