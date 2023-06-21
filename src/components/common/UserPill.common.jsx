import PropTypes from 'prop-types';
import React from 'react';

export const UserPill = ({ className, name, image }) => (
  <div className={`user-pill ${className}`.trim()}>
    {image && <img src={image} alt={name} />}
    <p>{name}</p>
  </div>
);

UserPill.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
};

UserPill.defaultProps = {
  className: '',
  image: '',
  name: '',
};
