import React from 'react';
// import '../styles/home.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BackgroundLogo from '../icons/BackgroundLogo';
import RyazLogo from '../components/RyazLogo';

function Home() {
  return (
    <div className="container">
      <div className="home">
        <Header />
        <div className="middle-section">
          <div className="background-logo">
            <BackgroundLogo />
          </div>

          <div className="home-text">
            <div className="tagline ff-brandon-bold">
              Tech Leadership that your startup deserves.
            </div>
            <div className="info ff-brandon">
              Ryaz builds, ships and launches your digital product with
              <span className="highlight-grn"> gaurantees </span>
              on quality and performance.
            </div>
          </div>
          <div className="arrow-with-shadow">
            <div className="arrow">
              <RyazLogo />
            </div>
            <div className="ellipse">&nbsp;</div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
