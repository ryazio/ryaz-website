import React from 'react';
import { Link } from 'react-router-dom';
import RyazLogo from './RyazLogo';
import NavIcon from '../icons/NavIcon';

function Header() {
  return (
    <div className="top-nav">
      <div className="header-logo">
        <Link to="/">
          <RyazLogo />
        </Link>
      </div>
      <div className="nav-icon">
        <NavIcon />
      </div>
    </div>
  );
}

export default Header;
