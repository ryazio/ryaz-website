import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { StarIcon } from '../../icons';

export const Testinomial = ({ star, review, to }) => (
  <div className="testimonial">
    <div className="testimonial-stars">
      {Object.keys([...new Array(star)]).map((index) => (
        <StarIcon key={index} />
      ))}
    </div>
    <p className="testimonial-message">{review}</p>
    <Link className="more-reviews" to={to}>Read our client review.</Link>
  </div>
);

Testinomial.propTypes = {
  review: PropTypes.string,
  star: PropTypes.number,
  to: PropTypes.string,
};
Testinomial.defaultProps = {
  review: '',
  star: 1,
  to: '',
};
