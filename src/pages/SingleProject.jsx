import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import FancyLabel from '../components/FancyLabel';
import RyazLogo from '../components/RyazLogo';
import NavIcon from '../icons/NavIcon';
import Footer from '../components/Footer';
import forby from '../icons/projectLogos/forby.svg';
import stars from '../icons/stars.svg';
import projects from '../json/projects.json';

function SingleProject(props) {
  const params = useParams();
  const [projectData, setProjectData] = useState('');

  useEffect(() => {
    // find project from slug in the url and set the data in the react state
    const res = projects.find((project) => project.slug === params.name);
    setProjectData(res);
  }, []);

  return (
    <>
      <div className="top-nav">
        <div className="header-logo">
          <Link to="/">
            <RyazLogo />
          </Link>
        </div>
        <div className="nav-icon">
          <NavIcon />
        </div>
      </div>
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
            <FancyLabel colorA="#DEAAFF" colorB="#D8BBFF" text="Designing" />
            <FancyLabel
              colorA="#FAE1DD"
              colorB="#FEC5BB"
              text="Frontend Development"
            />
            <FancyLabel
              colorA="#E8FFFA"
              colorB="#D3FEF5"
              text="Backend Development"
            />
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
          <img src={stars} alt="star" />
          <img src={stars} alt="star" />
          <img src={stars} alt="star" />
          <img src={stars} alt="star" />
          <img src={stars} alt="star" />
        </div>
        <p className="message">
          I’ve had nothing but the best interactions and experiences
          working with this quick and excellent team!
        </p>
        <p className="more-reviews">
          <Link to="/">Read our client review.</Link>
        </p>
      </div>

      <Footer />
    </>
  );
}

export default SingleProject;
