import React from 'react';
import { Link } from 'react-router-dom';
import { RyazLogo } from '../icons';

import { SocialLinks } from './common';

export const Footer = () => (
  <footer>
    <div className="footer">
      <section>
        <RyazLogo className="footer-logo" />
        <p>#250, Ward no. 2, Near water tank Samrala 141114 IN</p>
        <p>+91 6280256990</p>
      </section>
      <section>
        <p><Link to="/">Home</Link></p>
        <p><Link to="/about">About Us</Link></p>
        <p><Link to="/work">Our Work</Link></p>
        <p><Link to="/contact">Contact</Link></p>
      </section>
      <section>
        <p><Link to="/contact">Hire Us</Link></p>
        <p><Link to="/contact">Join Us</Link></p>
        <SocialLinks className="footer-links-desktop" />
      </section>
      <SocialLinks className="footer-links-mobile" />
    </div>
  </footer>
);
