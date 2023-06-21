import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

export const ProjectCard = ({
  sno,
  projectName,
  description,
  slug,
  projectImage,
  setImage,
  ...props
}) => (
  <div className="project" {...props} onMouseOver={setImage}>
    <span className="project-sno">{sno}</span>
    <Link to={`/work/${slug}`} className="links">
      <div className="project-title">{projectName}</div>
      <div className="project-description">{description}</div>
      <img className="project-image" src={projectImage} alt="" />
    </Link>
  </div>
);

ProjectCard.propTypes = {
  description: PropTypes.string.isRequired,
  projectImage: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  setImage: PropTypes.func.isRequired,
  sno: PropTypes.string.isRequired,
};
