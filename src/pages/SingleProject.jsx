import React from 'react';
import { Link } from 'react-router-dom';
import FancyLabel from '../components/FancyLabel';
import RyazLogo from '../components/RyazLogo';
import NavIcon from '../icons/NavIcon';
import forby from '../icons/projectLogos/forby.svg';
import linkedIn from '../icons/social/linkedIn.svg';
import twitter from '../icons/social/twitter.svg';
import facebook from '../icons/social/facebook.svg';
import instagram from '../icons/social/instagram.svg';
import youtube from '../icons/social/youtube.svg';
import stars from '../icons/stars.svg';

function SingleProject() {
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
            <span>Forby</span>
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

      <div className="footer">
        <div className="details">
          <div className="header-logo">
            <RyazLogo />
          </div>
          <p>#250, Ward no. 2, Near water tank Samrala 141114 IN</p>
          <p>+91 6280256990</p>
        </div>
        <div className="links">
          <p><Link to="/ ">Home</Link></p>
          <p><Link to="/ ">About Us</Link></p>
          <p><Link to="/ ">Our Work</Link></p>
          <p><Link to="/ ">Contact</Link></p>
        </div>
        <div className="join-us">
          <p>Hire Us</p>
          <p>Join Us</p>
          <div className="social-links">
            <img src={linkedIn} alt="linkedIn" />
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
            <img src={twitter} alt="twitter" />
            <img src={youtube} alt="youtube" />
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProject;
