import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import projects from '../json/projects.json';
import { ForbyIcon } from '../icons/project';
import {
  CardSlider, CardStack, ColorScheme, FancyLabel, Testinomial, UserPill,
} from '../components/common';
import { Layout } from '../components';
import projectImage from '../images/projectImage.png';

const DATA = [
  {
    id: 1,
    image: projectImage,
  },
  {
    id: 2,
    image: projectImage,
  },
  {
    id: 3,
    image: projectImage,
  },
  {
    id: 4,
    image: projectImage,
  },
];

function SingleProject() {
  const params = useParams();
  const [projectData, setProjectData] = useState('');

  useEffect(() => {
    // find project from slug in the url and set the data in the react state
    const res = projects.find((project) => project.slug === params.name);
    setProjectData(res);
  }, []);

  return (
    <Layout className="project-page">

      <div className="project-details">

        <div className="project-info">
          <div className="project-info-name">
            <ForbyIcon />
            <span>{projectData.name}</span>
          </div>
          <p className="project-info-description">
            Building a community platform for the people and by the people. A
            place where everyone’s opinion matter!
          </p>
          <div className="project-info-labels">
            <FancyLabel type="purple">Designing</FancyLabel>
            <FancyLabel type="orange">Frontend Development</FancyLabel>
            <FancyLabel type="teal">Backend Development</FancyLabel>
          </div>
          <div className="project-info-people">
            <div className="project-info-section">
              <h4>Client</h4>
              <UserPill className="project-info-person" name="Sam Scheziku" />
            </div>
            <div className="project-info-section">
              <h4>Project Leader</h4>
              <UserPill className="project-info-person" image={projectImage} name="Sam Scheziku" />
              <UserPill className="project-info-person" image={projectImage} name="Sam Scheziku" />
            </div>
            <div className="project-info-section">
              <h4>Key Stakeholders</h4>
              <UserPill className="project-info-person" image={projectImage} name="Sam Scheziku" />
              <UserPill className="project-info-person" image={projectImage} name="Sam Scheziku" />
            </div>
          </div>
        </div>

        <div className="project-details-pic">
          <img src={projectImage} alt={projectData.name} />
        </div>

      </div>

      <div className="project-sections">
        <h5>Designs</h5>
        <p>We reflect craftsmanship through our work.</p>
        <CardStack className="project-sections-stack" dataKey="id" data={DATA}>
          {({ image }) => (
            <img src={image} alt="" />
          )}
        </CardStack>
      </div>
      <div className="project-sections">
        <h5>Mobile Designs</h5>
        <p>Our projects are always fully responsive.</p>
        <CardSlider className="project-sections-slider" dataKey="id" data={DATA}>
          {({ image }) => (
            <img src={image} alt="" />
          )}
        </CardSlider>
      </div>
      <div className="project-sections">
        <h5>Our Color Palette</h5>
        <p>Color Scheme plays a great role.</p>
        <ColorScheme className="project-sections-colors" colors={['#0B6FE4', '#C4C4C4', '#0B4FE4', '#C5C4C4', '#D66400']} />
      </div>
      <Testinomial
        className="project-testinomial"
        star={4}
        review="I’ve had nothing but the best interactions and experiences working with this quick and excellent team!"
        to="/"
      />
    </Layout>
  );
}

export default SingleProject;
