import React, { useState, useEffect } from 'react';
import '../styles/styles.scss';
import '../styles/work.scss';
import { Link } from 'react-router-dom';
import RyazLogo from '../components/RyazLogo';
import Project from '../components/Project';
import NavIcon from '../icons/NavIcon';
import MovingLogo from '../icons/MovingLogo';

function Work() {
  const [image, setImage] = useState('./Cover.png');

  return (
    <>
      <MovingLogo />
      <div className="top-nav" style={{ position: 'fixed' }}>
        <div className="header-logo">
          <Link to="/">
            <RyazLogo />
          </Link>
        </div>
        <div className="nav-icon">
          <NavIcon />
        </div>
      </div>

      <div className="work-container">

        <div className="work-tagline ff-brandon">
          We design, build and ship digital products on time with written
          guarantees on quality & performance.
        </div>

        <div className="projects-block ff-brandon">
          <Project
            srno="01"
            projectName="Forby"
            description="Designing a minimal and user-friendly for a community where
            every opionion matters."
            projectImage="./Cover.png"
            setImage={setImage}
          />
          <Project
            srno="02"
            projectName="Dev Studio"
            description="A Spain project, a marketplace for flamenco teachers with classes and events."
            projectImage="./Cover.png"
            setImage={setImage}
          />
          <Project
            srno="03"
            projectName="Flamencos Online"
            description="Designing a minimal and user-friendly for a community where every opionion matters."
            projectImage="./Cover.png"
            setImage={setImage}
          />
          <Project
            srno="04"
            projectName="Wepath"
            description="Designing a minimal and user-friendly for a community where every opionion matters."
            projectImage="./Cover.png"
            setImage={setImage}
          />
        </div>
        <div className="project-image">
          <img src={image} alt="" />
        </div>
      </div>
    </>
  );
}

export default Work;
