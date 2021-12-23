import React from 'react';
import { Link } from 'react-router-dom';
import NavIcon from '../icons/NavIcon';
import RyazLogo from './RyazLogo';

function Header() {
  return (
    <>
      <div className="side-header">
        <div className="header-logo">
          <Link to="/">
            <RyazLogo />
          </Link>
        </div>

        <Link className="nav-title-link ff-brandon-bold" to="/work">
          <span>Our Work</span>
        </Link>

        <div className="nav-icon">
          <NavIcon />
        </div>

      </div>
      {/*
      <div className="top-container">
        <div className="logo">
          <div className="left"></div><div className="right"></div>
        </div>
        <img className="nav-icon" src="./nav-icon.svg" alt=""></img>
      </div> */}
    </>
  );
}

export default Header;
