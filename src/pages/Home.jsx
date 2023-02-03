import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components';

function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <Layout className="home" noFooter isShadowLogo>
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
    </Layout>
  );
}

export default Home;
