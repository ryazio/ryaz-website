import React from 'react';
import { Link } from 'react-router-dom';

function Project({
  srno, projectName, description, projectImage, setImage, slug,
}) {
  return (
    <div className="project">
      <div className="project-info">
        <span className="project-srno ff-brandon-bold">{srno}</span>
        <div>
          <div
            className="project-name"
            onMouseOver={() => setImage(projectImage)}
          >
            <Link to={`/work/${slug}`}>
              {projectName}
            </Link>
          </div>
          <div className="project-description">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
