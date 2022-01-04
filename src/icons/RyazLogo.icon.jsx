import PropTypes from 'prop-types';
import React from 'react';

export const RyazLogo = ({ className }) => (
  <div className={`ryaz-logo ${className}`.trim()}>
    <div className="ryaz-logo-left" />
    <div className="ryaz-logo-right" />
  </div>
);

RyazLogo.propTypes = {
  className: PropTypes.string,
};

RyazLogo.defaultProps = {
  className: '',
};
