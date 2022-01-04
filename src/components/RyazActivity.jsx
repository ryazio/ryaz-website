import PropTypes from 'prop-types';
import React from 'react';

export const RyazActivity = ({
  title, tagline, content,
}) => (
  <div className="activity">
    <div className="top-cover-bar" />
    <h4>{ title }</h4>
    <p className="activity-tagline">
      {tagline}
    </p>
    <p className="activity-detail">
      {content}
    </p>
  </div>
);

RyazActivity.propTypes = {
  title: PropTypes.string,
  tagline: PropTypes.string,
  content: PropTypes.string,
};
RyazActivity.defaultProps = {
  title: 'gaming',
  tagline: '',
  content: '',
};
