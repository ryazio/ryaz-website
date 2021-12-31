import PropTypes from 'prop-types';
import React from 'react';
import {
  LinkedIn, Twitter, Facebook, Instagram, Youtube,
} from '../../icons/social';

export const SocialLinks = ({ className }) => (
  <div className={`social-links ${className}`}>
    <LinkedIn />
    <Facebook />
    <Instagram />
    <Twitter />
    <Youtube />
  </div>
);

SocialLinks.propTypes = {
  className: PropTypes.string,
};
SocialLinks.defaultProps = {
  className: '',
};
