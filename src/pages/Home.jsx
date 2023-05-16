import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components';
import AboutUs from './AboutUs';
import Work from './Work';

function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <Layout noFooter isShadowLogo>
      <div className="home">
        <div className="home-left">
          <Link to="/work">Our Work</Link>
        </div>
        <div className="home-middle">
          <div className="home-middle-text">
            <div className="home-tagline">
              Tech Leadership that your startup deserves.
            </div>
            <div className="home-info">
              Ryaz builds, ships, and launches your digital product with
              <span> guarantees </span>
              on quality and performance.
            </div>
          </div>
          <div className="home-middle-buttons">
            <Link
              to="/work"
              className="home-button primary-btn primary-btn--inverted"
            >
              Our Work
            </Link>
            <Link to="/contact" className="home-button primary-btn shadow">
              Hire Us
            </Link>
          </div>
        </div>
        <div className="home-right">
          <Link to="/about">About Us</Link>
        </div>
      </div>
      <Work isNavVisible={false} isFooterVisible={false} />
      <AboutUs isNavVisible={false} />
    </Layout>
  );
}

export default Home;
