import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components';

function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <Layout className="home" noFooter isShadowLogo>
      <div className="home-left">
        <Link to="/work">
          Our Work
        </Link>
      </div>
      <div className="home-middle">
        <div className="home-middle-text">
          <div className="home-tagline">
            Tech Leadership that your startup deserves.
          </div>
          <div className="home-info">
            Ryaz builds, ships, and launches your digital product with
            <span> gaurantees </span>
            on quality and performance.
          </div>
        </div>
        <div className="home-middle-buttons">
          <Link to="/contact" className="home-button primary-btn primary-btn--inverted">Join Us</Link>
          <Link to="/work" className="home-button primary-btn">Our Work</Link>
        </div>
      </div>
      <div className="home-right">
        <Link to="/about">
          About Us
        </Link>
      </div>
    </Layout>
  );
}

export default Home;
