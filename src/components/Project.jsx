import React, { useState } from 'react';

function Project({
  srno, projectName, description, projectImage,
}) {
  const [image, setImage] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const showImage = () => {
    setIsMounted(!isMounted);
    if (!image) setImage(true);
  };

  const mountAnimation = {
    animation: 'mount 250ms ease-in',
  };
  const unmountAnimation = {
    animation: 'unmount 250ms ease-out',
    animationFillMode: 'forwards',
  };

  return (
    <>
      <div className="project">
        <div className="project-info">
          <span className="project-srno ff-brandon-bold">{srno}</span>
          <div>
            <div
              className="project-name"
              onMouseOver={showImage}
              onMouseOut={showImage}
            >
              { projectName }
            </div>
            <div className="project-description">
              {description}
            </div>
          </div>
        </div>
      </div>
      <div className="project-image">
        {image && (
        <img
          src={projectImage}
          alt={projectName}
          style={isMounted ? mountAnimation : unmountAnimation}
          onAnimationEnd={() => { if (!isMounted) setImage(false); }}
        />
        )}
      </div>
    </>
  );
}

export default Project;
