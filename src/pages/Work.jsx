import React from 'react';
import '../styles/styles.scss';
import '../styles/work.scss';
import { Link } from 'react-router-dom';
import RyazLogo from '../components/RyazLogo';
import Project from '../components/Project';
// import BackgroundLogo from '../icons/BackgroundLogo';

function Work() {
  return (
    <div className="container">
      <div className="top-nav">
        <div className="header-logo">
          <Link to="/">
            <RyazLogo />
          </Link>
        </div>
        <img src="nav-icon.svg" alt="" />
      </div>

      <div className="work-container">
        {/* <div className="background-logo">
          <BackgroundLogo />
        </div> */}

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
            projectImage="./Group.svg"
          />
          <Project
            srno="02"
            projectName="Dev Studio"
            description="A Spain project, a marketplace for flamenco teachers with classes and events."
            projectImage="./Group.svg"
          />
        </div>
      </div>
    </div>
  );
}

export default Work;
