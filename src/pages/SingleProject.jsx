import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import forby from '../icons/projectLogos/forby.svg';
import projects from '../json/projects.json';
import { RyazLogo, NavIcon, StarIcon } from '../icons';
import { FancyLabel } from '../components/common';
import { Layout } from '../components';

function SingleProject(props) {
  const params = useParams();
  const [projectData, setProjectData] = useState('');

  useEffect(() => {
    // find project from slug in the url and set the data in the react state
    const res = projects.find((project) => project.slug === params.name);
    setProjectData(res);
  }, []);

  return (
    <Layout>
      <div className="project-details ff-brandon">
        <div className="project-info">
          <div className="logo-and-name">
            <img src={forby} alt="" />
            <span>{projectData.name}</span>
          </div>
          <div className="project-description">
            <p>
              Building a community platform for the people and by the people. A
              place where everyone’s opinion matter!
            </p>
          </div>
          <div className="fancy-labels">
            <FancyLabel type="purple">Designing</FancyLabel>
            <FancyLabel type="orange">Frontend Development</FancyLabel>
            <FancyLabel type="teal">Backend Development</FancyLabel>
          </div>
          <div className="people">
            <div className="name-and-designation">
              <h4 className="ff-brandon-bold">Client</h4>
              <p>Sam Scheziku</p>
            </div>
            <div className="name-and-designation">
              <h4 className="ff-brandon-bold">Project Leader</h4>
              <p>Nandini Prashar</p>
            </div>
            <div className="name-and-designation">
              <h4 className="ff-brandon-bold">Key Stakeholders</h4>
              <p>Nandini Prashar</p>
            </div>
          </div>
        </div>
        <div className="image">
          <img src="./Cover.png" alt="projectLogo" />
        </div>
      </div>
      <div className="other-sections">
        <h5 className="ff-brandon-bold">Designs</h5>
        <p>We reflect craftsmanship through our work.</p>
      </div>
      <div className="other-sections">
        <h5 className="ff-brandon-bold">Mobile Designs</h5>
        <p>Our projects are always fully responsive.</p>
      </div>
      <div className="other-sections">
        <h5 className="ff-brandon-bold">Our Color Palette</h5>
        <p>Color Scheme plays a great role.</p>
        <div className="color-scheme">
          <div className="colors" style={{ background: '#0B6FE4' }} />
          <div className="colors" style={{ background: '#4897F4' }} />
          <div className="colors" style={{ background: '#FAFAFA' }} />
          <div className="colors" style={{ background: '#F2F2F1' }} />
          <div className="colors" style={{ background: '#C4C4C44D' }}>D66400</div>
        </div>
      </div>

      <div className="testimonial">
        <div className="stars">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
        <p className="message">
          I’ve had nothing but the best interactions and experiences
          working with this quick and excellent team!
        </p>
        <p className="more-reviews">
          <Link to="/">Read our client review.</Link>
        </p>
      </div>
    </Layout>
  );
}

export default SingleProject;
