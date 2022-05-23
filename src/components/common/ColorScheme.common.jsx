import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useSize } from '../../hooks';
import { CopyIcon } from '../../icons';

const variantsParent = { hidden: {}, visible: {} };
const variants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

function hexCol(color) {
  const hex = color.replace('#', '');
  const cr = parseInt(hex.substr(0, 2), 16);
  const cg = parseInt(hex.substr(2, 2), 16);
  const cb = parseInt(hex.substr(4, 2), 16);
  const brightness = (cr * 299 + cg * 587 + cb * 114) / 1000;
  return brightness > 155;
}

export const ColorScheme = ({ className, colors }) => {
  const parentContainer = useRef();
  const { width } = useSize(parentContainer);
  let c1;

  return (
    <motion.div
      custom={{ width, colors }}
      ref={parentContainer}
      className={`color-scheme ${className}`}
      transition={{ type: 'tween' }}
      animate={{ height: width / colors.length || undefined }}
    >
      {colors.map((color) => {
        c1 = hexCol(color) ? 'white-back' : '';
        return (
          <motion.div
            key={color}
            className={`color-scheme-block ${c1}`}
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
              whileTap={{ scale: 0.9 }}
            >
              {c1 === 'white-back' ? (
                <CopyIcon fill="#333" />
              ) : (
                <CopyIcon fill="#fff" />
              )}
              <p>{color}</p>
            </motion.div>
          </motion.div>
        );
      })}
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
