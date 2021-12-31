import PropTypes from 'prop-types';
import React from 'react';

export const FancyLabel = ({ className, type, children }) => (
  <div className={`fancy-label ${type ? `fancy-label--${type}` : ''} ${className}`.trim()}>{children}</div>
);

FancyLabel.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['purple', 'teal', 'orange']),
};

FancyLabel.defaultProps = {
  className: '',
  type: 'purple',
};
