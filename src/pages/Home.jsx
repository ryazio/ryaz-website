import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components';

function Home() {
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
            Ryaz builds, ships and launches your digital product with
            <span> gaurantees </span>
            on quality and performance.
          </div>
        </div>
      </div>
      <div className="home-right">
        <Link to="/ryaz-method">
          THE RYAZ METHOD
        </Link>
      </div>
    </Layout>
  );
}

export default Home;
