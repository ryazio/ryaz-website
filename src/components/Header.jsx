import React from 'react';
import { Link } from 'react-router-dom';
import { RyazLogo, NavIcon } from '../icons';

export const Header = ({ position }) => (
  <header>
    <Link className="header-logo" to="/">
      <RyazLogo />
    </Link>
    <NavIcon className="header-burger" />
  </header>
);
