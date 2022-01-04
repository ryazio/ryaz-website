import PropTypes from 'prop-types';
import React from 'react';

export const RyazPillar = ({
  title, number, tagline, content,
}) => (
  <div className="pillar">
    <div className="pillar-info">
      <h2>
        { title }
      </h2>
      <p className="ff-brandon-bold">
        {number}
      </p>
    </div>
    <div className="pillar-description">
      <p>{tagline}</p>
      <p>
        {content}
      </p>
    </div>
  </div>
);

RyazPillar.propTypes = {
  title: PropTypes.string,
  number: PropTypes.string,
  tagline: PropTypes.string,
  content: PropTypes.string,
};
RyazPillar.defaultProps = {
  title: 'High value',
  number: '01',
  tagline: '',
  content: '',
};
