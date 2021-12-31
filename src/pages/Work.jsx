import React, { useState } from 'react';
import projects from '../json/projects.json';

import projectImage from '../images/projectImage.png';
import { Layout, ProjectCard } from '../components';

function Work() {
  // const [image, setImage] = useState(projects[0].mockupImage);

  return (
    <Layout className="work">
      <div className="work-tagline">
        We design, build and ship digital products on time with written
        guarantees on quality & performance.
      </div>
      <div className="work-list">
        <div className="work-list-image">
          <img src={projectImage} alt="" />
        </div>
        {projects.map((project, index) => (
          <>
            <ProjectCard
              key={project.id}
              sno={project.id}
              slug={project.slug}
              projectName={project.name}
              description={project.description}
              projectImage={projectImage}
              setImage={() => {}}
            />
            <div className="work-list-empty" />
          </>
        ))}
      </div>
    </Layout>
  );
}

export default Work;
