import PropTypes from 'prop-types';
import React from 'react';
import { CopyIcon } from '../../icons';

export const ColorScheme = ({ className, colors }) => (
  <div className={`color-scheme ${className}`}>
    {colors.map((color) => (
      <div
        key={color}
        className="color-scheme-block"
        style={{ background: color }}
      >
        <div className="color-scheme-label">
          <CopyIcon />
          <p>{color}</p>
        </div>
      </div>
    ))}
  </div>
);

ColorScheme.propTypes = {
  className: PropTypes.string,
  colors: PropTypes.arrayOf(PropTypes.string),
};

ColorScheme.defaultProps = {
  className: '',
  colors: [],
};
