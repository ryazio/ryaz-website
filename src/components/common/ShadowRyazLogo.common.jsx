import React from 'react';
import PropTypes from 'prop-types';
import { RyazLogo } from '../../icons';

export const ShadowRyazLogo = ({ className }) => (
  <div className={`ryaz-shadow ${className}`}>
    <RyazLogo className="ryaz-shadow-arrow" />
    <div className="ryaz-shadow-ellipse" />
  </div>
);

ShadowRyazLogo.propTypes = {
  className: PropTypes.string,
};
ShadowRyazLogo.defaultProps = {
  className: '',
};
