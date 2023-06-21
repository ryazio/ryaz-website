import React from 'react';
import PropTypes from 'prop-types';
import { ArrowIcon } from '../../icons';

export const ProjectButton = ({ className, children, ...props }) => (
  <button className={`project-button ${className}`} type="button" {...props}>
    {children}
    <ArrowIcon />
  </button>
);

ProjectButton.propTypes = {
  className: PropTypes.string,
};
ProjectButton.defaultProps = {
  className: '',
};
