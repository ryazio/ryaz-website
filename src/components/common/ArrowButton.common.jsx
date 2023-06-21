import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { ArrowIcon } from '../../icons';

export const ArrowButton = ({
  className, onClick, Icon = ArrowIcon, y,
}) => (
  <motion.button
    type="button"
    aria-label="Close"
    className={`arrow-button ${className}`}
    onClick={onClick}
    initial={{ y }}
    whileTap={{ scale: 0.8 }}
  >
    <Icon />
  </motion.button>
);

ArrowButton.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  y: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  Icon: PropTypes.elementType,
};
ArrowButton.defaultProps = {
  onClick: () => {},
  y: 0,
  Icon: ArrowIcon,
};
