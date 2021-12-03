import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BackgroundLogo from '../icons/BackgroundLogo';
import RyazLogo from '../icons/RyazLogo';

function Home() {
  return (
    <div className="container">
      <Header />
      <div className="middle">
        <BackgroundLogo />

        <div className="home-text">
          <div className="tagline ff-brandon-bold">
            Tech Leadership that your startup deserves.
          </div>
          <div className="info ff-brandon">
            Ryaz builds, ships and launches your digital product with gaurantees
            on quality and performance.
          </div>
        </div>
        <div className="arrow">
          <RyazLogo />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
