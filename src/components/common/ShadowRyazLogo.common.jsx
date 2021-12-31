import React from 'react';
import PropTypes from 'prop-types';
import { RyazLogo } from '../../icons';

export const ShadowRyazLogo = () => (
  <div className="ryaz-shadow">
    <RyazLogo className="ryaz-shadow-arrow" />
    <div className="ryaz-shadow-ellipse" />
  </div>
);

ShadowRyazLogo.propTypes = {};
ShadowRyazLogo.defaultProps = {};
