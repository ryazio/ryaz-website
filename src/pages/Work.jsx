import React, { useState } from 'react';
import '../styles/styles.scss';
import '../styles/work.scss';
import Project from '../components/Project';
import Footer from '../components/Footer';
import Header from '../components/Header';
import projects from '../json/projects.json';

function Work() {
  const [image, setImage] = useState(projects[0].mockupImage);

  return (
    <>
      <Header />

      <div className="work-container">

        <div className="work-tagline ff-brandon">
          We design, build and ship digital products on time with written
          guarantees on quality & performance.
        </div>
        <div className="project-image">
          <img src={image} alt="" />
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
              setImage={setImage}
            />
          ))}
        </div>

      </div>
      <Footer />
    </>
  );
}

export default Work;
