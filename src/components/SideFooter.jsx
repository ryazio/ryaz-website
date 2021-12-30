import React from 'react';
import '../styles/index.scss';
import { Link } from 'react-router-dom';
import { NavIcon } from '../icons';

function Footer() {
  return (
    <div className="side-footer">
      <NavIcon />
      <Link className="nav-title-link" to="/ryaz-method"><span>The Ryaz Method</span></Link>
      <div>&nbsp;</div>
    </div>
  );
}

export default Footer;
