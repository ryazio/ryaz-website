import React from 'react';
import { Link } from 'react-router-dom';
import { RyazLogo } from '../icons';
import {
  LinkedIn, Twitter, Facebook, Instagram, Youtube,
} from '../icons/social';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-sections">
        <RyazLogo className="header-logo" />
        <p>#250, Ward no. 2, Near water tank Samrala 141114 IN</p>
        <p>+91 6280256990</p>
      </div>
      <div className="footer-sections links">
        <p><Link to="/ ">Home</Link></p>
        <p><Link to="/ ">About Us</Link></p>
        <p><Link to="/ ">Our Work</Link></p>
        <p><Link to="/ ">Contact</Link></p>
      </div>
      <div className="footer-sections join-us">
        <p>Hire Us</p>
        <p>Join Us</p>
        <div className="social-links">
          <img src={LinkedIn} alt="linkedIn" />
          <img src={Facebook} alt="facebook" />
          <img src={Instagram} alt="instagram" />
          <img src={Twitter} alt="twitter" />
          <img src={Youtube} alt="youtube" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
