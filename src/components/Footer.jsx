import React from 'react';
import { Link } from 'react-router-dom';
import { RyazLogo } from '../icons';

import { SocialLinks } from './common';

export const Footer = () => (
  <footer>
    <div className="footer">
      <section>
        <div className="footer-logo-holder">
          <RyazLogo className="footer-logo" />
          {/* <p className="footer-logo-name">RYAZ.IO</p> */}
        </div>
        <p className="footer-text-address">#250, Ward no. 2, Near water tank Samrala 141114 IN</p>
        <p>+91 6280256990</p>
      </section>
      <section>
        <p className="footer-text"><Link to="/">Home</Link></p>
        <p className="footer-text"><Link to="/about">About Us</Link></p>
        <p className="footer-text"><Link to="/work">Our Work</Link></p>
        <p className="footer-text"><Link to="/contact">Contact</Link></p>
      </section>
      <section>
        <p className="footer-text"><Link to="/contact">Hire Us</Link></p>
        <p className="footer-text"><Link to="/contact">Join Us</Link></p>
        <SocialLinks className="footer-links-desktop" />
      </section>
      <SocialLinks className="footer-links-mobile" />
    </div>
  </footer>
);
