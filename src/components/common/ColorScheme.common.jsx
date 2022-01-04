import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useSize } from '../../hooks';
import { CopyIcon } from '../../icons';

export const ColorScheme = ({ className, colors }) => {
  const parentContainer = useRef();
  const { width } = useSize(parentContainer);
  return (
    <motion.div
      ref={parentContainer}
      className={`color-scheme ${className}`}
      transition={{ type: 'tween' }}
      animate={{ height: width / colors.length || undefined }}
    >
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
    </motion.div>
  );
};

ColorScheme.propTypes = {
  className: PropTypes.string,
  colors: PropTypes.arrayOf(PropTypes.string),
};

ColorScheme.defaultProps = {
  className: '',
  colors: [],
};
