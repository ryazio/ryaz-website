import React from 'react';
import '../styles/styles.scss';
import { Link } from 'react-router-dom';
import NavIcon from '../icons/NavIcon';

function Footer() {
  return (
    <div className="side-footer">
      <div className="nav-icon">
        <NavIcon />
      </div>
      <Link className="nav-title-link" to="/ryaz-method"><span>The Ryaz Method</span></Link>
      <div>&nbsp;</div>
    </div>
  );
}

export default Footer;
