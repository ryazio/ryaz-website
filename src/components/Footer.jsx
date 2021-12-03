import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="right-container">
      <img className="nav-icon" src="nav-icon.svg" alt="" />
      <Link to="/method">
        <div className="right-nav">The Ryaz Method</div>
      </Link>
    </div>
  );
}

export default Footer;
