import React from 'react';
import '../styles/styles.scss';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="side-footer">
      <img className="nav-icon" src="nav-icon.svg" alt="" />
      <Link className="nav-title-link" to="/method"><span>The Ryaz Method</span></Link>
      <div>&nbsp;</div>
    </div>
  );
}

export default Footer;
