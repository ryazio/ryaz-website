import React from 'react';
import { Link } from 'react-router-dom';
import { RyazLogo, NavIcon } from '../icons';

function Header({ position }) {
  const fixedPosition = {
    position: 'fixed',
  };

  return (
    <div className="top-nav" style={position && fixedPosition}>
      <div className="header-logo">
        <Link to="/">
          <RyazLogo />
        </Link>
      </div>
      <NavIcon />
    </div>
  );
}

export default Header;
