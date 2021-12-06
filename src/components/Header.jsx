import React from 'react';
import { Link } from 'react-router-dom';
import NavIcon from '../icons/NavIcon';
import RyazLogo from '../icons/RyazLogo';

function Header() {
  return (
    <div className="left-container">
      <Link to="/">
        <RyazLogo />
      </Link>

      <div><Link className="left-nav" to="/work">Our Work</Link></div>

      <div className="hamburger-icon"><NavIcon /></div>
    </div>
  );
}

export default Header;
