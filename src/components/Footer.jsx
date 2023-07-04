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
        <p className="footer-text-address">H. No. 188/2, Near Raksha Madam, Water Tank Road, Samrala, Ludhiana, Punjab, 141114 IN</p>
        <p>+91 6280256990</p>
      </section>
      <section>
        <p className="footer-text"><a href="/">Home</a></p>
        <p className="footer-text"><a href="/#about">About Us</a></p>
        <p className="footer-text"><a href="/#work">Our Work</a></p>
        <p className="footer-text"><a href="/#contact">Contact</a></p>
      </section>
      <section>
        <p className="footer-text"><a href="/#contact">Hire Us</a></p>
        <p className="footer-text"><a href="/#contact">Join Us</a></p>
        <SocialLinks className="footer-links-desktop" />
      </section>
      <SocialLinks className="footer-links-mobile" />
    </div>
  </footer>
);
