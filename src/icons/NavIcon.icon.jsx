import PropTypes from 'prop-types';
import React from 'react';

export const NavIcon = ({ className, onClick }) => (
  <button type="button" aria-label="Menu" className={`nav-icon ${className}`.trim()} onClick={onClick}>
    <div className="nav-icon-layer" />
    <div className="nav-icon-layer" />
    <div className="nav-icon-layer" />
  </button>
);

NavIcon.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};
NavIcon.defaultProps = {
  className: '',
  onClick: () => {},
};
