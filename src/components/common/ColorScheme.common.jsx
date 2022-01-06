import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useSize } from '../../hooks';
import { CopyIcon } from '../../icons';

const variantsParent = { hidden: { }, visible: { } };
const variants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

export const ColorScheme = ({ className, colors }) => {
  const parentContainer = useRef();
  const { width } = useSize(parentContainer);
  return (
    <motion.div
      custom={{ width, colors }}
      ref={parentContainer}
      className={`color-scheme ${className}`}
      transition={{ type: 'tween' }}
      animate={{ height: width / colors.length || undefined }}
    >
      {colors.map((color) => (
        <motion.div
          key={color}
          className="color-scheme-block"
          style={{ background: color }}
          initial="hidden"
          whileHover="visible"
          whileFocus="visible"
          whileTap="visible"
          variants={variantsParent}
        >
          <motion.div
            className="color-scheme-label"
            variants={variants}
            onClick={() => navigator.clipboard.writeText(color)}
          >
            <CopyIcon />
            <p>{color}</p>
          </motion.div>
        </motion.div>
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
