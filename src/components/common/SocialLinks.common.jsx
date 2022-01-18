import PropTypes from 'prop-types';
import React from 'react';
import {
  LinkedIn, Twitter, Facebook, Instagram, Youtube, Dribbble, Behance, Upwork,
} from '../../icons/social';

export const SocialLinks = ({ className }) => (
  <div className={`social-links ${className}`}>
    <a href="https://www.linkedin.com/company/ryaz" target="_blank" rel="noreferrer">
      <LinkedIn />
    </a>
    {/* <Facebook /> */}
    <a href="https://www.instagram.com/ryaz.io" target="_blank" rel="noreferrer">
      <Instagram />
    </a>
    <a href="https://twitter.com/ryazio" target="_blank" rel="noreferrer">
      <Twitter />
    </a>
    <a href="https://www.youtube.com/channel/UCZ7ER9RB6mi1DcvfNhX0Krg" target="_blank" rel="noreferrer">
      <Youtube />
    </a>
    <a href="https://dribbble.com/ishwerdas" target="_blank" rel="noreferrer">
      <Dribbble />
    </a>
    <a href="https://www.behance.net/ishwerdas" target="_blank" rel="noreferrer">
      <Behance />
    </a>
    <a href="https://www.upwork.com/o/companies/~01c8fd403a62885720/" target="_blank" rel="noreferrer">
      <Upwork />
    </a>
  </div>
);

SocialLinks.propTypes = {
  className: PropTypes.string,
};
SocialLinks.defaultProps = {
  className: '',
};
