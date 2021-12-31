import React, { useState } from 'react';
import '../styles/index.scss';
import '../styles/work.scss';
import Project from '../components/Project';
import projects from '../json/projects.json';

import projectImage from '../images/projectImage.png';
import { Layout } from '../components';

function Work() {
  // const [image, setImage] = useState(projects[0].mockupImage);

  return (
    <Layout className="work-container">
      <div className="work-tagline ff-brandon">
        We design, build and ship digital products on time with written
        guarantees on quality & performance.
      </div>
      <div className="project-image">
        <img src={projectImage} alt="" />
      </div>

      <div className="projects-block ff-brandon">
        {projects.map((project) => (
          <Project
            key={project.id}
            srno={project.id}
            slug={project.slug}
            projectName={project.name}
            description={project.description}
            projectImage={project.mockupImage}
            setImage={() => {}}
          />
        ))}
      </div>
    </Layout>
  );
}

export default Work;
