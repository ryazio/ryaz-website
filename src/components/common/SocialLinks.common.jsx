import PropTypes from 'prop-types';
import React from 'react';
import {
  LinkedIn, Twitter, Facebook, Instagram, Youtube,
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
  </div>
);

SocialLinks.propTypes = {
  className: PropTypes.string,
};
SocialLinks.defaultProps = {
  className: '',
};
