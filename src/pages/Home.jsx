import React from 'react';
// import '../styles/home.scss';
import Header from '../components/SideHeader';
import Footer from '../components/SideFooter';
import MovingLogo from '../icons/MovingLogo';
// import BackgroundLogo from '../icons/BackgroundLogo';
import RyazLogo from '../components/RyazLogo';

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="middle-section">

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
      <MovingLogo />
    </div>
  );
}

export default Home;
